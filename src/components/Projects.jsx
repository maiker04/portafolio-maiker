import React, { useState } from 'react';
import '../cards.css';
import { faCircleChevronRight, faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  img1  from '../images/Maquillate-Cx-q38Jp.png';
import  img2  from '../images/metalalliance-DNdKDigL.jpg';
import  img3  from '../images/odyssey-BL5L8S8B.jpg';
import  img4  from '../images/vixenWorkout-Clow14GM.jpg';
import  img5  from '../images/SaleStore-C7AcBOd6.jpg';
import  img6  from '../images/Phoarch-B5icuLVs.jpg';
import  img7  from '../images/digital-code.jpg';

const cards = [
  { id: 1, text: 'Card 1', img: img1 , name: 'Maquillate', desc: 'It is an online store selling makeup and beauty products, as well as courses to learn how to apply professional makeup. It focuses primarily on selling cosmetics, aimed at an audience looking to learn about beauty and makeup.', tecnologies:[{ wordpress: 'Wordpress', vuejs: 'Vuejs', javascript:'Javascript', css: 'CSS', mysql:'MySQL', vueM: 'Vuetify', sass: 'Sass'}], link:'https://maquillate.com/'},
  { id: 2, text: 'Card 2', img: img4 , name: 'VXN Workout', desc: 'VXN Workout is the official website for a fitness program that combines urban dance with high-impact exercises, primarily aimed at women. Its goal is to offer workouts that not only work the body but also boost confidence and personal empowerment through movement and artistic expression.' , tecnologies:[{ javascript:'Javascript', css: 'CSS', shopify:'Shopify', html: 'HTML', sass: 'Sass', jquery:'Jquery'}], link:'https://www.vxnworkout.com/'},
  { id: 3, text: 'Card 3', img: img3 , name: 'Odyssey Group', desc: 'Odyssey Group is a global insurance and reinsurance group offering a wide range of risk management services and insurance solutions for companies across a variety of sectors. It specializes in providing coverage for complex areas such as reinsurance, liability, medical insurance, and other types of commercial insurance.', tecnologies:[{ javascript:'Javascript', css: 'CSS', html: 'HTML', sass: 'Sass', bootstrap:'Bootstrap'}], link:'https://annualreport.odysseygroup.com/2020/index.html'},
  { id: 4, text: 'Card 4', img: img2 , name: 'METALALLIANCE', desc: 'A company offering a wide variety of metal products, it is distinguished by its customer-centric approach, offering customized solutions and responsive service. Its team combines experience in metal panel manufacturing with solid logistics management.', tecnologies:[{ javascript:'Javascript', css: 'CSS', html: 'HTML'}], link:'https://annualreport.odysseygroup.com/2020/index.html'},
  { id: 4, text: 'Card 5', img: img5 , name: 'Salestore', desc: 'Online store focused on selling products, developed with a shopping cart, products, contacts, and more.', tecnologies:[{ react: 'React', vuejs: 'Material UI', javascript:'Javascript', css: 'CSS', sass: 'Sass'}], link:'https://sale-store.vercel.app/'},
  { id: 4, text: 'Card 6', img: img6 , name: 'Phoarch', desc: 'Online image search engine', tecnologies:[{ react: 'React', vuejs: 'Material UI', javascript:'Javascript', css: 'CSS', sass: 'Sass'}], link:'https://phoarch-srea-it8r-git-master-maiker04s-projects.vercel.app/'},
  { id: 4, text: 'Card 7', img: img7 , name: 'DigitalCode', desc: 'Digital Code Team is a company specializing in comprehensive digital solutions, focusing on custom software development and digital transformation services. The company offers a wide range of services designed to enhance its clients digital presence and efficiency.', tecnologies:[{ react: 'React', vuejs: 'Material UI', javascript:'Javascript', css: 'CSS', sass: 'Sass', vite:'Vite', redux: 'Redux'}], link:'https://digitalcodeteam.com/'},
];

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const next = () => {
    setActiveIndex((prev) => (prev + 1) % cards.length);
  };

  const prev = () => {
    setActiveIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  return (
      <div className="card-slider">
        <div className="card-stack">
          {cards.map((card, index) => {
            const offset = index - activeIndex;
            const isActive = index === activeIndex;

            return (
              <div
                key={card.id}
                className={`card ${isActive ? 'active' : ''}`}
                style={{
                  transform: `translateX(${offset * 30}px) rotateY(${offset * -10}deg) scale(${1 - Math.abs(offset) * 0.05})`,
                  zIndex: cards.length - Math.abs(offset),
                  opacity: Math.abs(offset) > 2 ? 0 : 1,
                }}
              >
                <img src={card.img} alt="" style={{borderRadius: '20px', objectFit: 'cover', objectPosition: 'top'}}/>
              </div>
            );
          })}
          <div className="controls">
            <FontAwesomeIcon icon={faCircleChevronLeft} onClick={prev} className='button-prev'/>
            <FontAwesomeIcon icon={faCircleChevronRight} onClick={next} className='button-next'/>
          </div>
        </div>
        <div className='home-main_info'>
          <h1 className='josefin-sans'>{cards[activeIndex].name}</h1>
          <h4 className='montserrat-sans'>{cards[activeIndex].desc}</h4>
          <div className='tecnologies'>
          {cards[activeIndex].tecnologies && Array.isArray(cards[activeIndex].tecnologies) && (
            <ul>
              {cards[activeIndex].tecnologies.map((techObj, index) => (
                <React.Fragment key={index}>
                  {Object.values(techObj).map((tech, idx) => (
                    <li key={idx} className='montserrat-sans'>{tech}</li>
                  ))}
                </React.Fragment>
                ))}
              </ul>
            )}
          </div>
        </div>
        {/* <div className='card-info'>{cards[activeIndex].text}</div> */}
      </div>
  );
}