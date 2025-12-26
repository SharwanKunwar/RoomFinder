import { Button, Input } from 'antd'
import React from 'react'
import { SearchOutlined } from "@ant-design/icons";
import { FiSearch } from "react-icons/fi";
import { FaPlus } from "react-icons/fa";


function Navbar() {
  return (
    <>
        <div className='bg-[#F6F7F8] w-full h-20 absolute top-0 shadow flex z-50'>
            {/* left  */}
            <div className='w-[60%] h-full flex gap-5 pl-10'>
                {/* logo and text   */}
                <div className='flex justify-start items-center gap-3'>
                    <img src="/vite.svg" alt="logo" />
                    <h1 className='text-2xl'>RoomFinder</h1>
                </div>
                {/* search bar */}
                <div className="flex items-center">
               <Input
                placeholder="Search rooms, locations..."
                prefix={<FiSearch className="text-gray-400 mr-2" />}
                className="py-2! rounded-sm! w-87.5!"
                />
                </div>
            </div>

            {/* right  */}
            <div className='w-[40%] h-full flex justify-center items-center'>
            {/* nav list  */}
            <div className='w-[50%] h-full pr-5'>
            <ul className='flex items-center justify-end gap-10 h-full w-full'>
                <li>Home</li>
                <li>My Listings</li>
                <li>Message</li>
            </ul>
            </div>
            
            {/* buttons  */}
            <div className=' flex gap-3 items-center justify-end pr-10'>
                <div className='bg-white w-[40px] h-[40px] rounded-full shadow'></div>
                <Button size='large'> <FaPlus size={15} className="text-indigo-400!" />  Post a Room</Button>
                <div className='bg-white w-[40px] h-[40px] rounded-full shadow'></div>
            </div>

            </div>
        </div>
    </>
  )
}

export default Navbar