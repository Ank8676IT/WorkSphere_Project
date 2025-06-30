import React from 'react'
import Card from '../Card/card'
import img1 from '../../images/AnkitPic.jpeg'
import img2 from '../../images/background.png'

const ProfileCard = () => {
    return (
        <Card padding={0}>
            <div className='relative h-25'>
                <div className='relative w-full h-22 rounded-md'>
                    <img src={img2} alt="Cover Photo" className='rounded-t-md h-full w-full' />
                </div>
                <div className='absolute top-14 left-6 z-10'>
                    <img src={img1} alt="Profile Photo" className='rounded-full border-2 border-white h-16 w-16 cursor-pointer' />
                </div>
            </div>

            <div className='p-5'>
                <div className='text-xl' style={{ fontWeight: 600}}>Ankit Oraon</div>
                <div className='text-md my-1' style={{ fontWeight: 580}}>Student <a href="https://dspmuranchi.ac.in/" target="_blank" rel="noopener noreferrer" className="text-blue-600">@DSPMU</a> | Final Year</div>
                <div className='text-sm my-1'>Ranchi, Jharkhand</div>
                <div className='text-sm my-1'>Fresher</div>
            </div>
        </Card>
    )
}

export default ProfileCard