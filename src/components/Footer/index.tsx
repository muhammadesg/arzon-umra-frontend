import React from 'react';
import styles from "./Footer.module.scss";
import Link from 'next/link';
import { footlinks } from "@/constants/footerLinks";
import Image from 'next/image';
import { ClickImage, HumoImage, NavbarMobileLogo, PaymeImage, UzcardImage } from '@/assets/images';
import { CallIcon, FaceBookIcon, InstagramIcon, LocationIcon, SmsIcon, TelegramIcon, YoutubeIcon } from '@/assets/icons';
import { SiteSettingsInterface } from '../Types';

interface Props {
    data: SiteSettingsInterface;
}

const Footer = ({ data }: Props) => {
  return (
    <div className={styles.footer}>
        <div className={`${styles.footer__inner} container`}>
            <div className={styles.footer__contact}>
                <Image className={styles.footer__logo} src={NavbarMobileLogo} alt=""/>
                <div className={styles.footer__contact_item}>
                    <Image src={LocationIcon} alt=""/>
                    <p>{data?.address}</p>
                </div>
                <div className={styles.footer__contact_item}>
                    <Image src={SmsIcon} alt=""/>
                    <p>{data?.email}</p>
                </div>
                <Link href="tel:+998883174774" className={styles.footer__contact_item}>
                    <Image src={CallIcon} alt=""/>
                    <span>{data?.phone}</span>
                </Link>
            </div>

            <div className={styles.footer__routes}>
                <h2>Xarita</h2>

                {
                    footlinks.map((item, idx) => (
                        <Link key={idx} href={item.link}>{item.text}</Link>
                    ))
                }
            </div>

            <div className={styles.footer__feedback}>
                <h2>Bizni kuzatib boring</h2>

                <div>
                    {data?.facebook_link && (
                        <Link href={data.facebook_link} target='_blank' rel="noopener noreferrer">
                            <Image src={FaceBookIcon} alt="Facebook" />
                        </Link>
                    )}
                    {data?.instagram_link && (
                        <Link href={data.instagram_link} target='_blank' rel="noopener noreferrer">
                            <Image src={InstagramIcon} alt="Instagram" />
                        </Link>
                    )}
                    {data?.youtube_link && (
                        <Link href={data.youtube_link} target='_blank' rel="noopener noreferrer">
                            <Image src={YoutubeIcon} alt="YouTube" />
                        </Link>
                    )}
                    {data?.telegram_link && (
                        <Link href={data.telegram_link} target='_blank' rel="noopener noreferrer">
                            <Image src={TelegramIcon} alt="Telegram" />
                        </Link>
                    )}
                </div>
            </div>

            <div className={styles.footer__pay}>
                <h2>To’lov usuli</h2>

                <div>
                    <Image src={ClickImage} alt=""/>
                    <Image src={PaymeImage} alt=""/>
                    <Image src={HumoImage} alt=""/>
                    <Image src={UzcardImage} alt=""/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer