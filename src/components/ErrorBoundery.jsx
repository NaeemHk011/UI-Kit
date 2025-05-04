import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log('Error caught by boundary:', error, errorInfo);
  }

  resetError = () => {
    this.setState({ hasError: false });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
          <div className="relative bg-white rounded-lg shadow-xl p-8 max-w-md w-full text-center transform transition-all duration-300 hover:scale-105">
            {/* Shimmery Border with #3b82f6 */}
            <div className="absolute inset-0 rounded-lg border-4 border-transparent bg-gradient-to-r from-[#3b82f6] via-[#5b9bf9] to-[#3b82f6] animate-shimmer bg-[length:400%_100%]"></div>
            
            {/* Content */}
            <div className="relative">
              {/* Error Icon */}
              <div className="mx-auto mb-4 w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-red-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>

              {/* Error Message */}
              <h1 className="text-2xl font-bold text-white mb-2">
                Something Went Wrong
              </h1>
              <p className="text-white mb-6">
                We encountered an unexpected issue. Please try again or contact
                support if the problem persists.
              </p>

              {/* Try Again Button */}
              <button
                onClick={this.resetError}
                className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                Try Again
              </button>
            </div>
          </div>

          {/* Custom CSS for Shimmer Animation */}
          <style>
            {`
              @keyframes shimmer {
                0% {
                  background-position: 0% 50%;
                }
                100% {
                  background-position: 400% 50%;
                }
              }
              .animate-shimmer {
                animation: shimmer 3s linear infinite;
              }
            `}
          </style>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;