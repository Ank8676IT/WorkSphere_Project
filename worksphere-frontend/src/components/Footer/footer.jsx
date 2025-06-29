import React from 'react'

const Footer = () => {
    return (
        <div className='w-[100%] bg-gray-200 flex justify-center'>
            <div className='md:p-3 w-[100%] flex flex-col items-center py-4'>
                <div className='flex gap-1 items-center cursor-pointer'>
                    <h3 className='font-bold text-xl' style={{ color: '#7F55B1' }}>WorkSphere</h3>
                </div>
                <div className='text-sm'>© Copyright 2025. All rights reserved.</div>
            </div>
        </div>
    )
}

export default Footer