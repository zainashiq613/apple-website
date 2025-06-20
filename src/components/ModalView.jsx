import { Html, OrbitControls, PerspectiveCamera, View } from '@react-three/drei';

import Lights from './Lights';
import { Suspense } from 'react';
import IPhone from './IPhone';
import * as three from 'three';
import Loader from './Loader';

function ModalView({ index, groupRef, gsapType, controllerRef, setRotatioState, item, size }) {
  return (
    <View
      index={index}
      id={gsapType}
      className={`absolute w-full h-full ${index == 2 ? 'right-[-100%]' : ''}`}
    >
      <ambientLight intensity={0.3} />
      <PerspectiveCamera makeDefault position={[0, 0, 4]} />
      <Lights />
      <OrbitControls
        ref={controllerRef}
        makeDefault
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.4}
        target={new three.Vector3(0, 0, 0)}
        onEnd={() => {
          setRotatioState(controllerRef.current.getAzimuthalAngle());
        }}
      />
      <group ref={groupRef} name={`${index === 1 ? 'small' : 'large'}`} position={[0, 0, 0]}>
        <Suspense
          fallback={
            <Html>
              <Loader />
            </Html>
          }
        >
          <IPhone scale={index === 1 ? [15, 15, 15] : [17, 17, 17]} item={item} size={size} />
        </Suspense>
      </group>
    </View>
  );
}

export default ModalView;
