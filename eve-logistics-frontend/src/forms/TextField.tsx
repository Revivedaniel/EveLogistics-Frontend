import {ErrorMessage, Field} from 'formik';

export default function TextField(props: textFieldProps) {
	return (
		<div>
			<label htmlFor={props.field}>{props.displayName}</label>
			<Field type={props.type}
				name={props.field} id={props.field} />
			<ErrorMessage name={props.field}>{msg =>
				<div>{msg}</div>}</ErrorMessage>
		</div>
	);
}

type textFieldProps = {
	field: string;
	displayName: string;
	type: 'text' | 'password';
};

TextField.defaultProps = {
	type: 'text',
};
