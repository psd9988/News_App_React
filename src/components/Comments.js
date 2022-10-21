import React, { useState } from 'react'

const Comments = () => {

    const [commentsValue, setCommentsValue] = useState('')
    const [displayComments, setDisplayComments] = useState('')
    const [id, setId] = useState(0)
   

    const handleSubmit = (e) => {
        e.preventDefault()
        setId(prev=>prev+1)
       if(commentsValue !=''){
        setDisplayComments([...displayComments,<br/>,commentsValue])
        setCommentsValue('')
       }
    }

  return (
    <>
       <form onSubmit={handleSubmit}>
       <input value={commentsValue} onChange={(e)=>setCommentsValue(e.target.value)}  type="text" placeholder='Enter your comments here'/>
        <button>Submit</button>
       </form>

        <h3 key={id}>{displayComments}</h3>
    </>
  )
}

export default Comments