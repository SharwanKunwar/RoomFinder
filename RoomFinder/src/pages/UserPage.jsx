import React from 'react'
import Navbar from '../components/Navbar'
import { MdVerified } from "react-icons/md";
import { MdHome } from "react-icons/md";
import { FaBookmark } from "react-icons/fa";
import { HiClipboardList } from "react-icons/hi";
import { IoSettingsSharp } from "react-icons/io5";
import SmallFilter from '../components/SmallFilter'
import { Button, Select } from 'antd';
import { FaEllipsisH } from "react-icons/fa";

<FaEllipsisH />




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

                {/* //room 1  */}
                <div className='bg-white w-full p-5 rounded-sm'> 
                    {/* head  */}
                    <div className=' h-[60px] flex justify-between items-center'>
                        <div className='flex gap-3'>
                            <img src="/pic.jpg" alt="img" className='bg-indigo-400/30 backdrop-sm w-[50px] h-[50px] rounded-full'/>
                            <div>
                                <h1 className='font-medium'>Sharwan jung kunwar</h1>
                                <p className='text-gray-400 '>2 hrs ago Mission District, SF</p>
                            </div>
                            
                        </div>
                        <FaEllipsisH className='text-gray-400 mr-5'/>
                    </div>
                    {/* //PHOTOES OF ROOM ? */}
                    <div className=' h-[350px] mt-3 flex gap-1'>
                        <div className='bg-yellow-400 w-[70%] h-full flex justify-center items-center'>
                            <img src="/pic.jpg" alt="img01" className='w-full h-full object-cover'/>
                        </div>
                        <div className='w-[30%] h-full flex flex-col gap-1'>
                            <div className='h-[49%]'>
                                <img src="/pic.jpg" alt="img01" className='w-full h-full object-cover'/>
                            </div>
                            <div className='h-[50%]'>
                                <img src="/pic.jpg" alt="img01" className='w-full h-full object-cover'/>
                            </div>
                        </div>
                        
                    </div>
                    {/* all details and clickable */}
                        <div className='mt-3'>
                            {/* top  */}
                            <div className='flex h-[60px]'>
                                <div className='w-6/12'>
                                <h1 className='text-xl tracking-tighter text-indigo-400 font-medium'>Rs 10,000 <span className='text-gray-400'>/ month</span></h1>
                                <h3 className='font-medium text-lg'>Sunny master bedroom with private bath</h3>
                                </div>
                                {/* right  */}
                                <div className=' w-6/12 flex justify-end items-center gap-3 px-5'>
                                    <Button className='text-indigo-400! font-medium!'>Private Room</Button>
                                    <Button className='text-indigo-400! font-medium!'>Available Now</Button>
                                </div>
                            </div>
                            {/* middle  description*/}
                            <div className='mt-2'>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita et ipsam aut esse, fugit accusantium rem itaque odio repellat doloremque. Inventore dolorum quibusdam quae nesciunt architecto ut eum, laboriosam natus.</p>
                            </div>
                            {/* features  */}
                            <div className='mt-3 flex gap-3'>
                                <Button className='text-pink-400!'>Fast Wifi</Button>
                                <Button className='text-indigo-400!'>Ac</Button>
                                <Button className='text-sky-400!'>Water</Button>
                                <Button className='text-green-400!'>Parking</Button>
                            </div>
                            {/* buttom botton */}
                            <div className='mt-5 flex gap-3'>
                                <Button size='large' className='w-[20%] bg-indigo-400! text-white! hover:text-gray-200!'>View in Details</Button>
                                <Button size='large' className='w-[40%] bg-indigo-400! text-white! hover:text-gray-200!'>Message Sharwan jung kunwar</Button>
                                <Button size='large'>Save</Button>
                                <Button size='large'>Share</Button>
                            </div>
                        </div>
                </div>

                    {/* // next room 2  */}
                <div className='bg-white w-full p-5 rounded-sm'> 
                    {/* head  */}
                    <div className=' h-[60px] flex justify-between items-center'>
                        <div className='flex gap-3'>
                            <img src="/pic2.jpg" alt="img" className='bg-indigo-400/30 backdrop-sm w-[50px] h-[50px] rounded-full'/>
                            <div>
                                <h1 className='font-medium'>Parbesh Rawal</h1>
                                <p className='text-gray-400 '>2 hrs ago Mission District, SF</p>
                            </div>
                            
                        </div>
                        <FaEllipsisH className='text-gray-400 mr-5'/>
                    </div>
                    {/* //PHOTOES OF ROOM ? */}
                    <div className=' h-[350px] mt-3 flex gap-1'>
                        <div className='bg-yellow-400 w-[70%] h-full flex justify-center items-center'>
                            <img src="/pic2.jpg" alt="img01" className='w-full h-full object-cover'/>
                        </div>
                        <div className='w-[30%] h-full flex flex-col gap-1'>
                            <div className='h-[49%]'>
                                <img src="/pic2.jpg" alt="img01" className='w-full h-full object-cover'/>
                            </div>
                            <div className='h-[50%]'>
                                <img src="/pic2.jpg" alt="img01" className='w-full h-full object-cover'/>
                            </div>
                        </div>
                        
                    </div>
                    {/* all details and clickable */}
                        <div className='mt-3'>
                            {/* top  */}
                            <div className='flex h-[60px]'>
                                <div className='w-6/12'>
                                <h1 className='text-xl tracking-tighter text-indigo-400 font-medium'>Rs 10,000 <span className='text-gray-400'>/ month</span></h1>
                                <h3 className='font-medium text-lg'>Sunny master bedroom with private bath</h3>
                                </div>
                                {/* right  */}
                                <div className=' w-6/12 flex justify-end items-center gap-3 px-5'>
                                    <Button className='text-indigo-400! font-medium!'>Private Room</Button>
                                    <Button className='text-indigo-400! font-medium!'>Available Now</Button>
                                </div>
                            </div>
                            {/* middle  description*/}
                            <div className='mt-2'>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita et ipsam aut esse, fugit accusantium rem itaque odio repellat doloremque. Inventore dolorum quibusdam quae nesciunt architecto ut eum, laboriosam natus.</p>
                            </div>
                            {/* features  */}
                            <div className='mt-3 flex gap-3'>
                                <Button className='text-pink-400!'>Fast Wifi</Button>
                                <Button className='text-indigo-400!'>Ac</Button>
                                <Button className='text-sky-400!'>Water</Button>
                                <Button className='text-green-400!'>Parking</Button>
                            </div>
                            {/* buttom botton */}
                            <div className='mt-5 flex gap-3'>
                                <Button size='large' className='w-[20%] bg-indigo-400! text-white! hover:text-gray-200!'>View in Details</Button>
                                <Button size='large' className='w-[40%] bg-indigo-400! text-white! hover:text-gray-200!'>Message Sharwan jung kunwar</Button>
                                <Button size='large'>Save</Button>
                                <Button size='large'>Share</Button>
                            </div>
                        </div>
                </div>

                {/* // next room 3 */}
                <div className='bg-white w-full p-5 rounded-sm'> 
                    {/* head  */}
                    <div className=' h-[60px] flex justify-between items-center'>
                        <div className='flex gap-3'>
                            <img src="/pic.jpg" alt="img" className='bg-indigo-400/30 backdrop-sm w-[50px] h-[50px] rounded-full'/>
                            <div>
                                <h1 className='font-medium'>Sharwan jung kunwar</h1>
                                <p className='text-gray-400 '>2 hrs ago Mission District, SF</p>
                            </div>
                            
                        </div>
                        <FaEllipsisH className='text-gray-400 mr-5'/>
                    </div>
                    {/* //PHOTOES OF ROOM ? */}
                    <div className=' h-[350px] mt-3 flex gap-1'>
                        <div className='bg-yellow-400 w-[70%] h-full flex justify-center items-center'>
                            <img src="/room4.jpg" alt="img01" className='w-full h-full object-cover'/>
                        </div>
                        <div className='w-[30%] h-full flex flex-col gap-1'>
                            <div className='h-[49%]'>
                                <img src="/room1.jpg" alt="img01" className='w-full h-full object-cover'/>
                            </div>
                            <div className='h-[50%]'>
                                <img src="/room3.jpg" alt="img01" className='w-full h-full object-cover object-top'/>
                            </div>
                        </div>
                        
                    </div>
                    {/* all details and clickable */}
                        <div className='mt-3'>
                            {/* top  */}
                            <div className='flex h-[60px]'>
                                <div className='w-6/12'>
                                <h1 className='text-xl tracking-tighter text-indigo-400 font-medium'>Rs 10,000 <span className='text-gray-400'>/ month</span></h1>
                                <h3 className='font-medium text-lg'>Sunny master bedroom with private bath</h3>
                                </div>
                                {/* right  */}
                                <div className=' w-6/12 flex justify-end items-center gap-3 px-5'>
                                    <Button className='text-indigo-400! font-medium!'>Private Room</Button>
                                    <Button className='text-indigo-400! font-medium!'>Available Now</Button>
                                </div>
                            </div>
                            {/* middle  description*/}
                            <div className='mt-2'>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita et ipsam aut esse, fugit accusantium rem itaque odio repellat doloremque. Inventore dolorum quibusdam quae nesciunt architecto ut eum, laboriosam natus.</p>
                            </div>
                            {/* features  */}
                            <div className='mt-3 flex gap-3'>
                                <Button className='text-pink-400!'>Fast Wifi</Button>
                                <Button className='text-indigo-400!'>Ac</Button>
                                <Button className='text-sky-400!'>Water</Button>
                                <Button className='text-green-400!'>Parking</Button>
                            </div>
                            {/* buttom botton */}
                            <div className='mt-5 flex gap-3'>
                                <Button size='large' className='w-[20%] bg-indigo-400! text-white! hover:text-gray-200!'>View in Details</Button>
                                <Button size='large' className='w-[40%] bg-indigo-400! text-white! hover:text-gray-200!'>Message Sharwan jung kunwar</Button>
                                <Button size='large'>Save</Button>
                                <Button size='large'>Share</Button>
                            </div>
                        </div>
                </div>

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