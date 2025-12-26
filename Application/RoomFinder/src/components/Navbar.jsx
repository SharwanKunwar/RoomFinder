import { Button, Input } from 'antd'
import { FiSearch } from "react-icons/fi";
import { FiBell } from "react-icons/fi";


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
            <div className='w-[40%] h-full flex justify-end items-center px-10'>
            {/* nav list  */}
            <div className='w-[50%] h-full pr-5'>
            <ul className='flex items-center justify-end gap-5 h-full w-full'>
                <li>My Room</li>
            </ul>
            </div>
            
            {/* buttons  */}
            <div className=' flex gap-10 items-center justify-end '>
                <div className='bg-white w-10 h-10 rounded-full shadow relative flex justify-center items-center'>
                    <FiBell size={24} className="text-gray-700 cursor-pointer hover:text-blue-500" />
                    <div className='absolute -top-1 -right-1 rounded-full bg-red-300 w-3.75 h-3.75 flex justify-center items-center p-1'><span className='text-[10px] text-white'>3</span></div>
                </div>
                <div className='bg-white w-10 h-10 rounded-full shadow'></div>
            </div>

            </div>
        </div>
    </>
  )
}

export default Navbar