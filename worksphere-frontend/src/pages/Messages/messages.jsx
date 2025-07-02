import React from 'react'
import Card from '../../components/Card/card'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import img1 from '../../images/AnkitPic.jpeg';
import img8 from '../../images/person1.png';
import img9 from '../../images/tesla2.png';
import Conversation from '../../components/Conversation/conversation';
import Conversation2 from '../../components/Conversation/conversation2';
import Conversation3 from '../../components/Conversation/conversation3';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ImageIcon from '@mui/icons-material/Image';
import Advertisment from '../../components/Advertisment/advertisment';

const Messages = () => {
    return (
        <div className='px-5 xl:px-50 py-9 flex gap-5 w-full mt-5 bg-gray-100'>
            <div className='w-full justify-between flex pt-5'>

                {/* Left Side */}
                <div className='w-full md:w-[70%]'>
                    <Card padding={0}>
                        <div className='border-b-1 border-gray-300 px-5 py-2 font-semibold text-lg'>
                            Messaging
                        </div>

                        <div className='border-b-1 border-gray-300 px-5 py-2'>
                            <div className='py-1 px-3 cursor-pointer hover:bg-green-900 bg-green-800 font-normal flex gap-2 w-fit rounded-2xl text-white'>Focused <ArrowDropDownIcon /></div>
                        </div>

                        {/* Div for chat */}
                        <div className='w-full md:flex'>
                            <div className='h-[590px] overflow-auto w-full md:w-[40%] border-r-1 border-gray-400'>

                                {/* For Each Chat */}
                                <Conversation />

                                <Conversation2 />

                                <Conversation3 />

                            </div>

                            <div className='w-full md:w-[60%] border-gray-400'>
                                <div className='border-gray-300 py-2 px-4 border-b-2 flex justify-between items-center'>
                                    <div>
                                        <p className='text-sm font-semibold'>Aarav Devendra</p>
                                        <p className='text-sm text-gray-400'>DTU | Final Year</p>
                                    </div>
                                    <div><MoreHorizIcon /></div>
                                </div>

                                <div className='h-[360px] w-full overflow-auto border-b-1 border-gray-300'>
                                    <div className='w-full border-b-1 border-gray-300 p-4'>
                                        <img className='rounded-[100%] cursor-pointer w-16 h-15' src={img8} alt="User" />

                                        <div className='my-2'>
                                            <div className='text-md'>Aarav Devendra</div>
                                            <div className='text-sm  text-gray-500'>DTU | Final Year</div>
                                        </div>
                                    </div>

                                    <div className='w-full'>

                                        {/* for each message */}
                                        <div className='flex w-full cursor-pointer border-gray-300 gap-3 p-4'>
                                            <div className='shrink-0'>
                                                <img className='w-8 h-8 rounded-[100%] cursor-pointer' src={img8} alt="User" />
                                            </div>
                                            <div className='mb-3 w-full'>
                                                <div className='text-md'>Aarav Devendra</div>

                                                <div className='text-sm mt-6 hover:bg-gray-200'>Hello, how are you?</div>
                                                <div className='my-2'><img className='w-[240px] h-[180px] rounded-md' src={img9}/></div>
                                            </div>
                                        </div>

                                        {/* for each message */}
                                        <div className='flex w-full cursor-pointer border-gray-300 gap-3 p-4'>
                                            <div className='shrink-0'>
                                                <img className='w-8 h-8 rounded-[100%] cursor-pointer' src={img1} alt="User" />
                                            </div>
                                            <div className='mb-3 w-full'>
                                                <div className='text-md'>Ankit Oraon</div>

                                                <div className='text-sm mt-6 hover:bg-gray-200'>Fine! What about you?</div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                {/* Space for typing messages */}
                                <div className='p-2 w-full border-b-1 border-gray-200'>
                                    <textarea rows={4} className='bg-gray-200 outline-0 rounded-xl text-sm w-full p-3' placeholder='Write a message...' />
                                </div>
                                
                                <div className='p-3 flex justify-between'>
                                    <div>
                                        <label htmlFor='messageImage' className='cursor-pointer'><ImageIcon /></label>
                                        <input id='messageImage' type='file' className='hidden' />
                                    </div>

                                    <div className='px-3 py-1 cursor-pointer rounded-2xl border-1 bg-blue-950 text-white'>
                                        Send
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>

                {/* Right Side */}
                <div className='hidden md:flex md:w-[25%]'>
                    <div className='sticky top-19'>
                        <Advertisment />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Messages