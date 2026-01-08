import React from 'react'
import styles from "./AboutBanner.module.scss"
import Image from 'next/image'
import { AboutBannerImg } from '@/assets/images'
import { Collapse } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { AboutsInterface } from '@/features/Home/Types';

const { Panel } = Collapse;

interface Props {
    data: AboutsInterface;
}

const AboutBanner = ({ data }: Props) => {
    return (
        <div className={styles.about}>
            <div className={`${styles.about__inner} container`}>
                <div className={styles.about__banner} data-aos="fade-up">
                    <Image src={AboutBannerImg} alt="img" />
                </div>

                <div className={styles.about__desc}>
                    <div className={styles.about__left}>
                        <h2 data-aos="fade-up">Biz haqimizda</h2>

                        <p data-aos="fade-up">{data?.info}</p>
                    </div>

                    <div className={styles.about__right}>
                        <Collapse
                        data-aos="fade-up"
                            className={styles.about__collapse}
                            accordion
                            expandIcon={({ isActive }) => <PlusOutlined rotate={isActive ? 45 : 0} />}
                            expandIconPosition="end"
                        >
                            <Panel header="Maqsadimiz" key="1">
                                <p className={styles.about__collapse_text}>{data?.goal_info}</p>
                            </Panel>
                            <Panel header="Avzalliklarimiz" key="2">
                                <p className={styles.about__collapse_text}>{data?.advantages_info}</p>
                            </Panel>
                            <Panel header="Tariximiz" key="3">
                                <p className={styles.about__collapse_text}>{data?.story_info}</p>
                            </Panel>
                        </Collapse>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutBanner