import { MainBanner, PricesHome } from "@/features/Home";
import Loader from "@/components/Loader";
import { API } from "@/services/api";
import dynamic from "next/dynamic";
import { BrandsInterface, CommentsInterface, SlidersInterface } from "@/features/Home/Types";
import { CardInterface } from "@/components/Types";

const Partners = dynamic(
  () => import("@/features/Home/components/PartnersHome"),
  { loading: () => <Loader isComponent={false} /> }
);

const Comments = dynamic(
  () => import("@/features/Home/components/Comments"),
  { loading: () => <Loader isComponent={false} /> }
);

interface Props {
  brandsData: BrandsInterface[];
  commentsData: CommentsInterface[];
  slidersData: SlidersInterface[];
  cardsData: CardInterface[];
}

export default function Home({ brandsData, commentsData, slidersData, cardsData }:Props) {
  return (
    <>
      <MainBanner data={slidersData}/>
      <Partners data={brandsData}/>
      <PricesHome data={cardsData}/>
      <Comments data={commentsData}/>
    </>
  );
}

export const getServerSideProps = async () => {
  try {
    const [
      BrandsResponse,
      CommentsResponse,
      SlidersResponse,
      CardsResponse,
      SiteSettingsResponse
    ] = await Promise.all([
      API.getHomeBrands(),
      API.getHomeComments(),
      API.getHomeSliders(),
      API.getHomeCards(),
      API.getSettings(),
    ]);

    return {
      props: {
        brandsData: BrandsResponse || [],
        commentsData: CommentsResponse || [],
        slidersData: SlidersResponse || [],
        cardsData: CardsResponse || [],
        siteSettings: SiteSettingsResponse[0],
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        brandsData: [],
        commentsData: [],
        slidersData: [],
        cardsData: [],
        siteSettings: null,
      },
    };
  }
};

