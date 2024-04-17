import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

// import required modules
import { EffectCards } from 'swiper/modules';

const GalleryCarousel = () => {
  return (
    <>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
            <SwiperSlide data-slide>

                <img src="https://cdn-images.imagevenue.com/c9/e9/93/ME182OHL_o.jpg" alt="" className="img img-fluid" id="img" />

            </SwiperSlide>
            <SwiperSlide data-slide>

                <img src="https://cdn-images.imagevenue.com/41/12/b8/ME182C58_o.jpg" alt="" className="img img-fluid" id="img" />

            </SwiperSlide>
            <SwiperSlide data-slide>

                <img src="https://cdn-images.imagevenue.com/bf/44/a8/ME182C6W_o.jpg" alt="" className="img img-fluid" id="img" />

            </SwiperSlide>
            <SwiperSlide data-slide>

                <img src="https://cdn-images.imagevenue.com/08/df/ca/ME182DD7_o.jpg" alt="" className="img img-fluid" id="img" />

            </SwiperSlide>
            {/* <SwiperSlide data-slide>
                <img src="https://cdn-images.imagevenue.com/c9/e9/93/ME182OHL_o.jpg" alt="" className="img img-fluid" id="img" />

            </SwiperSlide>
            <SwiperSlide data-slide>

                <img src="https://cdn-images.imagevenue.com/c9/e9/93/ME182OHL_o.jpg" alt="" className="img img-fluid" id="img" />

            </SwiperSlide>
            <SwiperSlide data-slide>

                <img src="https://cdn-images.imagevenue.com/c9/e9/93/ME182OHL_o.jpg" alt="" className="img img-fluid" id="img" />

            </SwiperSlide>
            <SwiperSlide data-slide>

                <img src="https://cdn-images.imagevenue.com/c9/e9/93/ME182OHL_o.jpg" alt="" className="img img-fluid" id="img" />

            </SwiperSlide>
            <SwiperSlide data-slide>

                <img src="https://cdn-images.imagevenue.com/c9/e9/93/ME182OHL_o.jpg" alt="" className="img img-fluid" id="img" />

            </SwiperSlide> */}
      </Swiper>
    </>
  )
}

export default GalleryCarousel
