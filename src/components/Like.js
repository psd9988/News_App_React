import React, { useState } from 'react';
import {AiFillLike} from 'react-icons/ai';
import '../styles/LikeDislike.css'



const Like = () => {
    const [likes, setLikes] = useState(0)

    const handleLike = ()=>{
        if(likes < 5){
            setLikes((prev)=>prev + 1)
        }
    }
  return (
    <>
        <h2 className='likebtnContainer'><AiFillLike onClick={handleLike} className='likeDislikeDeleteBtns likeBtn'/>{likes}</h2>
    </>
  )
}

export default Like