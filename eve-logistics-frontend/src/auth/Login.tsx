import axios from 'axios'
import { urlAccounts } from '../endpoints'
import DisplayErrors from '../utils/DisplayErrors'
import { type AuthenticationResponse, type UserCredentials } from './auth.models'
import AuthForm from './AuthForm'
import { useState, useContext } from 'react'
import { getClaims, saveToken } from './handleJWT'
import AuthenticationContext from './AuthenticationContext'
import css from './Login.module.css'
import loginBackground1 from '../imgs/login-wallpaper-1.jpg'
export default function Login (): JSX.Element {
  const [errors, setErrors] = useState<string[]>([])
  const { update } = useContext(AuthenticationContext)

  async function login (credentials: UserCredentials): Promise<void> {
    try {
      const response = await axios.post<AuthenticationResponse>(`${urlAccounts}/login`, credentials)
      saveToken(response.data)
      update(getClaims())
    } catch (error) {
      setErrors([error.response.data])
    }
  }

  return (
      <div style={{ display: 'flex', height: '100vh', backgroundImage: `url(${loginBackground1})`, backgroundSize: 'cover' }}>
        <main className={css.main}>
            <h1>Eve Logistics</h1>
            <article>
                <AuthForm
                    action={login}
                    >
                <DisplayErrors errors={errors} />
                    </AuthForm>
          </article>
        </main>
        <aside className={css.aside}>
            <h2>What is Eve Logistics?</h2>
            <p>Eve Logistics is a full stack web application that allows you to manage your logistics in Eve Online. It consists of 4 core logistics solutions joined into an all in one solution for Eve online logistics.</p>
            <h2>Why can&apos;t I register?</h2>
            <p>Currently, Eve Logistics is in pre-alpa as a proof of concept. Once the beta rolls oout I will be opening up the site to about 10-20 power users. Star the repo on github and check back in periodically for more information!</p>
        </aside>
      </div>
  )
}
