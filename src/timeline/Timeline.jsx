import React from 'react'
import Sugessions from './Sugessions'
import "./Timeline.css"
import Post from "./posts/Post"

const Timeline = () => {
  return (
    <div className='timeline'>
    <div className="timeline__left">
      <div className='timeline__posts'>
        <Post/>
        <Post/>
        <Post/>
     </div>
   </div>
    <div className="timeline__right">
        <Sugessions/>
    </div>
    </div>
  )
}

export default Timeline
