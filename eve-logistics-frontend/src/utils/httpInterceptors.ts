import axios from 'axios'
import { getToken } from '../auth/handleJWT'

export default function configureInterceptor (): void {
  axios.interceptors.request.use(
    (config) => {
      const token = getToken()

      if (token !== null) {
        config.headers.Authorization = `bearer ${token}`
      }

      return config
    },
    async (error) => await Promise.reject(error)
  )
}
