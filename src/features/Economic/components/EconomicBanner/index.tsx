import React from 'react';
import styles from "./EconomicBanner.module.scss";
import Image from 'next/image';
import { EconomicInnerImg, MainBannerLogo } from '@/assets/images';
import { TravelPackageInterface } from '../../Types';
import { BASE_URL_IMAGES } from '@/services/api';
import { CardImg1, ConditionIcon1, ConditionIcon2, ConditionIcon3, ConditionIcon4, ConditionIcon5 } from "@/assets/icons";

interface Props {
    data: TravelPackageInterface;
}

const EconomicBanner = ({ data }: Props) => {
    const pilgrimageData = [
        {
            title: "Davomiyligi",
            text: `${data?.total_duration} kun`,
            image: CardImg1,
        },
        {
            title: "Ziyorat davri",
            text: `${data?.departure_time} - ${data?.arrival_time}`,
            image: ConditionIcon1,
        },
        {
            title: "Viza turi",
            text: data?.visa_type,
            image: ConditionIcon2,
        },
        {
            title: "Ekskursiya",
            text: `${data?.origin_city} - ${data?.destination_city} - ${data?.stopover_cities}`,
            image: ConditionIcon3,
        },
        {
            title: "Taomlanish",
            text: data?.food,
            image: ConditionIcon4,
        },
        {
            title: "Tibbiyot xizmati",
            text: data?.ambulance,
            image: ConditionIcon5,
        },
        {
            title: "Transport",
            text: data?.taxi_service,
            image: ConditionIcon5,
        },
        {
            title: "Sovg’alar",
            text: data?.gift,
            image: ConditionIcon2,
        },
    ]
  return (
    <div className={styles.economic}>
        <div className={`${styles.economic__inner} container`}>
            <div className={styles.economic__banner}>
                <div className={styles.economic__banner_mb}>
                    <Image src={MainBannerLogo} alt="" width={1000} height={1000}/>
                    <p>{data?.ticket_type}</p>
                </div>
                <Image data-aos="fade-up" className={styles.economic__banner_img} src={BASE_URL_IMAGES + data?.photo} alt="" width={1000} height={1000}/>

                <h2 data-aos="fade-up" data-aos-delay={200}>
                    {data?.ticket_type}
                    <span>{data?.price} dollar</span>
                </h2>

                <div className={styles.economic__banner_top}>
                    <Image data-aos="fade-up" data-aos-delay={100} src={BASE_URL_IMAGES + data?.company_photo} alt="" width={1000} height={1000}/>
                    <Image data-aos="fade-up" data-aos-delay={100} src={BASE_URL_IMAGES + data?.avia_photo} alt="" width={1000} height={1000}/>
                </div>

                <Image data-aos="fade-up" className={styles.economic__banner_inner} src={EconomicInnerImg} alt=""/>
            </div>

            <h1 className={styles.economic__title} data-aos="fade-up">Umra ziyorati - Madina - Makka</h1>

            <div className={styles.economic__cards}>
                {
                    pilgrimageData.map((item, idx) => (
                        <div data-aos="fade-up" data-aos-delay={idx + 100} key={idx} className={styles.economic__card}>
                            <div className={styles.economic__card_img}>
                                <Image src={item.image} alt="img"/>
                            </div>
                            <div className={styles.economic__card_text}>
                                <h2>{item.title}</h2>
                                <p>{item.text}</p>
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className={styles.economic__desc}>
                <h2 data-aos="fade-up">Ziyorat haqida</h2>

                <p data-aos="fade-up">{data?.package_info}</p>
            </div>
        </div>
    </div>
  )
}

export default EconomicBanner