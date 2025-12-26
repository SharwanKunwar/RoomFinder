import React from 'react'
import OwnerNavbar from '../components/OwnerNavbar'
import { Button } from 'antd';

import { IoSettingsSharp } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { FaEnvelope } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import DashboardOwner from '../ownerPages/DashboardOwner';
// import { IoSettingsSharp } from "react-icons/io5";
import { MdLogout } from "react-icons/md";




function OwnerDashboard() {
  return (
    <>
      <div className=' w-screen h-screen'>
        
        <div className='pt-5 px-10 bg-slate-200 w-screen h-screen flex gap-5'>

          {/* left for nav list  */}
          <div className=' w-[30%]'>
            {/* img and name and tag  */}
            <div className='flex justify-start h-[10%] items-center gap-3 py-3 border-b border-white/30 shadow p-5 rounded-md bg-white'>
              <img src="vite.svg" alt="img" className='w-[50px] h-[50px]'/>
              <div>
                <h1 className='text-2xl font-medium'>sharwan jung kunwar</h1>
                <p className='text-neutral-400'>Room Owner</p>
              </div>
            </div>
            {/* nav list */}
              <div className=' h-[90%] flex flex-col justify-between pb-10'>
                <div className="bg-white h-50 rounded-md p-5 shadow mt-5">
                <ul className="w-full h-full flex flex-col justify-between text-gray-700 ">            
                    <li className="flex items-center gap-3 cursor-pointer p-2 hover:text-indigo-500 hover:bg-gray-100 hover:backdrop-blur-sm hover:rounded-sm transition">
                      <MdDashboard size={22} />
                      <span>Dashboard</span>
                    </li>
            
                    <li className="flex items-center gap-3 cursor-pointer p-2 hover:text-indigo-500 hover:bg-gray-100 hover:backdrop-blur-sm hover:rounded-sm transition relative">
                      <FaEnvelope size={18} />
                      <span>Messages</span>
                      <div className='absolute top-2 left-6  bg-red-400 text-white rounded-full w-[8px] h-[8px] flex justify-center items-center p-1'><span className='text-[15px]'></span></div>
                    </li>
            
                    <li className="flex items-center gap-3 cursor-pointer p-2 hover:text-indigo-500 hover:bg-gray-100 hover:backdrop-blur-sm hover:rounded-sm transition">
                      <FaEnvelope size={18} />
                      <span>Profile</span>
                    </li>
            
                    <li className="flex items-center gap-3 cursor-pointer p-2 hover:text-indigo-500 hover:bg-gray-100 hover:backdrop-blur-sm hover:rounded-sm transition">
                       <IoSettingsSharp size={20} />
                      <span>Settings</span>
                    </li>
                </ul>
                
              </div>
              <div className=''>
                <Button className='w-full' size='large'><MdLogout size={22} />Log out</Button>
              </div>
              </div>
          </div>





          {/* right for dashboard  */}
          <div className=' w-[70%] border-l border-black/30 relative overflow-y-scroll hide-scrollbar'>
              <DashboardOwner/>
          </div>



        </div>
      </div>
    </>
  )
}

export default OwnerDashboard