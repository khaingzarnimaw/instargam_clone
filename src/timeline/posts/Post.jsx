import { Avatar } from '@mui/material'
import React from 'react'
import MoreHorizIcon from "@mui/icons-material/MoreHoriz"
import Meimg from "./Me.png"
import  FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import  ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import TelegramIcon from "@mui/icons-material/Telegram"
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder"
import "./Post.css"


const Post = () => {
  return (
    <div className='post'>
      <div className="post__header">
        <div className="post__headerAuthor">
           <Avatar> </Avatar>
           kznm_ .<span>12h</span> 
        </div>
         <MoreHorizIcon/>
       
      </div>

      <div className="post__image">
        <img src={Meimg} alt="" />
      </div>
      <div className="post__footer">
        <div className="post__footerIcons">
            <div className="post__iconsMain">
               <FavoriteBorderIcon className='postIcon'/>
               <ChatBubbleOutlineIcon className='postIcon'/>
              <TelegramIcon className='postIcon'/>
            </div>
            <div className="post__iconSave">
                <BookmarkBorderIcon className='postIcon'/>
            </div>
        </div>
      </div>
        like by 21 people
    </div>
  )
}

export default Post
