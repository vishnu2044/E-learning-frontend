import React, {useContext} from 'react';
import AuthContext from '../../context/AuthContext';



const AdminLogin = () => {
    let {handleAdminLogin} = useContext(AuthContext)
  return (
<div class="py-20">
    <div class="flex h-full items-center justify-center">
        <div
            class="rounded-lg border border-gray-200 bg-white shadow-lg  dark:bg-[#EFF1F8] flex-col flex h-full items-center justify-center sm:px-4">
            <div class="flex h-full flex-col justify-center gap-4 p-6">
                <div class="left-0 right-0 inline-block border-gray-200 px-2 py-2.5 sm:px-4">
                    <form onSubmit={handleAdminLogin} class="flex flex-col gap-4 pb-4" data-hs-cf-bound="true">
                        <h1 class="mb-4 text-2xl font-bold text-center">Admin Login</h1>
                        <div>
                            <div class="mb-2">
                                <label class="text-sm font-medium text-gray-900 dark:text-gray-600"
                                    for="email">Username</label>
                            </div>
                            <div class="flex w-full rounded-lg pt-1">
                                <div class="relative w-full"><input
                                        class="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500   p-2.5 text-sm rounded-lg"
                                        id="username" type="text" name="username" placeholder="Enter Username"
                                         />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="mb-2">
                                <label class="text-sm font-medium text-gray-900 dark:text-gray-500"
                                    data-testid="flowbite-label" for="password">Password</label>
                            </div>
                            <div class="flex w-full rounded-lg pt-1">
                                <div class="relative w-full"><input
                                        class="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500     p-2.5 text-sm rounded-lg"
                                        id="password" type="password" placeholder='Enter your password' name="password" required="" />
                                </div>
                            </div>
                            <p class="mt-2 cursor-pointer text-blue-500 hover:text-blue-600">Forgot password?</p>
                        </div>
                        <div class="flex flex-col gap-2">
                            <button type="submit"
                                class="border transition-colors focus:ring-2 p-0.5 disabled:cursor-not-allowed border-transparent bg-[#7F5DF6] hover:bg-[#694cd2] active:bg-sky-800 text-white  rounded-lg ">
                                <span
                                    class="flex items-center justify-center gap-1 font-medium py-1 px-2.5 text-base false">
                                    Login
                                </span>
                            </button>
                            <button type="button"
                                class="transition-colors focus:ring-2 p-0.5 disabled:cursor-not-allowed bg-white  text-gray-900 border border-gray-200 disabled:bg-gray-300 disabled:text-gray-700 rounded-lg ">
                                <span
                                    class="flex items-center justify-center gap-1 font-medium py-1 px-2.5 text-base false">
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1"
                                        x="0px" y="0px" viewBox="0 0 48 48" enable-background="new 0 0 48 48"
                                        height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path fill="#FFC107"
                                            d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12 c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24 c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z">
                                        </path>
                                        <path fill="#FF3D00"
                                            d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657 C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z">
                                        </path>
                                        <path fill="#4CAF50"
                                            d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36 c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z">
                                        </path>
                                        <path fill="#1976D2"
                                            d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571 c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z">
                                        </path>
                                    </svg>
                                    Sign in with Google
                                </span>
                            </button>
                        </div>
                    </form>
                    <div class="min-w-[270px]">
                        <div class="mt-4 text-center">New user?
                            <a class="text-blue-500 px-2 hover:text-blue-600" href="/signup">Create account
                                here</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

  )
}

export default AdminLogin