import React from 'react'
import styles from "./EconomicHotel.module.scss"
import Rating from '../Rating';
import { TravelPackageInterface } from '../../Types';
import { BASE_URL_IMAGES } from '@/services/api';

interface Props {
    data: TravelPackageInterface;
}

const EconomicHotel = ({ data }: Props) => {
  return (
    <div className={styles.economic_hotel}>
        <div className={`${styles.economic_hotel__inner} container`}>
            <h2 className={styles.economic_hotel__title} data-aos="fade-up">Mehmonxona</h2>

            <div className={styles.economic_hotel__banners}>
                <div className={styles.economic_hotel__left}>
                    <h2 data-aos="fade-up">
                        {data?.hotel_name} 
                        <span> (haramdan {data?.hotel_distance} metr)</span>
                    </h2>

                    <Rating initialRating={data?.hotel_star_count}/>

                    <p data-aos="fade-up">{data?.hotel_info}</p>
                </div>

                <div className={styles.economic_hotel__right}>
                    <div>
                        <img data-aos="fade-up" src={BASE_URL_IMAGES + data?.hotel_image1} alt=""/>
                        <img data-aos="fade-up" src={BASE_URL_IMAGES + data?.hotel_image2} alt=""/>
                    </div>
                    <img className={styles.economic_hotel__right_big} data-aos="fade-up" src={BASE_URL_IMAGES + data?.hotel_image3} alt=""/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EconomicHotel