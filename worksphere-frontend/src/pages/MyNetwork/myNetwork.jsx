import React, { useState } from 'react'
import ProfileCard2 from '../../components/ProfileCard/profileCard2';
import ProfileCard from '../../components/ProfileCard/profileCard';
import ProfileCard3 from '../../components/ProfileCard/profileCard3';
import ProfileCard4 from '../../components/ProfileCard/profileCard4';
import ProfileCard5 from '../../components/ProfileCard/profileCard5';

const MyNetwork = () => {

    const [text,setText] = useState('Catch Up With Friends');

    const handleFriends =async()=>{
        setText('Catch Up With Friends')
    }

    const handlePending =async()=>{
        setText('Pending Request')
    }

  return (
    <div className='px-5 xl:px-50 py-9 flex flex-col gap-5 w-full mt-5 bg-gray-100'>
        <div className='py-4 px-10 border-1 border-gray-400 w-full flex justify-between my-5 text-xl bg-white rounded-xl'>
            <div>{text}</div>
            <div className='flex gap-3'>
                <button onClick={handleFriends} className="p-1 cursor-pointer border-1 rounded-lg border-gray-300" style={text==="Catch Up With Friends"?{ backgroundColor:'#7F55B1',color:'white' }:{}}>Friends</button>
                <button onClick={handlePending} className="p-1 cursor-pointer border-1 rounded-lg border-gray-300" style={text==="Pending Request"?{ backgroundColor:'#7F55B1',color:'white' }:{} }>Pending Request</button>
            </div>
        </div>

        <div className='flex h-[80vh] w-full gap-7 flex-wrap items-start justify-center'>

            <div className='md:w-[23%] h-[270px] sm:w-full'>
                <ProfileCard2 />
            </div>

            <div className='md:w-[23%] h-[270px] sm:w-full'>
                <ProfileCard3 />
            </div>
            
            <div className='md:w-[23%] h-[270px] sm:w-full'>
                <ProfileCard4 />
            </div>

            <div className='md:w-[23%] h-[270px] sm:w-full'>
                <ProfileCard5 />
            </div>
        </div>
    </div>
  )
}

export default MyNetwork