import axios from "axios";
import { urlAccounts } from "../endpoints";
import DisplayErrors from "../utils/DisplayErrors";
import { authenticationResponse, userCredentials } from "./auth.models";
import AuthForm from "./AuthForm";
import {useState, useContext} from "react";
import { getClaims, saveToken } from "./handleJWT";
import AuthenticationContext from "./AuthenticationContext";
import css from "./Login.module.css";
import loginBackground1 from "../imgs/login-wallpaper-1.jpg";
import loginBackground2 from "../imgs/login-wallpaper-2.jpg";
import loginBackground3 from "../imgs/login-wallpaper-3.jpg";
import loginBackground4 from "../imgs/login-wallpaper-4.jpg";
import loginBackground5 from "../imgs/login-wallpaper-5.jpg";
import testBackground from "../imgs/login-wallpaper-6.jpg";
import tile from "../imgs/tile.jpg";
export default function Login() {

    const [errors, setErrors] = useState<string[]>([]);
    const {update} = useContext(AuthenticationContext);

    async function login(credentials: userCredentials) {
        try {
            const response = await axios.post<authenticationResponse>(`${urlAccounts}/login`, credentials);
            saveToken(response.data);
            update(getClaims());
        } catch(error) {
            setErrors([error.response.data]);
        }
    }

    // return (<>
    //     <h3>Login</h3>
    //     <DisplayErrors errors={errors} />
    //     <AuthForm 
    //     model={{email: '', password: ''}} 
    //     onSubmit={async values => await login(values)} />
    // </>)
    return (
      <div style={{display: "flex", height: "100vh", backgroundImage: `url(${loginBackground1})`, backgroundSize: "cover"}}>
        <main className={css.main}>
            <h1>Eve Logistics</h1>
            <article>
                <DisplayErrors errors={errors} />
                <AuthForm
                    action={login}
                />
          </article>
        </main>
        <aside className={css.aside} style={{backgroundImage: `url()`}}>
        </aside>
      </div>
    );
}