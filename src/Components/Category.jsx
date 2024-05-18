import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import slide1 from '../home/slide1.jpg'
import slide2 from '../home/slide2.jpg'
import slide3 from '../home/slide3.jpg'
import slide4 from '../home/slide4.jpg'
import slide5 from '../home/slide5.jpg'

import 'swiper/css';
import 'swiper/css/pagination';
import SectionTitle from './SectionTitle/SectionTitle';

const Category = () => {
    return (
             <div>
        <SectionTitle 
        subHeading={"---From 11:00am to 10:00pm---"}
        heading={"ORDER ONLINE"}
        />



               <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-12"
      >
        <SwiperSlide><img className='pb-4' src={slide1} alt="" />
        <h1 className="text-4xl font-bold text-center -mt-16 text-white">SALADS</h1>
        </SwiperSlide>
        <SwiperSlide><img src={slide2} alt="" />
        <h1 className="text-4xl font-bold text-center -mt-16 text-white">PIZZA</h1>
        </SwiperSlide>
        <SwiperSlide><img src={slide3} alt="" />
        <h1 className="text-4xl font-bold text-center -mt-16 text-white">SOUPs</h1>
        </SwiperSlide>
        <SwiperSlide><img src={slide4} alt="" />
        <h1 className="text-4xl font-bold text-center -mt-16 text-white">DESERT</h1>
        </SwiperSlide>
        <SwiperSlide><img src={slide5} alt="" />
        <h1 className="text-4xl font-bold text-center -mt-16 text-white">SALADS</h1>
        </SwiperSlide>
      </Swiper>
             </div>    
        
    );
};

export default Category;