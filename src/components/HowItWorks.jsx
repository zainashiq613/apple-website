import { useGSAP } from '@gsap/react';
import { chipImg, frameImg, frameVideo } from '../utils/utils';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

function HowItWorks() {
  useGSAP(() => {
    gsap.from('#chip', {
      scrollTrigger: {
        trigger: '#chip',
        start: '20% bottom ',
      },
      opacity: 0,
      scale: 2,
      duration: 2,
      ease: 'power2.inOut',
    });
    gsap.to('.g-fade-in', {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.inOut',
    });
  }, []);

  //   const videoRef = useRef();

  return (
    <section className="sm:py-32 py-20 sm:px-10 px-5">
      <div className="screen-max-width">
        <div id="chip" className="flex items-center justify-center w-full my-20">
          <img src={chipImg} alt="chip" width={180} height={180} />
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-4xl md:text-7xl font-semibold text-center" id="hiw-title">
            A17 Pro chip <br />A monster win for gaming
          </h2>
          <p className="text-gray-500 font-semibold text-xl md:text-2xl py-10 text-center">
            The biggest redesign in the history of Apple GPU's.
          </p>
        </div>
        <div className="mt-10 md:mt-20 mb-14">
          <div className="relative h-full flex items-center justify-center">
            <div className="overflow-hidden">
              <img src={frameImg} alt="frame" className="bg-transparent relative z-10" />
            </div>
            <div className="absolute w-[95%] h-[90%] rounded-[56px] overflow-hidden">
              <video
                className="pointer-events-none"
                playsInline
                preload="none"
                muted
                autoPlay
                // ref={videoRef}
              >
                <source src={frameVideo} type="video/mp4" />
              </video>
            </div>
          </div>
          <p className="text-gray-500 text-center font-semibold mt-3">Honkai: Star Rail</p>
        </div>
        <div className="flex md:flex-row flex-col justify-between items-start gap-24">
          <div className="flex flex-col justify-center flex-1">
            <p className="text-gray-500 text-xl opacity-0 translate-y-[100px] font-normal md:font-semibold g-fade-in">
              A17 Pro is an entirely new class of iPhone chip that delivers our{' '}
              <span className="text-white">best graphic performance by far</span>
            </p>
            <div className="flex flex-1 justify-center flex-col opacity-0 translate-y-[100px] g-fade-in">
              <p className="text-gray-500 text-xl font-normal md:font-semibold opacity-0 translate-y-[100px] g-fade-in">
                Mobile <span className="text-white">games will look and feel so immersive</span>,
                with incredibly detailed environment and characters
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center flex-1">
            <p className="text-gray text-xl font-normal md:font-semibold">New</p>
            <p className="text-white text-3xl md:text-5xl font-normal md:font-semibold my-2">
              Pro-Class GPU
            </p>
            <p className="text-gray text-xl font-normal md:font-semibold">with 6 cores</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
