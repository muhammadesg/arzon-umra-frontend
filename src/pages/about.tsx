import React from 'react';
import { AboutBanner, AboutClients, Statistics } from '@/features/About';
import { API } from '@/services/api';
import { AboutsInterface, BrandsInterface } from '@/features/Home/Types';

interface Props {
  brandsData: BrandsInterface[];
  aboutsData: AboutsInterface;
}

const About = ({ brandsData, aboutsData }: Props) => {
  return (
    <div>
      <AboutBanner data={aboutsData} />
      <Statistics data={aboutsData} />
      <AboutClients data={brandsData} />
    </div>
  )
}

export default About

export const getServerSideProps = async () => {
  try {
    const BrandsResponse = await API.getHomeBrands();
    const AboutsResponse = await API.getAbouts()
    const SiteSettingsResponse = await API.getSettings();

    return {
      props: {
        brandsData: BrandsResponse || [],
        aboutsData: AboutsResponse[0] || [],
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
        aboutsData: [],
        siteSettings: null,
      },
    };
  }
};
