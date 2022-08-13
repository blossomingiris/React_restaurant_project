import { images } from '../../constants'
import { SubHeading } from '../../components'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, EffectFade } from 'swiper'
import { useRef } from 'react'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import styles from './PrivateDining.module.css'

function PrivateDining() {
  return (
    <AnimationOnScroll animateIn='animate__fadeInLeftBig' duration='1.5'>
      <div className={`wrapper section_padding ${styles.wrapper_custom}`}>
        <div className='wrapper_info '>
          <SubHeading title='private dining' />
          <h2 className={`headtext ${styles.headtext_custom}`}>
            Enjoy special moments in our private dining space
          </h2>
          <div className={styles.private_dining_content}>
            <p className={`p_description ${styles.p_description_custom}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              earum at consequuntur fugit, aliquid nisi maiores quidem deserunt
              facere quod minima ad, dicta eum id animi porro asperiores
              pariatur neque! Obcaecati rerum non illo impedit repellendus quo,
              cumque voluptatum totam? Vero placeat doloremque quis sed ad
              praesentium, illo tempore iste officiis. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Natus animi doloremque officiis
              eius eveniet quae ratione alias. Vitae, dolore, debitis, eius
              fugiat libero nobis itaque tenetur dolorum perspiciatis quia nisi.
            </p>
          </div>
          <button className='btn_animated'>
            <span>Learn more</span>
          </button>
        </div>
        <div className={styles.wrapper_image_custom}>
          <Swiper
            modules={[Navigation, EffectFade, Autoplay]}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            navigation
            effect={'fade'}
            speed={800}
            slidesPerView={1}
            loop
            className={styles.my_swiper}
          >
            <SwiperSlide>
              <img
                src={images.slide01}
                alt='private dining'
                className={styles.swiper_slide}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={images.slide02}
                alt='private dining'
                className={styles.swiper_slide}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={images.slide03}
                alt='private dining'
                className={styles.swiper_slide}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={images.slide04}
                alt='private dining'
                className={styles.swiper_slide}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={images.slide05}
                alt='private dining'
                className={styles.swiper_slide}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </AnimationOnScroll>
  )
}

export default PrivateDining
