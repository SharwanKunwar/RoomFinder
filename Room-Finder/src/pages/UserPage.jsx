import React from 'react'
import Navbar from '../components/Navbar'
import { MdVerified } from "react-icons/md";
import { MdHome } from "react-icons/md";
import { FaBookmark } from "react-icons/fa";
import { HiClipboardList } from "react-icons/hi";
import { IoSettingsSharp } from "react-icons/io5";
import SmallFilter from '../components/SmallFilter'
import { Button } from 'antd';



function UserPage() {
  return (
    <>
        <Navbar/>
        <div className='bg-[#F6F7F8] w-screen h-screen pt-15 flex'>

            {/* left box  */}
            <div className=' w-[30%] pl-10 flex flex-col gap-5 py-10 overflow-y-scroll hide-scrollbar'>
                {/* top div  */}
                <div className='bg-white rounded-md shadow py-5'>
                    {/* profile photo and greetings  */}
                    <div className='flex px-5 gap-3 justify-start items-center'>
                        <img src="vite.svg" alt="profile" className='bg-indigo-400/30 backdrop-blur-2xl p-2 rounded-md'/>
                        <div>
                            <h1 className='text-2xl'>Welcome ?</h1>
                            <p className='text-[#4D9FF1]'>Complete Your Profile</p>
                        </div>
                    </div>
                    {/* message  */}
                    <div className='bg-[#EFF6FF]  mx-5 mt-5 rounded-md p-2 flex gap-3'>
                        <div className='p-1'><MdVerified size={20} className="text-blue-500" /></div>
                        <div><p className='text-neutral-500'>Verify Your Profile to get <span className='text-black'>3X more replies</span> from landloards.</p></div>
                    </div>
                </div>
                
                {/* middle list */}
                <div className="bg-white h-50 rounded-md p-5 shadow">
                <ul className="w-full h-full flex flex-col justify-between text-gray-700 ">

                    <li className="flex items-center gap-3 cursor-pointer p-2 hover:text-indigo-500 hover:bg-gray-100 hover:backdrop-blur-sm hover:rounded-sm transition">
                    <MdHome size={22} />
                    <span>Feed</span>
                    </li>

                    <li className="flex items-center gap-3 cursor-pointer p-2 hover:text-indigo-500 hover:bg-gray-100 hover:backdrop-blur-sm hover:rounded-sm transition">
                    <FaBookmark size={18} />
                    <span>Saved Rooms</span>
                    </li>

                    <li className="flex items-center gap-3 cursor-pointer p-2 hover:text-indigo-500 hover:bg-gray-100 hover:backdrop-blur-sm hover:rounded-sm transition">
                    <HiClipboardList size={20} />
                    <span>Application</span>
                    </li>

                    <li className="flex items-center gap-3 cursor-pointer p-2 hover:text-indigo-500 hover:bg-gray-100 hover:backdrop-blur-sm hover:rounded-sm transition">
                    <IoSettingsSharp size={20} />
                    <span>Settings</span>
                    </li>

                </ul>
                </div>


                 {/* buttom div  */}
                <div className='bg-white rounded-md shadow '>
                   <SmallFilter/>
                </div>
                <Button size='large' className='py-2! bg-indigo-400! text-white!'>Room Filter</Button>
                

                
            </div>

            {/* right box  */}
            <div className=' w-[70%]  pl-5'></div>

        </div>
    </>
  )
}

export default UserPage