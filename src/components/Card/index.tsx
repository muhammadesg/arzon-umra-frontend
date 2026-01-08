import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from "./Card.module.scss";
import { CardInterface } from '../Types';
import { CardIcon } from '@/assets/icons';
import { BASE_URL_IMAGES } from '@/services/api';
import Link from 'next/link';

interface CardProps {
    data: CardInterface;
}

const Card = ({ data }: CardProps) => {
    const totalSeats = 7;
    const occupiedSeats = 3;
    const [currentFill, setCurrentFill] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (currentFill < occupiedSeats) {
                setCurrentFill(prev => Math.min(prev + 1, occupiedSeats));
            } else {
                clearInterval(interval);
            }
        }, 1000 / occupiedSeats);

        return () => clearInterval(interval);
    }, [currentFill, occupiedSeats]);

    const percentage = (currentFill / totalSeats) * 100;

  return (
    <div className={styles.card} data-aos="fade-up">
        <div className={styles.card__top}>
            <img src={BASE_URL_IMAGES + data.brand_logo1} alt=""/>
            <img src={BASE_URL_IMAGES + data.brand_logo2} alt=""/>
        </div>

        <div className={styles.card__image}>
            <Image src={BASE_URL_IMAGES + data.image} alt="" width={1000} height={1000}/>
        </div>

        <h2 className={styles.card__title}>{data.title}</h2>

        <div className={styles.card__locals}>
            <p>{data.locals[0]}</p>
            <p>{data.locals[1]}</p>
            <p>{data.locals[2]}</p>
        </div>

        <div className={styles.card__plane}>
            <Image src={CardIcon} alt=""/>
        </div>

        <div className={styles.card__date}>
            <p>{data.date_start}</p>
            <p>{data.date_end}</p>
        </div>

        <div className={styles.card__deadline}>
            <p>{data.count} seats left</p>
            <div className={styles.card__progress}>
                <div className={styles.card__progress_bar} style={{ width: `${percentage}%` }}></div>
                {/* <div className="seats-label">{occupiedSeats}/{totalSeats} Seats Occupied</div> */}
            </div>
        </div>

        <p className={styles.card__price}><span>From</span> {data.price}$</p>

        <div className={styles.card__btn}>
            <Link href={`/economic/${data.id}`}>More</Link>
        </div>
    </div>
  )
}

export default Card