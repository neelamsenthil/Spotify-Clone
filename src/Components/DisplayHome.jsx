import React from 'react'
import Navbar from './Navbar'
import AlbumItem from './AlbumItem'
import { albumsData } from '../assets/assets'
import { songsData } from '../assets/assets'
import SongsItem from './SongsItem'

const DisplayHome = () => {
    return (
        <>
            <Navbar />
            <div className='mb-4 mt-3'>
                <h1 className='ml-4 text-2xl font-bold'>Featured Charts</h1>
                <div className='flex  overflow-auto '>
                    {albumsData.map((item, index) =>(
                         <AlbumItem key={index}
                            id={item.id}
                            name={item.name}
                            image={item.image}
                            desc={item.desc}
                            gbcolor={item.bgColor}
                        />
                    ))}

                </div>
            </div>

            <div className='mb-4'>
                <h1 className='ml-4 text-2xl font-bold'>Today's biggest hits</h1>
                <div className='flex  overflow-auto '>
                    {songsData.map((item, index) => (
                         <SongsItem key={index}
                            id={item.id}
                            image={item.image}
                            name={item.name}
                            desc={item.desc}
                            duration={item.duration}
                            file={item.file} />
                    ))}

                </div>
            </div>


        </>
    )
}

export default DisplayHome