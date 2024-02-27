import React from 'react'

const LoadingPage = () => {
  return (
    <div class="flex items-center justify-center h-screen">
        <div class="relative">
            <div class="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-300"></div>
            <div class="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-500 animate-spin">
            </div>
        </div>
    </div>
  )
}

export default LoadingPage