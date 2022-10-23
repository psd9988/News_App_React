import React, { useEffect, useState, useContext } from 'react';
import { SearchStateContext } from '../contexts/searchContext';
import axios from 'axios';
import '../styles/Headlines.css'
import { NavLink } from 'react-router-dom';
import { BsArrowUpCircleFill } from 'react-icons/bs';
import {AiFillLike, AiFillDislike, AiFillDelete} from 'react-icons/ai';
import Comments from './Comments';


const Headlines = () => {
    
    const [loading, setLoading] = useState(false);
    const { searchedNewsData, setSearchedNewsData, saved, likeCounter, setLikeCounter, dislikeCounter, setDislikeCounter, isDark} = useContext(SearchStateContext);

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
            Object.assign(element, likeCounter)
            Object.assign(element, dislikeCounter)
            
        })
    }, [searchedNewsData])
    
// ---------------------------------------------------------

    // delete functionality:-

    const handleDelete = (url) => {
        let deleteData = searchedNewsData.filter((item) => item.url !== url);
        console.log(deleteData);
        setSearchedNewsData(deleteData);
    };

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
        
      if(searchedNewsData[id].dislikeCounter < 10){
        setDislikeCounter(searchedNewsData[id].dislikeCounter+=1)
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

    // ------------------------------------

    return (
        <>
            <NavLink className="scrollTop" onClick={scrollTop}>
                <BsArrowUpCircleFill />
            </NavLink>

            <div className= {isDark? 'DarkContainer': 'container'}>
                {loading ? (
                    <div className="loader-container">
                        <img className='loadingImage' src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif?20170503175831" />
                        <h1 className='loadingImageText'>Loading...</h1>

                    </div>

                ) : <div className='newsMainContainer'>

                    {
                        searchedNewsData.map((item, index) => {
                            return (
                                <div className='headlineContainer' id={index} key={item.url}>
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


                                    <AiFillDelete onClick={() => handleDelete(item.url)}  className='likeDislikeDeleteBtns deleteBtn'/>

                                    </div> 
                                    <Comments/>


                                 

                                     

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
