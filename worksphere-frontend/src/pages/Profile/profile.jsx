import React from 'react'
import Advertisment from '../../components/Advertisment/advertisment'
import Card from '../../components/Card/card'
import img1 from '../../images/AnkitPic.jpeg'
import img2 from '../../images/background.png'
import EditIcon from '@mui/icons-material/Edit';

const Profile = () => {
    return (
        <div className='px-5 xl:px-50 py-5 mt-5 flex flex-col gap-5 w-full pt-12 bg-gray-100'>
            <div className='flex justify-between'>

                {/* Left Side Main Section */}
                <div className='w-full md:w-[70%]'>
                    <div>
                        <Card padding={0}>
                            <div className='w-full h-fit'>
                                <div className='relative w-full h-[200px]'>
                                    <div className='absolute cursor-pointer top-3 right-3 z-20 w-[35px] flex justify-center items-center h-[35px] rounded-full p-3' style={{ background: '#DDDDDD' }}><EditIcon /></div>
                                    <img className='w-full h-[200px] rounded-tr-lg rounded-tl-lg' src={img2} />
                                    <div className='absolute object-cover top-24 left-6 z-10'><img className='rounded-full border-2 border-white cursor-pointer w-35 h-35' src={img1} /></div>
                                </div>

                                <div className='mt-10 relative px-8 py-2'>
                                    <div className='absolute cursor-pointer top-3 right-3 z-20 w-[35px] flex justify-center items-center h-[35px] rounded-full p-3' style={{ background: '#DDDDDD' }}><EditIcon /></div>
                                    <div className='w-full'>
                                        <div className='text-2xl'>Ankit Oraon</div>
                                        <div className='text-gray-700'>Student <a href="https://dspmuranchi.ac.in/" target="_blank" rel="noopener noreferrer" className="text-blue-600">@DSPMU</a> | Final Year</div>
                                        <div className='text-sm text-gray-500'>Ranchi, Jharkhand</div>
                                        <div className='text-md text-blue-800 w-fit cursor-pointer hover:underline'>2 Connections</div>

                                        <div className='md:flex w-full justify-between'>
                                            <div className='my-5 flex gap-5'>
                                                <div className='cursor-pointer p-2 border-1 rounded-lg text-white font-medium' style={{ background: '#7F55B1' }}>Open to</div>
                                                <div className='cursor-pointer p-2 border-1 rounded-lg text-white font-medium' style={{ background: '#7F55B1' }}>Share Profile</div>
                                                <div className='cursor-pointer p-2 border-1 rounded-lg text-white font-medium' style={{ background: '#7F55B1' }}>Log Out</div>
                                            </div>
                                            <div className='my-5 flex gap-5'>
                                                <div className='cursor-pointer p-2 border-1 rounded-lg text-white font-medium' style={{ background: '#7F55B1' }}>Message</div>
                                                <div className='cursor-pointer p-2 border-1 rounded-lg text-white font-medium' style={{ background: '#7F55B1' }}>Disconnect</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>

                    <div className='mt-5'>
                        <Card padding={1}>
                            <div className='flex justify-between items-center'>
                                <div className='text-xl'>About</div>
                                <div className='rounded-full p-1 cursor-pointer' style={{ background: '#DDDDDD' }}><EditIcon /></div>
                            </div>
                            <div className='text-gray-700 p-1 text-md '>I am currently pursuing a Bachelor of Computer Applications (BCA) at Dr. Shyama Prasad Mukherjee University (DSPMU), Ranchi. I am passionate about technology and eager to build a strong foundation in computer science. DSPMU is renowned for its commitment to academic excellence, offering a vibrant campus life and modern facilities that foster learning and personal growth. The university is known for its experienced faculty and supportive environment, which motivates students to achieve their best. I am proud to be part of such a respected institution that values innovation and student success.</div>
                        </Card>
                    </div>

                    <div className='mt-5'>
                        <Card padding={1}>
                            <div className='flex justify-between items-center'>
                                <div className='text-xl'>Skills</div>
                            </div>
                            <div className='text-gray-700 text-md my-2 w-full flex gap-4 flex-wrap'>
                                
                                <div className='py-2 px-3 cursor-pointer text-white rounded-lg' style={{ background: '#7F55B1'}}>React JS</div>
                                <div className='py-2 px-3 cursor-pointer text-white rounded-lg' style={{ background: '#7F55B1'}}>Node JS</div>
                                <div className='py-2 px-3 cursor-pointer text-white rounded-lg' style={{ background: '#7F55B1'}}>Express Js</div>
                                <div className='py-2 px-3 cursor-pointer text-white rounded-lg' style={{ background: '#7F55B1'}}>Mongodb</div>
                                <div className='py-2 px-3 cursor-pointer text-white rounded-lg' style={{ background: '#7F55B1'}}>Rust</div>
                            </div>
                        </Card>
                    </div>

                    <div className='mt-5'>
                        
                    </div>
                </div>


                {/* Right Side Advertisment */}
                <div className='hidden md:flex md:w-[28%]'>
                    <div className='sticky top-19'>
                        <Advertisment />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile