import React from 'react'
import Card from '../Card/card'
import img1 from '../../images/AnkitPic.jpeg'
import img3 from '../../images/generated-image.png'


const Advertisment = () => {
    return (
        <div className='sticky top-18'>
            <Card padding={0}>
                <div className='relative h-25'>
                    <div className='relative w-full h-22 rounded-md'>
                        <img src={img3} alt="Cover Photo" className='rounded-t-md h-full w-full' />
                    </div>
                    <div className='absolute top-15 left-[40%] z-10'>
                        <img src={img1} alt="Profile Photo" className='rounded-full border-2 border-white h-16 w-16 cursor-pointer' />
                    </div>
                </div>

                <div className='px-5 my-5 mx-auto'>
                    <div className='text-sm font-semibold text-center'>Ankit Oraon</div>
                    <div className='text-sm my-3 text-center'>Get the latest jobs and industry news</div>
                    <div className='text-sm my-1 border-1 text-center p-2 rounded-2xl font-weight={560} text-white cursor-pointer' style={{ borderColor: '#9B7EBD',backgroundColor: '#7F55B1' }}>Explore</div>
                </div>
            </Card>
        </div>
    )
}

export default Advertisment