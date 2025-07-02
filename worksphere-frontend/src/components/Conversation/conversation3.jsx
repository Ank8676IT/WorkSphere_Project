import React from 'react'
import img8 from '../../images/person5.png';

const Conversation3 = () => {
    return (
        <div className='flex items-center w-full cursor-pointer border-b-1 border-gray-300 gap-3 p-4 hover:bg-gray-200'>
            <div className='shrink-0'>
                <img className='w-12 h-12 rounded-[100%] cursor-pointer' src={img8} alt="User" />
            </div>
            <div>
                <div className='text-md'>Reyansh Veerendra</div>
                <div className='text-sm text-gray-500'>Student | Athlete | Cricket Fan</div>
            </div>
        </div>
    )
}

export default Conversation3