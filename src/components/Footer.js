import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Footer.css';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


const Footer = () => {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());



  setInterval(() => {
    setCurrentTime(new Date().toLocaleTimeString())
  }, 1000);

  return (
    
          <>


    <FooterContainer className='FooterContainer'>

      <div className="footer-middle">
        <div className="container">

          <div className="row">

            {/* column 1 */}

              <h3 className='liveTime'>{currentTime}</h3>

          </div>
          {/* Footer Bottom */}
          <div className="footer-bottom">
            <p className="text-xs-center">

              &copy;{new Date().getFullYear()} News App - All Rights Reservered
            </p>
          </div>
        </div>
      </div>
    </FooterContainer>
</>
  )
}

export default Footer

const FooterContainer = styled.footer`
.footer-middle{
  background:var(--mainBlue);
  padding-top: 1rem;
  color: var(--mainWhite)
}

.footer-bottom{
  padding-top:1rem;
  padding-bottom: 0.2rem;
}


`;

