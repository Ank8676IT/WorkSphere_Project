import React from 'react'
import Card from '../Card/card'
import img4 from '../../images/elon.png'
import img5 from '../../images/tesla2.png'
import img1 from '../../images/AnkitPic.jpeg'
import { useState } from 'react'
import ThumbUpOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ThumbUpIcon from '@mui/icons-material/Favorite';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import CommentIcon from '@mui/icons-material/InsertComment';
import SendIcon from '@mui/icons-material/Send';

const Post = () => {
    const [seeMore, setSeeMore] = useState(false);
    const [comment, setComment] = useState(false)

    const handleSendComment = (e) => {
        e.preventDefault();
    }

    const desc = `Excited to see Tesla pushing boundaries in sustainable energy and auto- nomy. Our latest achievements in full self-driving and battery innovation bring us closer to a future where clean transport is accessible to all. Grateful for the team's relentless drive. The best is yet to come. Onward!`
    return (
        <Card padding={0}>
            <div className='flex gap-3 p-4'>
                <div className='w-12 h-12 rounded-4xl'>
                    <img className='rounded-4xl w-12 h-12 border-2 border-white cursor-pointer' src={img4} />
                </div>
                <div>
                    <div className='text-lg font-semibold'>Elon Musk</div>
                    <div className='text-sm text-gray-500' style={{ fontWeight: '550' }}>Founder <a href="https://www.spacex.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600">@SpaceX</a> | <a href="https://www.tesla.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600">@Tesla</a> </div>
                </div>
            </div>

            <div className='text md p-4 my-3 whitespace-pre-line flex-grow'>
                {seeMore ? desc : `${desc.slice(0, 150)}...`} <span onClick={() => setSeeMore(prev => !prev)} className='cursor-pointer text-blue-500'>{seeMore ? "See Less" : "See More"}</span>
            </div>

            <div className='w-[100%] h-[100%]'>
                <img className='w-full h-full' src={img5} />
            </div>

            <div className='my-2 p-4 flex justify-between items-center'>
                <div className='flex gap-2 items-center'>
                    <ThumbUpIcon style={{ color: '#E55050', fontSize: '14' }} /> <div className='text-sm text-gray-700'>10k+ Likes</div>
                </div>
                <div className='flex gap-2 items-center'>
                    <CommentOutlinedIcon style={{ color: '#0D5EA6', fontSize: '14' }} /> <div className='text-sm text-gray-700'>100+ Comments</div>
                </div>
            </div>

            <div className='flex p-1'>
                <div className='w-[33%] justify-center flex gap-2 items-center border-r-1 border-gray-100 p-2 cursor-pointer hover:bg-gray-100'> <ThumbUpIcon sx={{ fontSize: 24, color: '#E55050' }} /> <span>Like</span> </div>
                <div onClick={()=>setComment(true)} className='w-[33%] justify-center flex gap-2 items-center border-r-1 border-gray-100 p-2 cursor-pointer hover:bg-gray-100'> <CommentIcon sx={{ fontSize: 24, color: '#0D5EA6' }} /> <span>Comment</span> </div>
                <div className='w-[33%] justify-center flex gap-2 items-center border-r-1 border-gray-100 p-2 cursor-pointer hover:bg-gray-100'> <SendIcon sx={{ fontSize: 24, color: '#C562AF' }} /> <span>Share</span> </div>
            </div>

            {/* Comment Section */}
            {
                comment && <div className='p-4 w-full'>
                    <div className='flex gap-2 items-center'>
                        <img src={img1} className='rounded-full w-12 h-12 border-2 border-white cursor-pointer' />

                        <form className='w-full flex gap-2' onSubmit={handleSendComment} >
                            <input placeholder='Add a comment...' className='w-full border-1 py-3 px-5 rounded-3xl hover:bg-gray-100' />
                            <button type='submit' className='cursor-pointer text-white rounded-4xl py-1 px-4' style={{ backgroundColor: '#7F55B1' }}>Send</button>
                        </form>

                    </div>

                    {/* Other's comment section  */}
                    <div className='w-full p-4'>

                        <div className='my-4'>
                            <div className='flex gap-3'>
                                <img src={img1} className='rounded-full w-10 h-10 border-2 border-white cursor-pointer' />

                                <div className='cursor-pointer'>
                                    <div className='text-md'>Ankit Oraon</div>
                                    <div className='text-xs text-gray-500'>Student <a href="https://dspmuranchi.ac.in/" target="_blank" rel="noopener noreferrer" className="text-blue-600">@DSPMU</a> | Final Year</div>
                                </div>
                            </div>

                            <div className='px-11 my-2'>Great to see Tesla progress.</div>
                        </div>

                    </div>
                </div>
            }

        </Card>
    )
}

export default Post