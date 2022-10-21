import React, { useContext, useState } from 'react';
import '../styles/Header.css';
import { SearchStateContext } from '../contexts/searchContext';
import {NavLink} from 'react-router-dom';
import {GiNightSleep} from 'react-icons/gi'
import {FaSun} from 'react-icons/fa'

const Header = () => {



  const {isDark, setIsDark, searchKeyword, setSearchKeyword, searchedNewsData, setSearchedNewsData, saved, setSaved} = useContext(SearchStateContext);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setSaved(searchKeyword)
    setSearchKeyword('')
  }

  const scrollTopHeadlines = () =>{
    setSaved('Headlines');
    window.scrollTo({top: 0, behavior: 'smooth'});
 };

  const scrollTopAbout = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
 };

  const scrollTopContact = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
 };

 const toggleDarkMode = () => {
  setIsDark(!isDark)
  console.log(isDark)
 }

  return (
    <form onSubmit={handleSubmit} className= {isDark? 'DarkHeaderContainer': 'HeaderContainer'}>
        
        <NavLink onClick={scrollTopHeadlines} to={'/'}><h4>Headlines</h4></NavLink>
        <NavLink onClick={scrollTopAbout} to={'/about'}><h4>About</h4></NavLink>
        <NavLink onClick={scrollTopContact} to={'/contactus'}><h4>Contact us</h4></NavLink>
        <div className="searchContainer">
        <input value={searchKeyword} onChange={(e)=>setSearchKeyword(e.target.value)} type="text" placeholder='Enter Search Keyword' />
        <button className='goBtn'>Go</button>

        {isDark? <FaSun onClick={toggleDarkMode} className="lightModeIcon"/>
        
        
        
        
        :
        <GiNightSleep onClick={toggleDarkMode} className="darkModeIcon"/>

        }
        
        </div>

    </form>
  )
}

export default Header