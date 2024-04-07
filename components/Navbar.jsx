'use client'

import { Menu } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'

const Navbar = () => {
    const [sidebar, setSidebar] = useState(false);
  return (
    <div className='  fixed h-[80px] w-full bg-[#212429] px-[20px] md:px-[150px] '>
            <div className='flex items-center justify-between h-full'>
                <div className='relative cursor-pointer hover:scale-105 font-bold text-white'><Link href={"/"}>ChiDev</Link></div>
                <nav className='hidden md:block'>
                    <ul className='flex gap-x-6 font-medium text-white'>
                        <li  className='cursor-pointer hover:scale-105'><Link href={"#home"}>Home</Link></li>
                        <li  className='cursor-pointer hover:scale-105'><Link  href={"#about"}>About</Link></li>
                        {/* <li  className='cursor-pointer hover:scale-105'><Link  href={"#service"}>Service</Link></li> */}
                        <li  className='cursor-pointer hover:scale-105'><Link  href={"#project"}>Project</Link></li>
                        <li className='cursor-pointer hover:scale-105'><Link  href={"#gallery"}>Gallery</Link></li>
                    </ul>
                </nav>

            <div className='md:hidden text-white cursor-pointer'>
                <Menu onClick={() => setSidebar((prev) => !prev)} size={30}/>
            </div>

                {
                    sidebar && (
                      <div className='absolute right-0 top-[80px] px-10 py-4 md:hidden bg-gray-100 rounded-bl-lg'>
                    <div>
                    <ul className='flex flex-col gap-y-6 font-medium text-black'>
                        <li onClick={()=>setSidebar(false)}  className='text-[1.3rem] cursor-pointer hover:scale-105'><Link href={"#home"}>Home</Link></li>
                        <li onClick={()=>setSidebar(false)}  className='text-[1.3rem] cursor-pointer hover:scale-105'><Link  href={"#about"}>About</Link></li>
                        {/* <li  className='cursor-pointer hover:scale-105'><Link  href={"#service"}>Service</Link></li> */}
                        <li onClick={()=>setSidebar(false)} className='text-[1.3rem] cursor-pointer hover:scale-105'><Link  href={"#project"}>Project</Link></li>
                        <li onClick={()=>setSidebar(false)} className='text-[1.3rem] cursor-pointer hover:scale-105'><Link  href={"#gallery"}>Gallery</Link></li>
                    </ul>
                    </div>
                </div>  
                    )
                }
                
            </div>


    </div>
  )
}

export default Navbar