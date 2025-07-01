import React,{ useState } from 'react'
import './navbar2.css'
import img1 from '../../images/AnkitPic.jpeg'
import HomeIcon from '@mui/icons-material/HomeOutlined';
import GroupIcon from '@mui/icons-material/GroupOutlined';
import WorkOutlinedIcon from '@mui/icons-material/CasesOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import AddAlertOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { useLocation, Link } from 'react-router-dom';

const Navbar2 = () => {

    const [dropdown, setDropdown] = useState(false);
    const location = useLocation();

    console.log(location)    
    return (
        <div className='bg-white h-13 flex justify-between py-1 px-5 xl:px-50 fixed top-0 w-[100%] z-1000'>
            <div className='flex gap-2 items-center'>
                <div>
                    <h3 className="font-bold text-3xl" style={{ color: '#7F55B1' }}>WorkSphere</h3>
                </div>
                <div className='relative'>
                    <input className='searchInput w-70 bg-gray-100 rounded-sm h-10 px-4' placeholder='Search' />

                    {
                        dropdown && <div className='absolute w-88 left-0 bg-gray-200'>
                            <div className='flex gap-2 mb-1 items-center cursor-pointer'>
                                <div><img className='w-10 h-10 rounded-full' src={img1} alt="Ankit Photo" /></div>
                                <div>Ankit Oraon</div>
                            </div>


                        </div>
                    }
                </div>

            </div>

            <div className='hidden gap-10 md:flex'>
                    <Link to={'/feeds'} className='flex flex-col items-center cursor-pointer'>
                        <HomeIcon style={{ fontSize: 30, color:location.pathname==='/feeds'?"black":"gray"}} />
                        <div className={`text-sm text-gray-500 ${location.pathname==='/feeds'?"border-b-3":""}`}>Home</div>
                    </Link>

                    <Link to={'/myNetwork'} className='flex flex-col items-center cursor-pointer'>
                        <GroupIcon style={{ fontSize: 30, color:location.pathname==='/myNetwork'?"black":"gray"}} />
                        <div className={`text-sm text-gray-500 ${location.pathname==='/myNetwork'?"border-b-3":""}`}>My Network</div>
                    </Link>
                    
                    <Link to={'/resume'} className='flex flex-col items-center cursor-pointer'>
                        <WorkOutlinedIcon style={{ fontSize: 30, color:location.pathname==='/resume'?"black":"gray"}} />
                        <div className={`text-sm text-gray-500 ${location.pathname==='/resume'?"border-b-3":""}`}>Resume</div>
                    </Link>
                    
                    <Link to={'/messages'} className='flex flex-col items-center cursor-pointer'>
                        <MessageOutlinedIcon style={{ fontSize: 30, color:location.pathname==='/messages'?"black":"gray"}} />
                        <div className={`text-sm text-gray-500 ${location.pathname==='/messages'?"border-b-3":""}`}>Messages</div>
                    </Link>

                    <div className='flex flex-col items-center cursor-pointer'>
                       <div><AddAlertOutlinedIcon style={{ fontSize: 30, color:location.pathname==='/notifications'?"black":"gray"}} /> <span className='p-1 rounded-full text-sm bg-red-700 text-white'>2</span> </div>
                        <div className={`text-sm text-gray-500 ${location.pathname==='/notifications'?"border-b-3":""}`}>Notifications</div>
                    </div>

                    <div className='flex flex-col items-center cursor-pointer'>
                        <img className='w-8 h-8 rounded-full' src={img1} alt="Ankit Photo" />
                        <div className='text-sm text-gray-500'>Me</div>
                    </div>
            </div>
        </div>
    )
}

export default Navbar2