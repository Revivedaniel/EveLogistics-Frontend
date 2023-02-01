import { authenticationResponse, claim } from "./auth.models";

const tokenKey = "eve-logistics-token";
const expirationKey = "eve-logistics-token-expiration";

export function saveToken(authData: authenticationResponse) {
    localStorage.setitem(tokenKey, authData.token);
    localStorage.setitem(expirationKey, authData.expiration.toString());
}

export function getClaims(): claim[]{
    const token = localStorage.getItem(tokenKey);

    if (!token){
        return [];
    }

    const expiration = localStorage.getItem(expirationKey)!;
    const expirationDate = new Date(expiration);

    if (expirationDate <= new Date()){
        logout();
        return [];
    }

    const dataToken = JSON.parse(window.atob(token.split('.')[1]));
    const response: claim[] = [];
    for (const property in dataToken) {
        response.push({name: property, value: dataToken[property]});
    }

    return response;
}

export function logout() {
    localStorage.removeItem(tokenKey);
    localStorage.removeItem(expirationKey);
}