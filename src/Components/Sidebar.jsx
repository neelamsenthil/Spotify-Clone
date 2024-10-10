import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
const Sidebar = () => {
    const navigate = useNavigate()
  return (
    <div className='w-[25%] h-full p-2 text-white flex-col gap-2 hidden lg:flex ' >
        <div className='bg-[#121212] h-[15%] rounded flex flex-col justify-around '>
            <div onClick={()=>navigate("/")} className='flex justify-start items-center pl-8 gap-2  cursor-pointer'>
                <img className='w-6' src={assets.home_icon} alt="" />
                <p className='text-xl font-bold'>Home</p>
            </div>

            <div className='flex justify-start items-center pl-8 gap-3  cursor-pointer'>
                <img  className='w-6'src={assets.search_icon} alt="" />
                <p  className='text-xl font-bold'>Search</p>
            </div>

        </div>

        <div className='bg-[#121212] h-[85%] rounded '>
            <div className='flex justify-between items-center p-4'>
                <div className='flex gap-2 items-center cursor-pointer '>
                    <img className='w-8 ' src={assets.stack_icon} alt="" />
                    <p className='font-medium '>Your Library</p>
                </div>

                <div className='flex gap-3 items-center '>
                    <img className='w-5 cursor-pointer' src={assets.arrow_icon} alt="" />
                    <img className='w-5 cursor-pointer' src={assets.plus_icon} alt="" />

                </div>

            </div>

            <div className=' flex flex-col gap-3  ' >
                <div className='bg-zinc-700 flex flex-col gap-1 items-start p-3 rounded mx-2' >
                    <p className='font-semibold'>Create your first playlist</p>
                    <p className='text-gray-400'>it's easy we'll help you</p>
                    <button className='bg-white mt-3 py-2 px-3 text-black rounded-3xl font-semibold border-none'>Create Playlist</button>

                </div>

                <div className='bg-zinc-700 flex flex-col gap-1 items-start p-3 rounded mx-2' >
                    <p className='font-semibold'>Let's find some podcasts to follow</p>
                    <p className='text-gray-400'>We'll keep you updated on new episodes</p>
                    <button className='bg-white mt-3 py-2 px-3 text-black rounded-3xl font-semibold border-none'>Browse podcasts</button>

                </div>


            </div>



        </div>
    </div> 
  )
}

export default Sidebar