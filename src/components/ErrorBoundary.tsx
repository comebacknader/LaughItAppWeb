import React from 'react'

class ErrorBoundary extends React.Component<{}, { hasError: boolean, error: Error|null }> {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>Something went wrong.</h1>
          <h4>{this.state.error?.name}:{this.state.error?.message}</h4>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary