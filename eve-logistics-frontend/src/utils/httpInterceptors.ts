import axios from 'axios';
import {getToken} from '../auth/handleJWT';

export default function configureInterceptor() {
	axios.interceptors.request.use(
		config => {
			const token = getToken();

			if (token) {
				config.headers.Authorization = `bearer ${token}`;
			}

			return config;
		},
		async error => Promise.reject(error),
	);
}
