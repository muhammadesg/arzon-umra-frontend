import React from 'react';
import styles from "./PackagesBanner.module.scss";
import { MainBanner } from '@/features/Home';
import { SlidersInterface } from '@/features/Home/Types';

interface Props {
  data: SlidersInterface[];
}

const PackagesBanner = ({data}: Props) => {
  return (
    <div className={styles.package_banner}>
      <h2  className={`${styles.package_banner__title} container`}>Umra to’plamlari</h2>
      <MainBanner data={data}/>
    </div>
  )
}

export default PackagesBanner