import React, { useState, useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Footer.css';
import { SearchStateContext } from '../contexts/searchContext';



const Footer = () => {
  const { isDark } = useContext(SearchStateContext)
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  setInterval(() => {
    setCurrentTime(new Date().toLocaleTimeString())
  }, 1000);

  return (

    <>
      <div className={isDark ? 'DarkFooterContainer' : 'FooterContainer'}>

        <p className="">
          &copy;{new Date().getFullYear()} News App - All Rights Reservered
        </p>

        <div className="timeTextContainer">
          <h3 className='liveTime'>{currentTime}</h3>
        </div>

      </div>
    </>
  )
}

export default Footer



