import { useState } from 'react';
import styles from "./VideoComponent.module.scss";
import VideoCard from '../VideoCard';
import { VideosInterface } from '../../Types';

interface Props {
  data: VideosInterface[];
}

const VideoComponent = ({ data }: Props) => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  return (
    <div className={styles.videos}>
        <div className={`${styles.videos__inner} container`}>
          <h2 className={styles.videos__title} data-aos="fade-up">Video sharxlar</h2>
          <div className={styles.videos__cards}>
            {
              data.map((item, idx) => (
                <VideoCard 
                  index={idx}
                  key={idx}
                  data={item}
                  onOpen={() => setActiveVideo(item.video_link)}
                />
              ))
            }
          </div>
            <div className={`${styles.modal} ${activeVideo && styles.active}`} onClick={() => setActiveVideo(null)}>
              <div className={styles.modal__content} onClick={(e) => e.stopPropagation()}>
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${activeVideo}`}
                  title="Video Player"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
                <button className={styles.modal__close} onClick={() => setActiveVideo(null)}>✖</button>
              </div>
            </div>
        </div>
    </div>
  )
}

export default VideoComponent