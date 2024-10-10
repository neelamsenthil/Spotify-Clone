import React, { createContext, useEffect, useRef, useState } from 'react'
export const playerContext = createContext()
import { songsData } from '../assets/assets'

const UseContext = (props) => {
    const audioRef = useRef()
    // const seekBg = useRef()
    const seekBar = useRef()
    const [track, setTrack] = useState(songsData[0])
    const [playStatus, setPlayStatus] = useState(false)
    const [time, setTime] = useState({
        currentTime: {
            second: 0,
            minute: 0
        },
        totalTime: {
            second: 0,
            minute: 0
        }
    })

    // this function is for audio playing //
    const play = () => {
        audioRef.current.play()
        setPlayStatus(true)
    }

    // this function is for pause audio //
    const pause = () => {
        audioRef.current.pause()
        setPlayStatus(false)
    }

    useEffect(() => {
        setTimeout(() => {
            audioRef.current.ontimeupdate = () => {
                seekBar.current.style.width = Math.floor(audioRef.current.currentTime / audioRef.current.duration * 100) + "%"
                setTime({
                    currentTime: {
                        second: Math.floor(audioRef.current.currentTime % 60),
                        minute: Math.floor(audioRef.current.currentTime / 60)
                    },
                    totalTime: {
                        second: Math.floor(audioRef.current.duration % 60),
                        minute: Math.floor(audioRef.current.duration / 60)
                    }


                })
            }

        }, 1000)

    }, [audioRef])

    // this function is for audio playing with clicking id //
    const playWithId = async (id) => {
        await setTrack(songsData[id])
        await audioRef.current.play()
        setPlayStatus(true)

    }

    // this function is for previous button //
    const previousBtn = async()=>{
        if(track.id > 0){
            await setTrack(songsData[track.id-1])
            await audioRef.current.play()
            setPlayStatus(true)

        }
    }

    // this function is for next button //
    const nextBtn = async()=>{
        if (track.id < songsData.length-1) {
            await setTrack(songsData[track.id+1])
            await audioRef.current.play()
            setPlayStatus(true)
            
        }
    }







    const playerValue = {
        audioRef,
        seekBar,
        track, setTrack,
        playStatus, setPlayStatus,
        time, setTime,
        play,
        pause,
        playWithId,
        nextBtn,
        previousBtn

    }
    return (
        <playerContext.Provider value={playerValue}>
            {props.children}

        </playerContext.Provider>
    )
}

export default UseContext