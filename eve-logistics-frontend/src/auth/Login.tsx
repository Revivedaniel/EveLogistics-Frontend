import React from 'react';
import axios from 'axios';
import {urlAccounts} from '../endpoints';
import DisplayErrors from '../utils/DisplayErrors';
import {type AuthenticationResponse, type UserCredentials} from './auth.models';
import AuthForm from './AuthForm';
import {useState, useContext} from 'react';
import {getClaims, saveToken} from './handleJWT';
import AuthenticationContext from './AuthenticationContext';

export default function Login() {
	const [errors, setErrors] = useState<string[]>([]);
	const {update} = useContext(AuthenticationContext);

	async function login(credentials: UserCredentials) {
		try {
			const response = await axios.post<AuthenticationResponse>(`${urlAccounts}/login`, credentials);
			saveToken(response.data);
			update(getClaims());
		} catch (error) {
			setErrors([error.response.data]);
		}
	}

	return (<>
		<h3>Login</h3>
		<DisplayErrors errors={errors} />
		<AuthForm
			model={{email: '', password: ''}}
			onSubmit={async values => login(values)} />
	</>);
}
