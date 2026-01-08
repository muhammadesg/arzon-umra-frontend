import { EconomicBanner, EconomicHotel } from '@/features/Economic'
import { TravelPackageInterface } from '@/features/Economic/Types';
import EconomicAdvantage from '@/features/Economic/components/EconomicAdvantage'
import { API } from '@/services/api'
import { GetServerSidePropsContext } from 'next';
import React from 'react';

interface Props {
  economicData: TravelPackageInterface;
}

const EconomicDetail = ({ economicData }:Props) => {
  return (
    <div>
      <EconomicBanner data={economicData}/>
      <EconomicHotel data={economicData}/>
      <EconomicAdvantage data={economicData}/>
    </div>
  )
}

export default EconomicDetail

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  try {
    const { id } = context.query;

    if (typeof id !== "string") {
      return { notFound: true };
    }

    const numericId = parseInt(id, 10);

    if (isNaN(numericId)) {
      return { notFound: true };
    }

    const EconomicDetailResponse = await API.getEconomicDetail(numericId);
    const SiteSettingsResponse = await API.getSettings();

    return {
      props: {
        economicData: EconomicDetailResponse || [],
        siteSettings: SiteSettingsResponse[0],
      },
    };
  } catch (error: unknown) {
    console.error(
      "Error fetching data:",
      error instanceof Error ? error.message : "Unknown error"
    );

    return {
      props: {
        economicData: [],
        siteSettings: null,
      },
    };
  }
};