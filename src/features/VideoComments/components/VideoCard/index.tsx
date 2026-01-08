import React from 'react';
import styles from "./VideoCard.module.scss";
import Image from 'next/image';
import { VideoIcon } from '@/assets/icons';
import { VideosInterface } from '../../Types';

interface Props {
  data: VideosInterface;
  onOpen: () => void;
  index: number;
}

const VideoCard = ({ data, onOpen, index }: Props) => {
  const getYouTubeId = (url: string) => {
    return url.split("/").pop()?.split("?")[0] || ""; 
  };
  
  const videoId = getYouTubeId(data.video_link);
  return (
    <>
      <div className={styles.videocard} onClick={onOpen} data-aos="fade-up"
        data-aos-delay={index * 100}>
        <Image className={styles.videocard__image} src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`} alt="Thumbnail" width={300} height={200} />
        <Image className={styles.videocard__icon} src={VideoIcon} alt="Play Icon" width={50} height={50} />
      </div>
    </>
  );
};

export default VideoCard;
