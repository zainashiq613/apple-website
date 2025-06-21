import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { explore1Img, explore2Img, exploreVideo } from '../utils/utils';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

function Features() {
  const videoRef = useRef();
  useGSAP(() => {
    gsap.to('#feature-title', {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: '#feature-title',
        toggleActions: 'restart reverse restart reverse',
        start: 'top 85%',
      },
    });
    gsap.to('#feature-img', {
      scale: 1,
      opacity: 1,
      ease: 'power1.inOut',
      scrub: true,
    });
    gsap.to('#fexture-text', {
      y: 0,
      opacity: 1,
      ease: 'power2.inOut',
      duration: 1,
    });
  }, []);

  return (
    <section className="h-full sm:py-32 py-20 sm:px-10 px-5 bg-zinc-950 relative overflow-hidden">
      <div className="screen-max-width">
        <div className="mb-12 w-full">
          <h1
            id="feature-title"
            className="text-gray-500 lg:text-6xl md:text-5xl text-3xl lg:mb-0 mb-5 font-medium opacity-0 translate-y-20"
          >
            Explore the full story.
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center overflow-hidden">
          <div className="mt-32 mb-24 pl-24">
            <h2 className="text-5xl lg:text-7xl font-semibold">Iphone</h2>
            <h2 className="text-5xl lg:text-7xl font-semibold">Forged in Titanium</h2>
          </div>
          <div className="flex items-center justify-center flex-col sm:px-10">
            <div className="relative h-[50vh] w-full flex items-center">
              <video
                ref={videoRef}
                loop
                playsInline
                id="exploreVideo"
                className="w-full h-full object-cover object-center"
                preload="auto"
                muted
                autoPlay
              >
                <source src={exploreVideo} type="video/mp4" />
              </video>
            </div>
            <div className="flex flex-col w-full relative">
              <div className="w-full flex flex-col md:flex-row gap-5 items-center">
                <div className="overflow-hidden flex-1 h-[50vh]">
                  <img
                    id="feature-img"
                    src={explore1Img}
                    className="w-full h-full object-cover object-center scale-150 opacity-0 "
                    alt=""
                  />
                </div>
                <div className="overflow-hidden flex-1 h-[50vh]">
                  <img
                    id="feature-img"
                    src={explore2Img}
                    className="w-full h-full object-cover object-center scale-150 opacity-0 "
                    alt=""
                  />
                </div>
              </div>
              <div className="w-full flex items-center justify-center flex-col md:flex-row mt-10 md:mt-16 gap-5">
                <div className="flex items-center justify-center flex-1">
                  <p
                    id="fexture-text"
                    className="text-gray-500 max-w-md text-lg md:text-xl font-semibold opacity-0 translate-y-[100px]"
                  >
                    IPhone 15 pro is {''}
                    <span className="text-white">
                      the first iPhone to feature aerospace-titanium design
                    </span>
                    , using the same alloy that sapcecrafts use for missions to mars
                  </p>
                </div>
                <div className="flex items-center justify-center flex-1">
                  <p
                    id="fexture-text"
                    className="text-gray-500 max-w-md text-lg md:text-xl font-semibold opacity-0 translate-y-[100px]"
                  >
                    Titanium has one of the best strength‑to‑weight ratios of any metal, making
                    these our {''}
                    <span className="text-white">lightest Pro models ever</span>, . You’ll notice
                    the difference the moment you pick one up.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
