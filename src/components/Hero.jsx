import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { heroVideo, smallHeroVideo } from '../utils/utils';
import { useEffect, useState } from 'react';

function Hero() {
  const [videoSrc, setVideoSrc] = useState(window.innerWidth < 786 ? smallHeroVideo : heroVideo);
  const handleVideoSrc = () => {
    if (window.innerWidth < 786) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleVideoSrc);
    return () => {
      window.removeEventListener('resize', handleVideoSrc);
    };
  });

  useGSAP(() => {
    gsap.to('#hero', { opacity: 1, delay: 2 });
    gsap.to('#cta', { opacity: 1, delay: 2, y: -50 });
  }, []);
  return (
    <section className="w-full h-[calc(100vh-60px)] bg-black relative">
      <div className="h-5/6 w-full flex items-center justify-center flex-col">
        <p
          id="hero"
          className="text-center font-semibold text-3xl text-gray-100 opacity-0 max-md:mb-10"
        >
          IPhone 15 Pro
        </p>
        <div className="md:w-10/12 w-9/12">
          <video
            className="pointer-events-none"
            autoPlay
            muted
            playsInline={true}
            loop
            key={videoSrc}
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
        </div>
      </div>
      <div id="cta" className="flex flex-col items-center opacity-0 translate-y-40">
        <a
          href="#highlights"
          className="px-5 py-2 rounded-3xl bg-blue-500 my-5 hover:bg-transparent border border-transparent hover:border hover:text-blue hover:border-blue"
        >
          Buy
        </a>
        <p className="text-normal text-xl">From $199/month or $999</p>
      </div>
    </section>
  );
}

export default Hero;
