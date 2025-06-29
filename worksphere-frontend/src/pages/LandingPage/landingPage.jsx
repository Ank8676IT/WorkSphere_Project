import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div className='my-4 py-[50px] md:pl-[120px] px-5 md:flex justify-between'>
        <div className='md:w-[40%]'>
            <div className='text-5xl mx-auto text-gray-500'>Welcome To Your Professional Networking Platform</div>

            <div className='my-3 flex mx-auto mt-[20px] bg-white gap-2 rounded-3xl w-[70%] text-black cursor-pointer'>
                Google Button
            </div>

            <div className='flex mx-auto mt-[20px]  py-2 px-2 bg-white gap-2 rounded-3xl item-center w-[70%] justify-center text-black hover:bg-gray-100 border-2 cursor-pointer'>Sign in with email</div>
            <div className='mx-auto gap-1 mb-4 text-sm w-[70%] mt-6'>By clicking continue to join or sign in, you agree to <span className='text-blue-800 cursor-pointer hover:underline'>WorkSphere's User Agreement</span>,<span className='text-blue-800 cursor-pointer hover:underline'>Privacy Policy</span>, and <span className='text-blue-800 cursor-pointer hover:underline'>Cookie Policy</span>.</div>
            <Link to={'/signUp'} className='mx-auto text-center mb-4 text-lg w-[70%] mt-4'>New to WorkSphere? <span className='text-blue-800 cursor-pointer hover:underline'>Join now</span></Link>
        </div>
        <div className='md:w-[50%] h-120'>
            <img alt="image" className='w-full f-full' src={"https://static.licdn.com/aero-v1/sc/h/dxf91zhqd2z6b0bwg85ktm5s4"}></img>
        </div>
        
    </div>
  )
}

export default LandingPage