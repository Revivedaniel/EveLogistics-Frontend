import React from 'react';

class ErrorBoundary extends React.Component<errorBoundaryProps, errorBoundaryState> {
	constructor(props: errorBoundaryProps) {
		super(props);
		this.state = {hasError: false, message: ''};
	}

	static getDerivedStateFromError(error: any) {
		return {hasError: true, message: error};
	}

	componentDidCatch(error: any, errorInfo: any) {
		console.log(error);
	}

	render() {
		if (this.state.hasError) {
			if (this.props.errorUI) {
				return this.props.errorUI;
			}

			return <h3>{this.state.message}</h3>;
		}

		return this.props.children;
	}
}

type errorBoundaryProps = {
	children: React.ReactNode;
	errorUI?: React.ReactNode;
};

type errorBoundaryState = {
	hasError: boolean;
	message: string;
};

export default ErrorBoundary;
