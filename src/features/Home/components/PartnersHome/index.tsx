import React from "react";
import styles from "./PartnersHome.module.scss";
import Image from "next/image";
import { BrandsInterface } from "../../Types";
import { BASE_URL_IMAGES } from "@/services/api";

interface Props {
  data: BrandsInterface[];
}

const PartnersHome = ({ data }: Props) => {
  return (
    <div className={styles.partners} data-aos="fade-up">
      <div className={styles.marquee}>
        <div className={styles.marquee__inner}>
          {[...data, ...data].map((item, idx) => (
            <div className={styles.partners__card} key={idx}>
              <Image src={BASE_URL_IMAGES + item.image} alt="" width={100} height={50} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnersHome;
