import React from 'react'
import { assets, songsData } from '../assets/assets'
import { useContext } from 'react'
import { playerContext } from '../Context/UseContext'



const Player = () => {
  const {seekBar,playStatus,play,pause,track,nextBtn,previousBtn,time} = useContext(playerContext)
  
  return (
    <div className='h-[10%] bg-black text-white flex justify-between items-center px-3'>
      <div className='hidden lg:flex  gap-4'>
        <img className='w-12 rounded' src={track.image} alt="" />
        <div>
          <p>{track.name}</p>
          <p>{track.desc.length > 16 ? track.desc.substring(0,15)+"...":track.desc}</p>
        </div>


      </div>

      <div className=' hidden lg:flex flex-col items-center gap-2 m-auto '>
          <div className='flex items-center gap-2 cursor-pointer'>
            <img className='w-5' src={assets.shuffle_icon} alt="" />
            <img onClick={previousBtn} className='w-5' src={assets.prev_icon} alt="" />
            {playStatus? <img onClick={pause} className='w-6' src={assets.pause_icon} /> : <img onClick={play} className='w-6' src={assets.play_icon} />}
            <img onClick={nextBtn} className='w-5' src={assets.next_icon} alt="" />
            <img className='w-5' src={assets.loop_icon} alt="" />
          </div>

          <div className='flex items-center gap-2 '>
            <p>{time. currentTime.minute}:{time. currentTime.second}</p>
            <div  className='w-[40vw] max-w[500px]  bg-slate-50 rounded-full  '>
              <hr ref={seekBar} className='h-1 w-0 border-none bg-green-800 rounded-full' />
            </div>
            <p>{time.totalTime.minute}:{time.totalTime.second}</p>

          </div>
        </div>

        <div className='hidden lg:flex items-center gap-2 opacity-75' >
          <img className='w-4' src={assets.plays_icon} alt="" />
          <img className='w-4' src={assets.mic_icon} alt="" />
          <img className='w-4' src={assets.queue_icon} alt="" />
          <img className='w-4' src={assets.speaker_icon} alt="" />
          <img className='w-4' src={assets.volume_icon} alt="" />
          <div className='w-20 h-1 bg-slate-50 rounded-full'>
          </div>

          <img className='w-4' src={assets.mini_player_icon} alt="" />
          <img className='w-4' src={assets.zoom_icon} alt="" />

        </div>


    </div>
  )
}

export default Player