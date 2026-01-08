import React from 'react'
import styles from "./MainBanner.module.scss"
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import Link from 'next/link';
import { SlidersInterface } from '../../Types';
import { BASE_URL_IMAGES } from '@/services/api';

interface Props {
    data: SlidersInterface[];
}

const MainBanner = ({ data }:Props) => {
  return (
    <div className={styles.mainbanner}>
        <div className={`${styles.mainbanner__inner} container`}>
            <Swiper
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                modules={[Pagination, Autoplay]}
                className="mainbanner-swiper"
            >
                {
                   Array.isArray(data) && data.map((item, idx) => (
                    <SwiperSlide key={idx}>
                        <div className={styles.mainbanner__banner}>
                            <div className={styles.mainbanner__left}>
                                <div className={styles.mainbanner__logo} data-aos="fade-up" data-aos-delay={100}>
                                    <Image width={1000} height={1000} src={BASE_URL_IMAGES + item?.company_logo} alt=""/>
                                </div>
                                <h1 data-aos="fade-up" data-aos-delay={200} className={styles.mainbanner__title}>{item?.title}</h1>
                                <p data-aos="fade-up" data-aos-delay={300} className={styles.mainbanner__desc}>
                                    {item.description.length > 180 ? item.description.slice(0, 180) + "..." : item.description}
                                </p>

                                <Link href={`/economic/${item?.id}`} className={styles.mainbanner__btn}>Batafsil</Link>
                            </div>

                            <div className={styles.mainbanner__right}>
                                <Image data-aos="fade-up" data-aos-delay={400} width={1000} height={1000} src={BASE_URL_IMAGES + item?.image} alt=""/>
                            </div>
                        </div>
                    </SwiperSlide>
                   )) 
                }
            </Swiper>
        </div>
    </div>
  )
}

export default MainBanner