import React from 'react';
import '../styles/ContactUs.css'
import {MdEmail} from 'react-icons/md'
import {MdPhoneInTalk} from 'react-icons/md'
import {MdLocationPin} from 'react-icons/md'

const ContactUs = () => {
  return (
    <div className='contactUsContainer'>

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