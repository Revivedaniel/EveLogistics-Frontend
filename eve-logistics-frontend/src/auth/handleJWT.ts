import {type AuthenticationResponse, type Claim} from './auth.models';

const tokenKey: string = 'eve-logistics-token';
const expirationKey: string = 'eve-logistics-token-expiration';

export function saveToken(authData: AuthenticationResponse) {
	localStorage.setitem(tokenKey, authData.token);
	localStorage.setitem(expirationKey, authData.expiration.toString());
}

export function getClaims(): Claim[] {
	const token = localStorage.getItem(tokenKey);

	if (!token) {
		return [];
	}

	const expiration = localStorage.getItem(expirationKey)!;
	const expirationDate = new Date(expiration);

	if (expirationDate <= new Date()) {
		logout();
		return [];
	}

	const dataToken = JSON.parse(window.atob(token.split('.')[1]));
	console.log(dataToken);
	const response: Claim[] = [];
	for (const property in dataToken) {
		response.push({name: property, value: dataToken[property]});
	}

	return response;
}

export function logout() {
	localStorage.removeItem(tokenKey);
	localStorage.removeItem(expirationKey);
}

export function getToken() {
	return localStorage.getItem(tokenKey);
}
