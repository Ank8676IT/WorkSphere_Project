import React from 'react'
import Card from '../../components/Card/card'
import ProfileCard from '../../components/ProfileCard/profileCard'
import img1 from '../../images/AnkitPic.jpeg'
import VideoCallIcon from '@mui/icons-material/AddAPhotoOutlined';
import InsertPhotoIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import ArticleIcon from '@mui/icons-material/DescriptionOutlined';
import Advertisment from '../../components/Advertisment/advertisment';


const Feeds = () => {
    return (
        <div className='px-5 xl:px-50 py-9 flex gap-5 w-full mt-5 bg-gray-100'>
            {/* left side */}
            <div className='w-[21%] sm:block sm:w-[23%] hidden py-5'>
                <div className='h-fit'>
                    <ProfileCard />
                </div>

                <div className='w-full my-5'>
                    <Card padding={1}>
                        <div className='w-full flex justify-between'>
                            <div>Profile Viewers</div>
                            <div className='text-blue-900'>23</div>
                        </div>

                        <div className='w-full flex justify-between'>
                            <div>Post Impressions</div>
                            <div className='text-blue-900'>90</div>
                        </div>

                        <div className='w-full flex justify-between'>
                            <div>Total Likes </div>
                            <div className='text-blue-900'>1K+</div>
                        </div>

                        <div className='w-full flex justify-between'>
                            <div>Total Comments </div>
                            <div className='text-blue-900'>100+</div>
                        </div>
                    </Card>
                </div>

            </div>

            {/* middle side */}
            <div className='w-[100%] py-5 sm:w-[50%]'>

                {/* Post Section */}
                <div>
                    <Card padding={1}>
                        <div className='flex gap-2 items-center'>
                            <img src={img1} alt='Profile Photo' className='rounded-4xl w-13 h-13 border-2 border-white cursor-pointer' />
                            <div className='w-full border-1 py-3 px-3 rounded-3xl cursor-pointer hover:bg-gray-100'>Start a post</div>
                        </div>

                        <div className='w-full flex mt-3'>
                            <div className='flex gap-2 p-2 cursor-pointer justify-center rounded-lg w-[33%] hover:bg-gray-100'><VideoCallIcon sx={{ color: "#7F55B1" }} />Video</div>
                            <div className='flex gap-2 p-2 cursor-pointer justify-center rounded-lg w-[33%] hover:bg-gray-100'><InsertPhotoIcon sx={{ color: "#5EABD6" }} />Photo</div>
                            <div className='flex gap-2 p-2 cursor-pointer justify-center rounded-lg w-[33%] hover:bg-gray-100'><ArticleIcon sx={{ color: "#F68537" }} />Article</div>
                        </div>
                    </Card>
                </div>

                <div>
                    <Card padding={1}>
                        <div className='flex gap-2 items-center'>
                            <img src={img1} alt='Profile Photo' className='rounded-4xl w-13 h-13 border-2 border-white cursor-pointer' />
                            <div className='w-full border-1 py-3 px-3 rounded-3xl cursor-pointer hover:bg-gray-100'>Start a post</div>
                        </div>

                        <div className='w-full flex mt-3'>
                            <div className='flex gap-2 p-2 cursor-pointer justify-center rounded-lg w-[33%] hover:bg-gray-100'><VideoCallIcon sx={{ color: "#7F55B1" }} />Video</div>
                            <div className='flex gap-2 p-2 cursor-pointer justify-center rounded-lg w-[33%] hover:bg-gray-100'><InsertPhotoIcon sx={{ color: "#5EABD6" }} />Photo</div>
                            <div className='flex gap-2 p-2 cursor-pointer justify-center rounded-lg w-[33%] hover:bg-gray-100'><ArticleIcon sx={{ color: "#F68537" }} />Article</div>
                        </div>
                    </Card>
                </div>
                
                <div>
                    <Card padding={1}>
                        <div className='flex gap-2 items-center'>
                            <img src={img1} alt='Profile Photo' className='rounded-4xl w-13 h-13 border-2 border-white cursor-pointer' />
                            <div className='w-full border-1 py-3 px-3 rounded-3xl cursor-pointer hover:bg-gray-100'>Start a post</div>
                        </div>

                        <div className='w-full flex mt-3'>
                            <div className='flex gap-2 p-2 cursor-pointer justify-center rounded-lg w-[33%] hover:bg-gray-100'><VideoCallIcon sx={{ color: "#7F55B1" }} />Video</div>
                            <div className='flex gap-2 p-2 cursor-pointer justify-center rounded-lg w-[33%] hover:bg-gray-100'><InsertPhotoIcon sx={{ color: "#5EABD6" }} />Photo</div>
                            <div className='flex gap-2 p-2 cursor-pointer justify-center rounded-lg w-[33%] hover:bg-gray-100'><ArticleIcon sx={{ color: "#F68537" }} />Article</div>
                        </div>
                    </Card>
                </div>
                
                <div>
                    <Card padding={1}>
                        <div className='flex gap-2 items-center'>
                            <img src={img1} alt='Profile Photo' className='rounded-4xl w-13 h-13 border-2 border-white cursor-pointer' />
                            <div className='w-full border-1 py-3 px-3 rounded-3xl cursor-pointer hover:bg-gray-100'>Start a post</div>
                        </div>

                        <div className='w-full flex mt-3'>
                            <div className='flex gap-2 p-2 cursor-pointer justify-center rounded-lg w-[33%] hover:bg-gray-100'><VideoCallIcon sx={{ color: "#7F55B1" }} />Video</div>
                            <div className='flex gap-2 p-2 cursor-pointer justify-center rounded-lg w-[33%] hover:bg-gray-100'><InsertPhotoIcon sx={{ color: "#5EABD6" }} />Photo</div>
                            <div className='flex gap-2 p-2 cursor-pointer justify-center rounded-lg w-[33%] hover:bg-gray-100'><ArticleIcon sx={{ color: "#F68537" }} />Article</div>
                        </div>
                    </Card>
                </div>

                <div>
                    <Card padding={1}>
                        <div className='flex gap-2 items-center'>
                            <img src={img1} alt='Profile Photo' className='rounded-4xl w-13 h-13 border-2 border-white cursor-pointer' />
                            <div className='w-full border-1 py-3 px-3 rounded-3xl cursor-pointer hover:bg-gray-100'>Start a post</div>
                        </div>

                        <div className='w-full flex mt-3'>
                            <div className='flex gap-2 p-2 cursor-pointer justify-center rounded-lg w-[33%] hover:bg-gray-100'><VideoCallIcon sx={{ color: "#7F55B1" }} />Video</div>
                            <div className='flex gap-2 p-2 cursor-pointer justify-center rounded-lg w-[33%] hover:bg-gray-100'><InsertPhotoIcon sx={{ color: "#5EABD6" }} />Photo</div>
                            <div className='flex gap-2 p-2 cursor-pointer justify-center rounded-lg w-[33%] hover:bg-gray-100'><ArticleIcon sx={{ color: "#F68537" }} />Article</div>
                        </div>
                    </Card>
                </div>
                
                <div>
                    <Card padding={1}>
                        <div className='flex gap-2 items-center'>
                            <img src={img1} alt='Profile Photo' className='rounded-4xl w-13 h-13 border-2 border-white cursor-pointer' />
                            <div className='w-full border-1 py-3 px-3 rounded-3xl cursor-pointer hover:bg-gray-100'>Start a post</div>
                        </div>

                        <div className='w-full flex mt-3'>
                            <div className='flex gap-2 p-2 cursor-pointer justify-center rounded-lg w-[33%] hover:bg-gray-100'><VideoCallIcon sx={{ color: "#7F55B1" }} />Video</div>
                            <div className='flex gap-2 p-2 cursor-pointer justify-center rounded-lg w-[33%] hover:bg-gray-100'><InsertPhotoIcon sx={{ color: "#5EABD6" }} />Photo</div>
                            <div className='flex gap-2 p-2 cursor-pointer justify-center rounded-lg w-[33%] hover:bg-gray-100'><ArticleIcon sx={{ color: "#F68537" }} />Article</div>
                        </div>
                    </Card>
                </div>
                
                <div>
                    <Card padding={1}>
                        <div className='flex gap-2 items-center'>
                            <img src={img1} alt='Profile Photo' className='rounded-4xl w-13 h-13 border-2 border-white cursor-pointer' />
                            <div className='w-full border-1 py-3 px-3 rounded-3xl cursor-pointer hover:bg-gray-100'>Start a post</div>
                        </div>

                        <div className='w-full flex mt-3'>
                            <div className='flex gap-2 p-2 cursor-pointer justify-center rounded-lg w-[33%] hover:bg-gray-100'><VideoCallIcon sx={{ color: "#7F55B1" }} />Video</div>
                            <div className='flex gap-2 p-2 cursor-pointer justify-center rounded-lg w-[33%] hover:bg-gray-100'><InsertPhotoIcon sx={{ color: "#5EABD6" }} />Photo</div>
                            <div className='flex gap-2 p-2 cursor-pointer justify-center rounded-lg w-[33%] hover:bg-gray-100'><ArticleIcon sx={{ color: "#F68537" }} />Article</div>
                        </div>
                    </Card>
                </div>
                
                <div>
                    <Card padding={1}>
                        <div className='flex gap-2 items-center'>
                            <img src={img1} alt='Profile Photo' className='rounded-4xl w-13 h-13 border-2 border-white cursor-pointer' />
                            <div className='w-full border-1 py-3 px-3 rounded-3xl cursor-pointer hover:bg-gray-100'>Start a post</div>
                        </div>

                        <div className='w-full flex mt-3'>
                            <div className='flex gap-2 p-2 cursor-pointer justify-center rounded-lg w-[33%] hover:bg-gray-100'><VideoCallIcon sx={{ color: "#7F55B1" }} />Video</div>
                            <div className='flex gap-2 p-2 cursor-pointer justify-center rounded-lg w-[33%] hover:bg-gray-100'><InsertPhotoIcon sx={{ color: "#5EABD6" }} />Photo</div>
                            <div className='flex gap-2 p-2 cursor-pointer justify-center rounded-lg w-[33%] hover:bg-gray-100'><ArticleIcon sx={{ color: "#F68537" }} />Article</div>
                        </div>
                    </Card>
                </div>

                <div className='border-b-1 border-gray-400 w-[100%] my-5 ' />

                <div className='w-full flex flex-col gap-5'>
                    Post
                </div>
            </div>

            {/* right side */}
            <div className='w-[26%] py-5 hidden md:block'>

                <div>
                    <Card padding={1}>
                        <div className='text-xl' style={{ color: '#7F55B1',fontWeight: '600' }}>WorkSphere News!</div>
                        <div className='text-gray-600'>Top Stories</div>
                        <div className='my-1'>
                            <div className='text-lg' style={{ color: '#171717',fontWeight: '500' }}>Nvidia insiders cash out surge</div>
                            <div className='text-xs text-gray-400'>2h ago</div>
                        </div>

                        <div className='my-1'>
                            <div className='text-lg' style={{ color: '#171717',fontWeight: '500' }}>At least 12 dead in factory blast</div>
                            <div className='text-xs text-gray-400'>5h ago</div>
                        </div>

                        <div className='my-1'>
                            <div className='text-lg' style={{ color: '#171717',fontWeight: '500' }}>Luxury EV sales hit top gear</div>
                            <div className='text-xs text-gray-400'>8h ago</div>
                        </div>
                        
                        <div className='my-1'>
                            <div className='text-lg' style={{ color: '#171717',fontWeight: '500' }}>Law firms bet on younger talent</div>
                            <div className='text-xs text-gray-400'>6h ago</div>
                        </div>

                        <div className='my-1'>
                            <div className='text-lg' style={{ color: '#171717',fontWeight: '500' }}>Hiring picks up at tech startups</div>
                            <div className='text-xs text-gray-400'>5h ago</div>
                        </div>
                        
                        <div className='my-1'>
                            <div className='text-lg' style={{ color: '#171717',fontWeight: '500' }}>Indian ramps up remittances</div>
                            <div className='text-xs text-gray-400'>6h ago</div>
                        </div>
                    </Card>
                </div>

                <div className='my-5 sticky top-19'>
                    <Advertisment />
                </div>
                
            </div>
        </div>
    )
}

export default Feeds