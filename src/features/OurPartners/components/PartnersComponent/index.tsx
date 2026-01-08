import React from "react";
import styles from "./OurPartners.module.scss";
import Image from "next/image";
import { BrandsInterface } from "@/features/Home/Types";
import { BASE_URL_IMAGES } from "@/services/api";

interface Props {
  data: BrandsInterface[];
}

const PartnersComponent = ({ data }: Props) => {
  return (
    <div className={styles.partners}>
      <div className={`${styles.partners} container`}>
        <h2 className={styles.partners__title} data-aos="fade-up">Bizning hamkorlar</h2>

        <div className={styles.partners__cards}>
          {data.map((item, idx) => (
            <div key={idx} className={styles.partners__card} data-aos="fade-up"
            data-aos-delay={idx * 100}>
              <Image src={BASE_URL_IMAGES + item.image} alt="" width={100} height={50}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnersComponent;
