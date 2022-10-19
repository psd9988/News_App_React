import React, { useEffect, useState, useContext } from 'react';
import { SearchStateContext } from '../contexts/searchContext';
import axios from 'axios';
import '../styles/Headlines.css'
import { NavLink } from 'react-router-dom';
import { BsArrowUpCircleFill } from 'react-icons/bs';
import {AiFillLike, AiFillDislike, AiFillDelete} from 'react-icons/ai';


const Headlines = () => {


    const [loading, setLoading] = useState(false);
    const { searchKeyword, setSearchKeyword, searchedNewsData, setSearchedNewsData, saved, setSaved, isLoading, setIsLoading, likeCounter, setLikeCounter, dislikeCounter, setDislikeCounter } = useContext(SearchStateContext);

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

    // const handleLike = (id) => {
    //     searchedNewsData.filter((item, index) => {
    //         if (id == index) {
    //             setLikeCounter((prev)=> prev + 1)
    //         }
    //     })
       
    // }

   
    // -------------------------
    // DisLike functionality:-

    const handleDisLike = (id) => {
        searchedNewsData.map((item, index) => {
            if (id == index) {
               setDislikeCounter(()=> console.log(dislikeCounter))
            }
        })
       
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
                                    <img src={item.image} alt="image" />
                                    <p>Source: {item.source.name}, {item.source.url}</p>
                                    <p>{item.description}</p>
                                    <button className='readMoreBtn'><a target='_blank' className='readMoreLink' href={item.url}>Read More</a></button>

                                {/* Like Dislike and delete Buttons Container */}
                                    <div className="btnsContainer">

                                    <AiFillLike className='likeDislikeDeleteBtns likeBtn'/>
                                    <h1 className='counterVariable'></h1>


                                    <AiFillDislike onClick={() => handleDisLike(index)}   className='likeDislikeDeleteBtns dislikeBtn'/>
                                    <h1 className='counterVariable'>{dislikeCounter.dislikeCounter}</h1>


                                    <AiFillDelete onClick={() => handleDelete(index)}  className='likeDislikeDeleteBtns deleteBtn'/>

                                   
                                    
                                    </div> 

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
