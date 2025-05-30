// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Mousewheel, Pagination, Navigation } from 'swiper/modules';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import About from './components/About';
import Skills from './components/Skills';

export default function App() {
  const slideTitles = ['Skills', 'About Me', 'Home', 'Projects', 'Contact'];
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="${className} montserrat-sans">${slideTitles[index]}</span>`;
    },
  };
  return (
    <>
      <div class='box'>
        <div class='wave -one'></div>
        <div class='wave -two'></div>
        <div class='wave -three'></div>
      </div>
      <Swiper
        direction={'horizontal'}
        slidesPerView={1}
        loop={true}
        initialSlide={2}
        pagination={pagination}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><Skills/></SwiperSlide>
        <SwiperSlide><About/></SwiperSlide>
        <SwiperSlide><Home/></SwiperSlide>
        <SwiperSlide><Projects/></SwiperSlide>
        <SwiperSlide><Contact/></SwiperSlide>
      </Swiper>
      <div class='box2'>
        <div class='wave2 -one'></div>
        <div class='wave2 -two'></div>
        <div class='wave2 -three'></div>
      </div>
    </>
  );
}
