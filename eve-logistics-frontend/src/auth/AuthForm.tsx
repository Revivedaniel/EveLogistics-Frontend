import React from 'react';
import {Formik, type FormikHelpers, Form} from 'formik';
import {type UserCredentials} from './auth.models';
import * as Yup from 'yup';
import TextField from '../forms/TextField';
import Button from '../utils/Button';

export default function AuthForm(props: AuthFormProps) {
	return (
		<Formik
			initialValues={props.model}
			onSubmit={props.onSubmit}
			validationSchema={Yup.object({
				email: Yup.string().required('This field is required').email('Invalid email address'),
				password: Yup.string().required('This field is required'),
			})}
		>
			{formikProps => (
				<Form>
					<TextField displayName='Email' field='email' />
					<TextField displayName='Password' field='password' type='password' />

					<Button disabled={formikProps.isSubmitting} type='submit'>Send</Button>
				</Form>
			)}
		</Formik>
	);
}

type AuthFormProps = {
	model: UserCredentials;
	onSubmit(values: UserCredentials, actions: FormikHelpers<UserCredentials>): void;
};
