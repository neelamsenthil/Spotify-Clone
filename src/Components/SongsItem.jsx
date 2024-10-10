import React, { useContext } from 'react'
import { playerContext } from '../Context/UseContext'

const SongsItem = ({id , name ,image, desc, duration, file}) => {
  const {playWithId} = useContext(playerContext)
  return (
    <div onClick={()=>playWithId(id)} className='min-w-[180px] p-3  px-3 rounded cursor-pointer hover:bg-neutral-600  ' >
    <img className='rounded' src={image} alt="" />
    <div className='pt-2'>
    <p className='text-xl font-semibold'>{name}</p>
    <p className='text-stone-300 text-sm'>{desc}</p>


    </div>


</div>

  )
}

export default SongsItem