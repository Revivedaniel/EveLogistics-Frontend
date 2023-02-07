import decode from 'jwt-decode';
import { authenticationResponse, claim } from "./auth.models";

const tokenKey = "eve-logistics-token";

export function saveToken(authData: authenticationResponse) {
    localStorage.setItem(tokenKey, authData.token);
    console.log("Token saved");
}

export function getClaims(): claim[]{
    console.log("Getting claims")
    const token = localStorage.getItem(tokenKey);

    if (!token){
        console.log("No token found")
        return [];
    }

    if (isTokenExpired(token)){
        console.log("Token expired")
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
    window.location.assign('/login');
}

export function getToken(){
    return localStorage.getItem(tokenKey);
}

export function isTokenExpired(token: string) {
    // Decode the token to get its expiration time that was set by the server
    const decoded: {exp: number} = decode(token);
    // If the expiration time is less than the current time (in seconds), the token is expired and we return `true`
    if (decoded.exp < Date.now() / 1000) {
      return true;
    }
    // If token hasn't passed its expiration time, return `false`
    return false;
  }
