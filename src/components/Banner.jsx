import { useState, useEffect } from 'react';
import '../styles/Banner.css';

const videos = [
  "/assets/aaa.mp4", 
  "/assets/vvv.mp4"
];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const videoElement = document.querySelector('.video-container video');
    if (videoElement) {
      videoElement.play().catch(error => {
        // Manipule o erro de autoplay caso ocorra (por exemplo, usuário não permitiu o autoplay)
        console.log("Autoplay foi bloqueado", error);
      });
    }
  }, [currentIndex]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className='banner'>
      <div className='video-container'>
        <video 
          key={currentIndex} 
          autoPlay 
          loop 
          muted 
          playsInline 
          disablePictureInPicture 
          controls={false}
        >
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
