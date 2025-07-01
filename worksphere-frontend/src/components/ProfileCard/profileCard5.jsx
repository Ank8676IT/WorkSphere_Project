import React from 'react'
import Card from '../Card/card'
import img8 from '../../images/person5.png'
import img7 from '../../images/cover2.png'

const ProfileCard5 = () => {
    return (
        <Card padding={0}>
            <div className='relative h-24'>
                <div className='relative w-full h-20 rounded-md'>
                    <img src={img7} alt="Cover Photo" className='rounded-t-md h-full w-full' />
                </div>
                <div className='absolute top-14 left-6 z-10'>
                    <img src={img8} alt="Profile Photo" className='rounded-full border-2 border-white h-16 w-16 cursor-pointer' />
                </div>
            </div>

            <div className='p-5'>
                <div className='text-xl' style={{ fontWeight: 600}}>Reyansh Veerendra</div>
                <div className='text-md my-1' style={{ fontWeight: 580}}>Student | Athlete | Cricket Fan</div>
                <div className='text-sm my-1'>Mumbai, India</div>
                <div className='text-sm my-1'>Fresher</div>
            </div>
        </Card>
    )
}

export default ProfileCard5