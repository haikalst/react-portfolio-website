import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/profile1.png";
import AVTR2 from "../../assets/profile2.png";
import AVTR3 from "../../assets/profile3.png";
import AVTR4 from "../../assets/profile4.png";
import AVTR5 from "../../assets/profile5.png";
import AVTR6 from "../../assets/profile6.png";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Luis Diaz",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam doloribus, repudiandae suscipit error tempore, iste recusandae beatae dolor nulla non, nemo est!",
  },
  {
    avatar: AVTR2,
    name: "Sadio Mane",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam doloribus, repudiandae suscipit error tempore, iste recusandae beatae dolor nulla non, nemo est!",
  },
  {
    avatar: AVTR3,
    name: "Mohammed Salah",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam doloribus, repudiandae suscipit error tempore, iste recusandae beatae dolor nulla non, nemo est!",
  },
  {
    avatar: AVTR4,
    name: "Diogo Jota",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam doloribus, repudiandae suscipit error tempore, iste recusandae beatae dolor nulla non, nemo est!",
  },
  {
    avatar: AVTR5,
    name: "Roberto Firmino",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam doloribus, repudiandae suscipit error tempore, iste recusandae beatae dolor nulla non, nemo est!",
  },
  {
    avatar: AVTR6,
    name: "Divock Origi",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam doloribus, repudiandae suscipit error tempore, iste recusandae beatae dolor nulla non, nemo est!",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Pendapat dari Klien Kami</h5>
      <h2>Testimonial</h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt={name} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
