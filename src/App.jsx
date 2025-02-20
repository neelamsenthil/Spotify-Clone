import { useContext, useState } from 'react'
import './App.css'
import Sidebar from './Components/Sidebar'
import Player from './Components/Player'
import Display from './Components/Display'
import { playerContext } from './Context/UseContext'

function App() {
  const{audioRef,track} = useContext(playerContext)

  return (
    <>
    <div className='h-screen bg-black '>
      <div className='h-[90%] flex'>
        <Sidebar />
        <Display />
      </div>
      <Player />
      <audio ref={audioRef} src={track.file} preload='auto'></audio>

    </div>

    </>
  )
}

export default App
