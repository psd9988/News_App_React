import React, { useState } from 'react';
import { AiFillDislike} from 'react-icons/ai';
import '../styles/LikeDislike.css'


const Dislike = () => {
    const [dislikes, setDislikes] = useState(4)

    const handleDislike = ()=>{
        if(dislikes<5){
            setDislikes((prev)=>prev + 1)
        }
    }
  return (
    <>
        <h2 className='dislikeBtnContainer'><AiFillDislike onClick={handleDislike} className='likeDislikeDeleteBtns dislikeBtn'/>{dislikes}</h2>
    </>
  )
}

export default Dislike