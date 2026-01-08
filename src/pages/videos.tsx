import { VideoComponent } from '@/features/VideoComments'
import { VideosInterface } from '@/features/VideoComments/Types';
import { API } from '@/services/api'
import React from 'react'

interface Props {
  videosData: VideosInterface[];
}

const Videos = ({ videosData }:Props) => {
  return (
    <div>
      <VideoComponent data={videosData}/>
    </div>
  )
}

export default Videos

export const getServerSideProps = async () => {
  try {
    const VideosResponse = await API.getVideos();
    const SiteSettingsResponse = await API.getSettings();

    return {
      props: {
        videosData: VideosResponse || [],
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
        videosData: [],
        siteSettings: null,
      },
    };
  }
};
