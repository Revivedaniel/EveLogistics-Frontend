import TextField from '@mui/material/TextField';
import { userCredentials } from "./auth.models";
import { useState } from "react";
import { Button } from '@mui/material';

export default function AuthForm(props: AuthFormProps) {
    const [emailError, setEmailError] = useState<string>("");
    const [passwordError, setPasswordError] = useState<string>("");

    const textFieldStyles = {
        "& .MuiFormControl-root": {color: "inherit"},
        "& Label.MuiFormLabel-root": {color: "inherit"},
        "& .MuiInputBase-root": {
            color: "inherit", 
            backgroundColor: "rgba(10, 10, 10, 0.8);",
        },
        "& .MuiOutlinedInput-notchedOutline": {borderColor: "#2e3031"},
        "&  .Mui-focused fieldset": {borderColor: "#439db4 !important"}, // Using important becase the error prop overwrites any styles
        "& .MuiInputBase-input": {color: "inherit"},
        "& .Mui-error fieldset": {borderColor: "#f2884f !important"}, // Using important becase the error prop overwrites any styles
        "& .MuiFormHelperText-root": {color: "#f2884f !important"},
    };

    function validateEmail(email: string) {
      const re = /\S+@\S+\.\S+/;
      if (!re.test(email)) {
        setEmailError("Invalid email format");
        return;
    }
      setEmailError("");
      return;
    }
    function validatePassword(password: string) {
      const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      if (!re.test(password)) {
        setPasswordError("Invalid password format");
        return;
      }
      setPasswordError("");
      return;
    }

    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const email = form.email.value;
        const password = form.password.value;
        props.action({email, password});
      }}>
        <h2>Login to Eve Logistics</h2>
        <TextField
        error={emailError !== ""}
          required
          type="email"
          label="Email"
          name="email"
          helperText={emailError}
          onBlur={(e) => {validateEmail(e.target.value);}}
          margin="normal"
          sx={textFieldStyles}
        />
        <TextField
        error={passwordError !== ""}
        required 
        label="Password" 
        type="password" 
        name="password"
        helperText={passwordError} 
        onBlur={(e) => {validatePassword(e.target.value);}}
        margin="normal"
        sx={textFieldStyles}
        />

        <Button type="submit">
          Login
        </Button>
        <Button disabled>Register</Button>
      </form>
    );
}

interface AuthFormProps {
    action(credentials: userCredentials): Promise<void>;
}