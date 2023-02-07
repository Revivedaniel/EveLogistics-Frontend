import { type ReactElement, useState, useContext, useEffect } from 'react'
import AuthenticationContext from './AuthenticationContext'

export default function Authorized (props: AuthorizedProps): JSX.Element {
  const [isAuthorized, setIsAuthorized] = useState<boolean>(false)
  const { claims } = useContext(AuthenticationContext)

  useEffect(() => {
    setIsAuthorized(claims.length > 0)
  }, [claims])

  return (<>{isAuthorized ? props.authorized : props.notAuthorized}</>)
}

interface AuthorizedProps {
  authorized: ReactElement
  notAuthorized: ReactElement
}
