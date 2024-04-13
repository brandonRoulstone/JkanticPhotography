import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import videoShowcase from '../assets/BMW CAPE TOWN CITY SHOWCASE.mp4'
// import PropTypes from 'prop-types';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';
import { EffectCreative } from 'swiper/modules';

const CarouselComp = () => {
  return (
    <>

<Swiper
        grabCursor={true}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        loop={true}
        modules={[EffectCreative, Pagination, Navigation]}
        className="mySwiper my-3"
      >
        <SwiperSlide className='slide'>
          <div id='textOver' className='display-4'>
            <div className='container'>
              Brand Marketing
              <p className='small fs-5 px-3' id='shrinkTxt'>
                Elevate your brand with captivating advertising content by JKantic.
              </p>
            </div>
            <div className='d-flex justify-content-center my-2'>
              <a href="#Reviews" className="btn text-white">
               Client Reviews
              </a>
            </div>
            </div>
          <img id='fluidImg' className='img-fluid img rounded-4' src="https://cdn-images.imagevenue.com/41/12/b8/ME182C58_o.jpg" alt="IMG-20240410-WA0023.jpg" loading='lazy'/>
        </SwiperSlide>
        <SwiperSlide className='slide'>
          <div id='textOver' className='display-4'>
            <div className='container'>
              Photography
              <p className="small fs-5 px-3" id='shrinkTxt'>
                Stunning photography services tailored for your brand's visual identity.
              </p>
            </div>
            <div className='d-flex justify-content-center my-2'>
              <a href="#Reviews" className="btn text-white">
               Client Reviews
              </a>
            </div>
            </div>
          <img id='fluidImg' className='img-fluid img rounded-4' src="https://cdn-images.imagevenue.com/bf/44/a8/ME182C6W_o.jpg" alt="IMG-20240410-WA0028.jpg" loading='lazy'/>
        </SwiperSlide>
        <SwiperSlide className='slide'>
          <div id='textOver' className='display-4'>
            <div className='container text-black'>
             Marketing Excellence
              <p className="small fs-5 px-3" id='shrinkTxt'>
                Elevating brands through innovative marketing and social solutions.
              </p>
            </div>
            <div className='d-flex justify-content-center my-2'>
             <a href="#Reviews" className="btn text-white">
               Client Reviews
              </a>
            </div>
            </div>
          <img id='fluidImg' className='img-fluid img rounded-4' src="https://cdn-images.imagevenue.com/08/df/ca/ME182DD7_o.jpg" alt="IMG-20240410-WA0003.jpg" loading='lazy'/>
        </SwiperSlide>
        <SwiperSlide className='slide'>
          <div id='textOver' className='display-4'>
            <div className='container'>
             Videography
             <p className="small fs-5 px-3" id='shrinkTxt'>
              Dynamic videography to showcase your brand's story and products.
             </p>
            </div>
            <div className='d-flex justify-content-center my-2'>
              <a href="#Reviews" className="btn text-white">
               Client Reviews
              </a>
            </div>
          </div>
          <video
          autoplay              
          loop
          controls                      
          muted       
          className="embed-responsive embed-responsive-16by9"
          id="fluidvid"                
          src={videoShowcase}
          ></video>
        </SwiperSlide>
      </Swiper>
      
    </>
  )
}

// CarouselComp.propTypes = {
//     CHeading: PropTypes.string.isRequired,
//     CText: PropTypes.string.isRequired,
//     CImg: PropTypes.string.isRequired
// }

export default CarouselComp
