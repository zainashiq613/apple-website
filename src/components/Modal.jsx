// import * as THREE from 'three';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ModalView from './ModalView';
import { useEffect, useRef, useState } from 'react';
import { yellowImg } from '../utils/utils';
import * as three from 'three';
import { Canvas } from '@react-three/fiber';
import { View } from '@react-three/drei';
import modals, { sizes } from '../constraints';
import { animateWithGSAPTimeline } from '../utils/animations';

function Modal() {
  const [size, setSize] = useState('small');
  const [modal, setModal] = useState({
    title: 'iPhone 15 pro in natural titanium',
    color: ['#8f8a81', '#ffe7b9', '#6f6c64'],
    img: yellowImg,
  });

  const cameraControllSmall = useRef();
  const cameraControllLarge = useRef();

  const small = useRef(new three.Group());
  const large = useRef(new three.Group());

  const [samllRotation, setSmallRotation] = useState(0);
  const [largeRotation, setLargeRotation] = useState(0);

  const timeline = gsap.timeline();

  useEffect(() => {
    if (size === 'large') {
      animateWithGSAPTimeline(timeline, small, samllRotation, '#view1', '#view2', {
        transform: 'translateX(-100%)',
        duration: 2,
      });
    }
    if (size === 'small') {
      animateWithGSAPTimeline(timeline, large, largeRotation, '#view2', '#view1', {
        transform: 'translateX(0)',
        duration: 2,
      });
    }
  }, [size]);

  useGSAP(() => {
    gsap.to('#heading', { y: 0, opacity: 1 });
  }, []);
  return (
    <section className="sm:py-32 py-20 sm:px-10 px-5">
      <div className="screen-max-width">
        <h1
          id="heading"
          className="text-gray-500 lg:text-6xl md:text-5xl text-3xl lg:mb-0 mb-5 font-medium opacity-0 translate-y-20"
        >
          Take a Closer Look
        </h1>
        <div className="flex flex-col items-center mt-5">
          <div className="w-full h-[75vh] md:h-[90vh] overflow-hidden relative">
            <ModalView
              index={1}
              groupRef={small}
              gsapType={'view1'}
              controllerRef={cameraControllSmall}
              setRotatioState={setSmallRotation}
              item={modal}
              size={size}
            />
            <ModalView
              index={2}
              groupRef={large}
              gsapType={'view2'}
              controllerRef={cameraControllLarge}
              setRotatioState={setLargeRotation}
              item={modal}
              size={size}
            />
            <Canvas
              className="w-full h-full"
              style={{
                position: 'fixed',
                top: 0,
                bottom: 0,
                right: 0,
                left: 0,
                overflow: 'hidden',
              }}
              eventSource={document.getElementById('root')}
            >
              <View.Port />
            </Canvas>
          </div>
          <div className="mx-auto w-full">
            <p className="text-sm font-light text-center mb-5">{modal.title}</p>
            <div className="flex items-center justify-center">
              <ul className="flex items-center justify-center px-4 py-4 rounded-full bg-gray-900 backdrop-blur">
                {modals.map((item, index) => (
                  <li
                    onClick={() => {
                      setModal(item);
                    }}
                    key={index}
                    className="rounded-full cursor-pointer w-6 h-6 mx-2"
                    style={{ backgroundColor: item.color[0] }}
                  />
                ))}
              </ul>
              <button className="flex items-center justify-center p-1 rounded-full bg-gray-900 backdrop-blur ml-3 gap-1">
                {sizes.map((item, index) => (
                  <span
                    onClick={() => {
                      setSize(item.value);
                    }}
                    key={item.label}
                    style={{
                      backgroundColor: size === item.value ? 'white' : 'transparent',
                      color: size === item.value ? 'black' : 'white',
                    }}
                    className="w-10 cursor-pointer h-10 text-sm flex justify-center items-center bg-white text-black rounded-full transition-all"
                  >
                    {item.label}
                  </span>
                ))}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Modal;
