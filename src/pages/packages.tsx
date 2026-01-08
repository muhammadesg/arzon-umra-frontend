import React from 'react'
import { PackagesBanner, PackagesCards } from '@/features/PackagesPage'
import { API } from '@/services/api';
import { SlidersInterface } from '@/features/Home/Types';
import { CardInterface } from '@/components/Types';
import { OptionsInterface } from '@/features/PackagesPage/Types';

interface Props {
  slidersData: SlidersInterface[];
  cardsData: CardInterface[];
  optionsData: OptionsInterface;
}

const Packages = ({ slidersData, cardsData, optionsData }:Props) => {
  return (
    <div>
      <PackagesBanner data={slidersData}/>
      <PackagesCards data={cardsData} optionsData={optionsData}/>
    </div>
  )
}

export default Packages

export const getServerSideProps = async () => {
  try {
    const SlidersResponse = await API.getHomeSliders();
    const CardsResponse = await API.getToursSearch();
    const OptionsResponse = await API.getPackages();
    const SiteSettingsResponse = await API.getSettings();

    return {
      props: {
        slidersData: SlidersResponse || [],
        cardsData: CardsResponse || [],
        optionsData: OptionsResponse || [],
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
        slidersData: [],
        cardsData: [],
        optionsData: [],
        siteSettings: null,
      },
    };
  }
};
