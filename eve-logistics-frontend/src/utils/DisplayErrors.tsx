export default function DisplayErrors (props: displayErrorsProps): JSX.Element {
  const style = { color: 'red' }
  return (
    <>
      {(props.errors != null)
        ? (
        <ul style={style}>
          {props.errors.map((error, index) => (
            <li key={index}>{error}</li>
          ))}
        </ul>
          )
        : null}
    </>
  )
}

interface displayErrorsProps {
  errors?: string[]
}
