import React from 'react'
import Navbar from '../components/Navbar'
import { MdVerified } from "react-icons/md";
import { MdHome } from "react-icons/md";
import { FaBookmark } from "react-icons/fa";
import { HiClipboardList } from "react-icons/hi";
import { IoSettingsSharp } from "react-icons/io5";
import SmallFilter from '../components/SmallFilter'
import { Button, Modal, Select } from 'antd';
import RoomCard from '../components/RoomCard';
import OwnerData from '../data/room';
import FilterDrawer from '../components/FilterDrawer';




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

                <FilterDrawer/>

                <div className='bg-white h-125 w-full border-red-400 mt-10'>
                    <div className='h-[200px]'></div>
                </div>

                <Button size='large' className='py-2!'>Log out</Button>
                
                
            </div>

            {/* right box  */}
            <div className=' w-[70%]  px-10 py-10 grid grid-cols-1 gap-3 overflow-y-scroll hide-scrollbar'>
                <div className=' w-full h-[70px] flex gap-3 p-2 '>
                    <div className='w-6/12 '>
                    <h1 className='text-xl font-medium'>Rooms in Kathmandu, Nepal</h1>
                    <p className='text-neutral-400'>145 result match your search</p>
                    </div>
                    {/* // */}
                    <div className="w-6/12  p-3 flex items-center gap-2 justify-end">
                    <label className="font-medium">Sort by:</label>

                    <Select
                        defaultValue="newest"
                        className="w-48 "
                        options={[
                        { value: "newest", label: "Newest First" },
                        { value: "oldest", label: "Oldest First" },
                        { value: "popular", label: "Most Popular" },
                        ]}
                    />
                    </div>
                </div>

                {/* // write code fro feed start from here --------------------------------------------------------------------*/} 
                    {OwnerData.map((room) => (
                        <RoomCard
                        key={room.id}
                        ownerName={room.ownerName}
                        createdAt={room.createdAt}
                        roomImages={room.roomImages}
                        roomPrice={room.roomPrice}
                        roomTitle={room.roomTitle}
                        description={room.description}
                        status={room.status}
                        facilities={room.facilities}
                        isSaved={room.isSaved}
                        />
                    ))}
                <div className='bg-yellow-400 w-full h-[300px] p-2 rounded-sm flex justify-center items-center'>
                    <h1>Thank you for visiting</h1>
                </div>
                {/* // write code fro feed end from here --------------------------------------------------------------------*/} 

            </div>

        </div>
    </>
  )
}

export default UserPage