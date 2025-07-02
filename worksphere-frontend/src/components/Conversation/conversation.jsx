import React from 'react'
import img8 from '../../images/person1.png';

const Conversation = () => {
    return (
        <div className='flex items-center w-full cursor-pointer border-b-1 gap-3 p-4 bg-gray-200'>
            <div className='shrink-0'>
                <img className='w-12 h-12 rounded-[100%] cursor-pointer' src={img8} alt="User" />
            </div>
            <div>
                <div className='text-md'>Aarav Devendra</div>
                <div className='text-sm text-gray-500'>DTU | Final Year</div>
            </div>
        </div>
    )
}

export default Conversation