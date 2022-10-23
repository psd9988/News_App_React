import React, { useState } from "react";
import '../styles/Comments.css';
import {TiDelete} from 'react-icons/ti'

const Comments = () => {
  const [inputComment, setInputComment] = useState("");
  const [comments, setComments] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault()
    if(inputComment!=''){
      setComments([...comments, inputComment]);
      console.log(inputComment);
      setInputComment("")
    }
  };

  const handleDelete = (key) => {

    let deleteData = comments.filter((item, index) => index != key)
        console.log(deleteData)

        setComments(deleteData)
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <div>
        <input
          
          type="text"
          placeholder="Comment here.."
          value={inputComment}
          onChange={(e) => {
            setInputComment(e.target.value);
          }}
          className="commentInput"
        />
        <button className="comment_btn">
          Comment
        </button>
      </div>

     </form>
    
      {comments.map((comment, index) => {
        return <div className="commentsContainer" id={index} key={index}>
        <p className="commentText">{comment}</p>
        <TiDelete className="deleteIcon" onClick={()=>handleDelete(index)}/>
        </div>
      })}
    </>
  );
};

export default Comments;