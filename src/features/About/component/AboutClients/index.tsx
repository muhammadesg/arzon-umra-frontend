import React from 'react';
import styles from "./AboutClients.module.scss";
import PartnersHome from '@/features/Home/components/PartnersHome';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from '@/assets/icons';
import { BrandsInterface } from '@/features/Home/Types';

interface Props {
    data: BrandsInterface[]
}

const AboutClients = ({ data }:Props) => {
  return (
    <div className={styles.about_client}>
        <div className={`${styles.about_client__inner} container`}>
            <div className={styles.about_client__title} data-aos="fade-up">
                <Link
                    href="/ourpartners"
                >
                    Bizning hamkorlarimiz
                </Link>
                <Image src={ArrowRight} alt=""/>
            </div>
            <PartnersHome data={data}/>
        </div>
    </div>
  )
}

export default AboutClients