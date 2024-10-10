import React  from 'react'
import { useNavigate } from 'react-router-dom'

const AlbumItem = ({id,name,desc,image,bgcolor}) => {
  const navigate = useNavigate()

  return (
        <div className='min-w-[180px] p-3 px-3 rounded cursor-pointer hover:bg-neutral-600 ' onClick={()=>navigate(`/album/${id}`)} >
                <img className='rounded' src={image} alt="" />
                <div className='pt-2'>
                <p className='text-xl font-semibold'>{name}</p>
                <p className='text-stone-300 text-base'>{desc}</p>


                </div>


        </div>

  )
}

export default AlbumItem