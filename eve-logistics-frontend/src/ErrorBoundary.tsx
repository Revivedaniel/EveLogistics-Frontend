import React from 'react'

class ErrorBoundary extends React.Component<errorBoundaryProps, errorBoundaryState> {
  constructor (props: errorBoundaryProps) {
    super(props)
    this.state = { hasError: false, message: '' }
  }

  static getDerivedStateFromError (error: any): errorBoundaryState {
    return { hasError: true, message: error }
  }

  componentDidCatch (error: any, errorInfo: any): void {
    console.log(error)
  }

  render (): React.ReactNode {
    if (this.state.hasError) {
      if (this.props.errorUI !== undefined) {
        return this.props.errorUI
      }

      return <h3>{this.state.message}</h3>
    }

    return this.props.children
  }
}

interface errorBoundaryProps {
  children: React.ReactNode
  errorUI?: React.ReactNode
}

interface errorBoundaryState {
  hasError: boolean
  message: string
}

export default ErrorBoundary
