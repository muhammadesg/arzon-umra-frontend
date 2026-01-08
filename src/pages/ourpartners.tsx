import React from 'react';
import { PartnersComponent } from '@/features/OurPartners';
import { API } from '@/services/api';
import { BrandsInterface } from '@/features/Home/Types';

interface Props {
  brandsData: BrandsInterface[];
}

const OurPartners = ({ brandsData }: Props) => {
  return (
    <div>
      <PartnersComponent data={brandsData}/>
    </div>
  )
}

export default OurPartners

export const getServerSideProps = async () => {
  try {
    const BrandsResponse = await API.getHomeBrands();
    const SiteSettingsResponse = await API.getSettings();

    return {
      props: {
        brandsData: BrandsResponse || [],
        siteSettings: SiteSettingsResponse[0],
      },
    };
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error fetching data:", error.message);
    } else {
      console.error("An unknown error occurred");
    }
    return {
      props: {
        brandsData: [],
        siteSettings: null,
      },
    };
  }
};
