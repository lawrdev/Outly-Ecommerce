import { useState } from "react";
import ImageOne from "../assets/images/refresh_your_space.jpg";
import ImageTwo from "../assets/images/shop_toys_games.jpg";
import ImageThree from "../assets/images/beauty_section.jpg";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

function SwiperHome() {
  let imgArray: string[] = [ImageOne, ImageTwo, ImageThree];

  return (
    <div className="block mt-16 sm:mt-0">
      <Swiper
        // spaceBetween={30}
        effect={"fade"}
        modules={[EffectFade, Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        // onSlideChange={(): void => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {imgArray.map((img: string, index: number) => (
          <SwiperSlide key={index}>
            {/* <div
                        style={{
                            background: `url(${img}) center top no-repeat`,
                            backgroundSize: 'cover',
                            // padding: '220px',
                            // objectFit: 'cover'
                        }}
                        className='py-56'
                    ></div> */}

            <div
              className="bg-red-200"
              style={{ maxHeight: "270px", height: "270px", width: "100%" }}
            >
              <img
                src={img}
                alt="products available"
                style={{
                  objectFit: "cover",
                  height: "100%",
                  width: "100%",
                  objectPosition: "top center",
                }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SwiperHome;
