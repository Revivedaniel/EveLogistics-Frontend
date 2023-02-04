import React from 'react';
import {type Claim} from './auth.models';

const authenticationContext = React.createContext<AuthenticationContext>(
	{
		claims: [],
		update() {
			// This is so eslint can ignore this function
		},
	});

export default authenticationContext;

type AuthenticationContext = {
	claims: Claim[];
	update(claims: Claim[]): void;
};
