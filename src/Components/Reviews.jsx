import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [])
    return (
        <div className="my-16 mx-5">
 <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        
    {
        reviews.map(review=><SwiperSlide key={review._id}>
            
            <div className="text-center">
           <p>{review.details}</p>
           <h1 className="text-xl font-bold">{review.name}</h1>
            </div>

        </SwiperSlide>)
    }
      </Swiper>
        </div>
    );
};

export default Reviews;