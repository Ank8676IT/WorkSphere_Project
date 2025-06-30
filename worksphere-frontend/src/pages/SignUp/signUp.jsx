import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
    return (
        <div className='w-full flex flex-col items-center justify-center'>
            <div className='text-4xl mb-5'>Make the most of your professional life</div>
            <div className='w-[85%] md:w-[28%] shadow-xl rounded-sm box p-10'>

                <div className='flex flex-col gap-4'>
                    <div>
                        <label htmlFor='email'>Email</label>
                        <input type='text' className='w-full text-xl border-2 rounded-lg px-5 py-2' placeholder='Email ' />
                    </div>

                    <div>
                        <label htmlFor='password'>Password</label>
                        <input type='password' className='w-full text-xl border-2 rounded-lg px-5 py-2' placeholder='Password ' />
                    </div>

                    <div>
                        <label htmlFor='f_name'>Full Name</label>
                        <input type='text' className='w-full text-xl border-2 rounded-lg px-5 py-2' placeholder='Full Name ' />
                    </div>

                    <div className='w-full hover:bg-[#9B7EBD] bg-[#7F55B1] text-white py-3 px-4 rounded-xl text-center cursor-pointer my-2'>
                        Register
                    </div>
                </div>

                <div className='flex items-center gap-2'>
                    <div className='border-b-1 border-gray-400 w-[45%]'/> <div>or</div><div className='border-b-1 border-gray-400 w-[45%] my-6' />
                </div>

                <div>Google Login BTN</div>

            </div>

            <div className='mt-8 mb-10'>Already on WorkSphere? <Link to={'/login'} className='text-blue-800 cursor-pointer hover:underline'>Sign in</Link></div>
        </div>
    )
}

export default SignUp