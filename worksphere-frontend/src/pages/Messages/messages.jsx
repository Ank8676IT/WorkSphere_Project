import React from 'react'
import Card from '../../components/Card/card'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

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
                            <div className='flex items-center w-full cursor-pointer border-b-1 border-gray-300 gap-3 p-4 hover:bg-gray-200'>

                            </div>
                            
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    </div>
  )
}

export default Messages