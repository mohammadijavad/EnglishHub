import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative } from 'swiper/modules';
import { EffectCards } from 'swiper/modules';
import { comments } from '../constants/Comments';
export default function SimpleSlider() {
  return (
    <div>
      <Swiper
        // grabCursor={true}
        // effect={'creative'}
        // creativeEffect={{
        //   prev: {
        //     shadow: true,
        //     translate: [0, 0, -400],
        //   },
        //   next: {
        //     translate: ['-100%', 0, 0],
        //   },
        // }}
        // modules={[EffectCreative]}
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper !w-full  !m-0 !mt-10  !p-[8px] !rounded-md md:!h-[300px]"
      >
        <SwiperSlide className="rounded-md border  !bg-[#fff] border-BrightPurple !text-black !p-2">
          Slide 1
        </SwiperSlide>
        <SwiperSlide className="rounded-md border  !bg-[#fff] border-BrightPurple !text-black !p-2">
          Slide 2
        </SwiperSlide>
        <SwiperSlide className="rounded-md border  !bg-[#fff] border-BrightPurple !text-black !p-2">
          Slide 3
        </SwiperSlide>
        <SwiperSlide className="rounded-md border  !bg-[#fff] border-BrightPurple !text-black !p-2">
          Slide 4
        </SwiperSlide>
        <SwiperSlide className="rounded-md border  !bg-[#fff] border-BrightPurple !text-black !p-2">
          Slide 5
        </SwiperSlide>
        <SwiperSlide className="rounded-md border  !bg-[#fff] border-BrightPurple !text-black !p-2">
          Slide 6
        </SwiperSlide>
        <SwiperSlide className="rounded-md border  !bg-[#fff] border-BrightPurple !text-black !p-2">
          Slide 7
        </SwiperSlide>
        <SwiperSlide className="rounded-md border  !bg-[#fff] border-BrightPurple !text-black !p-2">
          Slide 8
        </SwiperSlide>
        <SwiperSlide className="rounded-md border  !bg-[#fff] border-BrightPurple !text-black !p-2">
          Slide 9
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
