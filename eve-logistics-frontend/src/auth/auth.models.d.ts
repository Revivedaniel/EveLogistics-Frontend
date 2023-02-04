export type Claim = {
	name: string;
	value: string;
};

export type UserCredentials = {
	email: string;
	password: string;
};

export type AuthenticationResponse = {
	token: string;
	expiration: string;
};
