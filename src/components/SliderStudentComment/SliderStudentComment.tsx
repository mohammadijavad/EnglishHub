import React from 'react';
import Slider from 'react-slick';
import { comments } from '../constants/Comments';
export default function SimpleSlider() {
  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '100px',
    slidesToShow: 3,
    slidesToScroll: 3,
    speed: 500,
    // nextArrow: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {comments.map((comment) => (
        <div key={comment.id} className="h-[200px]">
          <div className="p-2">
            <h1 className="text-center">{comment.name}</h1>
            <p className="text-sm text-justify leading-6">{comment.content}</p>
          </div>
          {/* <div className="absolute right-0 top-0"> */}
          <img src={comment.photo} alt="" className="abolute top-0" />
          {/* </div> */}
        </div>
      ))}
    </Slider>
  );
}
