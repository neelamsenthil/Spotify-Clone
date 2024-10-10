import React, { useContext, useState } from 'react'
import { albumsData, assets } from '../assets/assets'
import { useParams } from 'react-router-dom'
import Navbar from './Navbar'
import { songsData } from '../assets/assets'
import { playerContext } from '../Context/UseContext'

const DisplayAlbum = () => {
  const {playWithId} = useContext(playerContext)
  const { id } = useParams()
  const albumData = albumsData[id]

  // console.log(albumData);
  // const [bgColor,setBgColor] = useState()


  return (
    <>
      <Navbar />
      <div className='flex flex-col sm:flex-row gap-4 mt-4 ml-4   ' >
        <img className='w-44 rounded-md' src={albumData.image} alt="" />
        <div className='flex flex-col gap-0 justify-center'>
          <p className='text-xl '>Playlist</p>
          <p className='mb-2'><span className='text-5xl font-bold '>{albumData.name}</span></p>
          <p className='text-neutral-200'>{albumData.desc}</p>
          <div className='flex items-center gap-1 mt-1 '>
            <img className='w-5 ' src={assets.spotify_logo} alt="" />
            <p><b>Spotify .</b>
              1,323,154 likes
              <b>. 50 songs,</b>
              about 2 hr 30 min

            </p>


          </div>
        </div>


      </div>
      <div className='grid grid-cols-3  items-center sm:grid-cols-4 mt-4 ml-4 text-neutral-400'>
        <p>
        <b className='text-neutral-400'>#</b>  Title</p>
        <p>Album</p>
        <p className='sm:block hidden '>Data Added</p>
        <img className='w-5' src={assets.clock_icon} alt="" />

      </div>

      <hr className='mt-2 text-neutral-300' />

      {songsData.map((item,index)=>{
        return <div key={index} onClick={()=>playWithId(item.id)} className='grid grid-cols-3 gap-2 sm:grid-cols-4 items-center hover:bg-neutral-500  cursor-pointer'>
          <p className='flex gap-2 p-2 items-center ml-2 '>
           <span className='text-neutral-400'>{item.id+1}</span>
            <img className='w-10 rounded' src={item.image} alt="" />
            {item.name}
          </p>
          <p className='text-neutral-400'>{albumData.name}</p>
          <p className='hidden sm:block text-neutral-400'>5 days ago</p>
          <p className='text-neutral-400'>{item.duration}</p>

        </div>
      })}




    </>
  )
}

export default DisplayAlbum