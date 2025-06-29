import React from 'react'
import { Link } from 'react-router-dom'

const Navbar1 = () => {
    return (
        <nav className='w-[100%] bg-gray-100 md:px-[100px] px-[20px] flex justify-between py-4 box-border'>
            <Link to={'/'} className="flex justify-between">
                <div className="flex gap-1 items-center cursor-pointer">
                    <h3 className="font-bold text-3xl" style={{ color: '#7F55B1' }}>WorkSphere</h3>

                </div>
            </Link>

            <div className="flex box-border md:gap-4 gap-2 justify-center items-center">
                <Link to={'/signUp'} className='md:px-4 md:py-2 box-border text-black rounded-3xl text-xl hover:bg-gray-200 cursor-pointer'>Join now</Link>
                <div className='px-4 py-2 box-border text-white bg-[#7C4585] rounded-3xl text-xl hover:bg-[#6a4ca8] cursor-pointer'>Login</div>
            </div>
        </nav>
    )
}

export default Navbar1