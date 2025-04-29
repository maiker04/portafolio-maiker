import React from 'react'
import img from '../images/maikerHand-BaFsx1h2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Importa el ícono que quieres usar
import { faLinkedinIn, faUpwork, faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

function Home() {
  return (
    <div className='home-main'>
      <div className='dev'>
      <img src={img} alt="" style={{width: "auto"}} />
      </div>
      <div className='home-main_info'>
        <h1 className='josefin-sans'>Hi, I'm Maiker Carrero</h1>
        <h2 className='josefin-sans'>Front-End Developer.</h2>
        <h4 className='montserrat-sans'>Front-end developer with over 6 years of experience. I develop responsive and intuitive websites and applications. I focus on clean code and efficient design, ensuring seamless interactions that align with user expectations and business objectives.</h4>
        <div className='socialM'>
        <FontAwesomeIcon icon={faUpwork}  className='upwork-icon'/>
        <FontAwesomeIcon icon={faLinkedinIn}  className='linkedin-icon'/>
        <FontAwesomeIcon icon={faGithubAlt}  className='github-icon'/>
        <FontAwesomeIcon icon={faEnvelope}  className='mail-icon'/>
        </div>
      </div>
    </div>
  )
}

export default Home;
