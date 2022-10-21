import React, { useEffect, useState, useContext } from 'react';
import { SearchStateContext } from '../contexts/searchContext';
import axios from 'axios';
import '../styles/Headlines.css'
import { NavLink } from 'react-router-dom';
import { BsArrowUpCircleFill } from 'react-icons/bs';
import {AiFillLike, AiFillDislike, AiFillDelete} from 'react-icons/ai';


const Headlines = () => {
    
    let [commentsValue, setCommentsValue] = useState({commentsValue: ''});
    let [displayComments, setDisplayComments] = useState({displayComments:''});

   
    // let Mycomments = {commentsValue: '', displayComments: []}


    const [loading, setLoading] = useState(false);
    const { searchKeyword, setSearchKeyword, searchedNewsData, setSearchedNewsData, saved, setSaved, isLoading, setIsLoading, likeCounter, setLikeCounter, dislikeCounter, setDislikeCounter} = useContext(SearchStateContext);

    // backup Api:-

    // let url = `https://gnews.io/api/v4/search?q=${saved}&token=e083f268e7ff1c129e0b271bc56d41d1`;

    let url = `https://newsapi.org/v2/everything?q=${saved}&apiKey=2402e398703a4b98a120d160f67db765`;

    // get data from api using axios and save it in state of array:-

    useEffect(() => {
        axios
            .get(url)
            .then(response => setSearchedNewsData(response.data.articles))
            
    }, [saved]);
    
    // -----------------------------------

    // adding like and dislike counters object to the api data:-
    
    useEffect(()=> {
        searchedNewsData.forEach(element => {
            Object.assign(element, commentsValue)
            Object.assign(element, displayComments)
            Object.assign(element, likeCounter)
            Object.assign(element, dislikeCounter)
            
        })
    }, [searchedNewsData])
    
// ---------------------------------------------------------

    // delete functionality:-

    const handleDelete = (id) => {
        let newArr = []
        searchedNewsData.filter((item, index) => {
            if (id != index) {
                newArr.push(item)
            }
        })
        setSearchedNewsData(newArr)
    }

    // -------------------------
    // like functionality:-

    const handleLike = (id) => {
       if(searchedNewsData[id].likeCounter <10){
        setLikeCounter(searchedNewsData[id].likeCounter+=1)
       }
       
    }
   
    // -------------------------
    // DisLike functionality:-

    const handleDisLike = (id) => {
        
      if(searchedNewsData[id].dislikeCounter > 0){
        setDislikeCounter(searchedNewsData[id].dislikeCounter-=1)
      }
       
    }

    // -------------------------
    // scroll to top functionality:-

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);


    // -----------------------------------

    // handle comments onsubmit:-

    const handleSubmit = (id) => {
       if(searchedNewsData[id].commentsValue !=''){
        searchedNewsData[id].displayComments = (searchedNewsData[id].commentsValue)

        setCommentsValue(searchedNewsData[id].commentsValue='')
        
       }
    }

    // ------------------------------------

    return (
        <>
            <NavLink className="scrollTop" onClick={scrollTop}>
                <BsArrowUpCircleFill />
            </NavLink>

            <div className="container">
                {loading ? (
                    <div className="loader-container">
                        <img className='loadingImage' src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif?20170503175831" />
                        <h1 className='loadingImageText'>Loading...</h1>

                    </div>

                ) : <div className='newsMainContainer'>

                    {
                        searchedNewsData.map((item, index) => {
                            return (
                                <div className='headlineContainer' id={index} key={index}>
                                    <h1>{item.title}</h1>
                                    <p>Published on: {item.publishedAt}</p>
                                    <img src={item.urlToImage} alt="image" />
                                    <p>Source: {item.source.name}, {item.source.url}</p>
                                    <p>{item.description}</p>
                                    <button className='readMoreBtn'><a target='_blank' className='readMoreLink' href={item.url}>Read More</a></button>

                                {/* Like Dislike and delete Buttons Container */}
                                    <div className="btnsContainer">

                                    <AiFillLike onClick={()=> handleLike(index)} className='likeDislikeDeleteBtns likeBtn'/>
                                    <h1 className='counterVariable'>{item.likeCounter}</h1>


                                    <AiFillDislike onClick={() => handleDisLike(index)}   className='likeDislikeDeleteBtns dislikeBtn'/>
                                    <h1 className='counterVariable'>{item.dislikeCounter}</h1>


                                    <AiFillDelete onClick={() => handleDelete(index)}  className='likeDislikeDeleteBtns deleteBtn'/>

                                    </div> 

                                    <form onSubmit={handleSubmit} >
                                      
                                       <input value={item.commentsValue} onChange= {(e)=> setCommentsValue(item.commentsValue=e.target.value)} type="text" placeholder='Enter Comments' />
                                       
                                       <button onClick={(e) => {e.preventDefault()
                                        handleSubmit(index)}}>submit</button>

                                            <p>{item.displayComments}</p>

                                       </form>

                                     

                                 {/* -------------------------------------- */}

                                   <div className="line"></div>
                           </div>)
                        })
                    }
                </div>
                }
            </div>
        </>
    )
}

export default Headlines
