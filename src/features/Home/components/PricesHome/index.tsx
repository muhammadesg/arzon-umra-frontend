import React from 'react';
import styles from "./PricesHome.module.scss";
import Card from '@/components/Card';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Navigation } from 'swiper/modules';
import Image from 'next/image';
import { NextBtn, PrevBtn } from '@/assets/icons';
import { CardInterface } from '@/components/Types';

interface Props {
  data: CardInterface[];
}

const PricesHome = ({data}: Props) => {
  return (
    <div className={styles.prices}>
      <div className={`${styles.prices__inner} container`}>
        <h2 className={styles.prices__title} data-aos="fade-up">Umra safari tariflari</h2>

        <div className={styles.prices__swiper}>
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              450: {
                spaceBetween: 20,
                slidesPerView: 2,
              },
              1050: {
                slidesPerView: 3,
              },
            }}
            loop={true}
            navigation={{
              nextEl: `.next-btn`,
              prevEl: `.prev-btn`,
            }}
            modules={[Autoplay, Navigation]}
          >
            {
              Array.isArray(data) && data.map((item, idx) =>(
                <SwiperSlide key={idx}>
                  <Card data={item}/>
                </SwiperSlide>
              ))
            }
          </Swiper>
          <button className={`${styles.prices__prev} prev-btn`}>
            <Image src={PrevBtn} alt=""/>
          </button>
          <button className={`${styles.prices__next} next-btn`}>
            <Image src={NextBtn} alt=""/>
          </button>
        </div>
      </div>
    </div>
  )
}

export default PricesHome