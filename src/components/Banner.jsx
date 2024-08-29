
import { useState } from 'react';
import '../styles/Banner.css';

const videos = [
  "/assets/aaa.mp4", 
  "/assets/vvv.mp4"
];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className='banner'>
      <div className='video-container'>
        <video key={currentIndex} autoPlay loop muted>
          <source src={videos[currentIndex]} type='video/mp4' />
        </video>
      </div>
      <div className='dots'>
        {videos.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentIndex === index ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Banner;
