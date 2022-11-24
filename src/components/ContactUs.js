import React, {useContext} from 'react';
import { SearchStateContext } from '../contexts/searchContext';
import {MdLocationPin} from 'react-icons/md';
import {MdPhoneInTalk} from 'react-icons/md';
import {MdEmail} from 'react-icons/md';
import '../styles/ContactUs.css';

const ContactUs = () => {

  const {isDark} = useContext(SearchStateContext);

  return (
    <div className= {isDark? 'DarkcontactUsContainer': 'contactUsContainer'}>

    <div className="getInTouchContainer">
    <h1 className='getInTouchHeading'>Get In Touch With Us</h1>
    {/* email */}
     <div className="emailContainer">
     <MdEmail className='emailIcon'/>
    <h4>connect@NewsApp.com</h4>
     </div>
    {/* phone */}
     <div className="phoneContainer">
     <MdPhoneInTalk className='phoneIcon'/>
    <h4>099-152-754-091</h4>
     </div>
    {/* location */}
     <div className="locationContainer">
     <MdLocationPin className='locationIcon'/>
    <h4>Amazon Valley Square, Rickshaw Cottage, Andheri-East, Mumbai PA 19103</h4>
     </div>



    </div>





    </div>
  )
}

export default ContactUs