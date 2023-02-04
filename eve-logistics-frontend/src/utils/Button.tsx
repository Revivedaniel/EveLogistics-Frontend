export default function Button(props: buttonProps) {
	return <button
		type={props.type}
		disabled={props.disabled}
		onClick={props.onClick}
	>{props.children}</button>;
}

type buttonProps = {
	children: React.ReactNode;
	onClick?(): void;
	type: 'button' | 'submit';
	disabled: boolean;
};

Button.defaultProps = {
	type: 'button',
	disabled: false,
};
