import React from 'react'

function PageNotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
            <p className="text-2xl text-gray-600 mb-2">Page Not Found</p>
            <p className="text-gray-500">Sorry, the page you are looking for does not exist.</p>
        </div>
    )
}

export default PageNotFound