import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()
  return (
    <>
    <div className='flex justify-between items-center mt-4  '>
        <div className='flex items-center gap-3 ml-4 '>
            <img className='w-5 cursor-pointer ' src={assets.arrow_left} alt="" onClick={()=>navigate(-1)} />
            <img className='w-5 cursor-pointer' src={assets.arrow_right} alt="" onClick={()=>navigate(1)} />
        </div>

        <div className='flex items-center gap-3 mr-2'>
            <button className='bg-white text-black px-3 py-1 rounded-full font-semibold hidden md:block'>Explore Premium</button>
            <button className='bg-black text-white px-3 py-1 rounded-full font-semibold'>Install App</button>
            <div className='bg-purple-600 rounded-full w-6'>
                <p className='text-center text-black font-semibold '>N</p>
            </div>
        </div>

    </div>

    <div className='flex items-center gap-3 mt-4 ml-4 font-medium'>
        <p className='bg-white text-black rounded-xl py-1 px-3 cursor-pointer'>All</p>
        <p  className='bg-black  rounded-xl py-1 px-3 cursor-pointer'>Music</p>
        <p  className='bg-black  rounded-xl py-1 px-3 cursor-pointer'>Podcasts</p>

    </div>
    </>
  )
}

export default Navbar