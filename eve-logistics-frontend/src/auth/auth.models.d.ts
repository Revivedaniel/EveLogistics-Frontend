export interface Claim {
  name: string
  value: string
}

export interface UserCredentials {
  email: string
  password: string
}

export interface AuthenticationResponse {
  token: string
}
