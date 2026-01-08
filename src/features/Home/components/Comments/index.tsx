import React, { useState } from 'react';
import styles from "./Comments.module.scss";
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import { CommentsInterface } from '../../Types';
import { BASE_URL_IMAGES } from '@/services/api';
import { ArrowMore } from '@/assets/icons';
interface Props {
    data: CommentsInterface[];
}

const Comments = ({ data }:Props) => {
    const [expandedComments, setExpandedComments] = useState<{ [key: number]: boolean }>({});

    const toggleExpand = (idx: number) => {
        setExpandedComments((prev) => ({
        ...prev,
        [idx]: !prev[idx],
        }));
    };

    const MAX_LENGTH = 150;
  return (
    <div className={styles.comments}>
        <div className={`${styles.comments__inner} container`}>
            <h2 className={styles.comments__logo} data-aos="fade-up">Fikir va mulohazalar</h2>

            <Swiper
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 200000,
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
                modules={[Autoplay]}
            >
                {
                   Array.isArray(data) && data.map((item, idx) => (
                    <SwiperSlide key={idx}>
                        <div className={styles.comments__card} data-aos="fade-up" data-aos-delay={idx * 100}>
                            <div className={styles.comments__card_profile}>
                                <Image 
                                    src={BASE_URL_IMAGES + item.image} 
                                    alt=""
                                    width={100} height={50}
                                />

                                <h2>{item.name}</h2>
                            </div>

                            <p>
                            {item.comment.length > MAX_LENGTH
                                ? expandedComments[idx]
                                ? item.comment
                                : item.comment.slice(0, MAX_LENGTH) + "..."
                                : item.comment}
                                {item.comment.length > MAX_LENGTH && (
                                    <button onClick={() => toggleExpand(idx)} className={styles.more_button}>
                                        {expandedComments[idx] ? "Yopish" : "Ko’proq"}
                                        <Image src={ArrowMore} alt=""/>
                                    </button>
                                )}
                            </p>
                        </div>
                    </SwiperSlide>
                   )) 
                }
            </Swiper>
        </div>
    </div>
  )
}

export default Comments