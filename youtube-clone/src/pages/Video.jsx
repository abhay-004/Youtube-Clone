import React from 'react'
import PlayVideo from '../components/PlayVideo'
import Recommended from '../components/Recommended'
import { useParams } from 'react-router-dom'

const Video = () => {

  const {videoId,categoryId} = useParams()
  return (
    <div className='play-container  bg-[#f9f9f9] pl-[2%] pr-[2%] pt-5 pb-5 flex justify-between flex-wrap  '>
      <PlayVideo videoId={videoId}/>
      <Recommended categoryId={categoryId}/>
    </div>
  )
}

export default Video
