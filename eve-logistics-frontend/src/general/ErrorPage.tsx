import { useRouteError } from 'react-router-dom'

export default function ErrorPage (): JSX.Element {
  const error = useRouteError() as ErrorInterface
  console.error(error)

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText ?? error.message}</i>
      </p>
    </div>
  )
}

interface ErrorInterface {
  statusText?: string
  message?: string
}
