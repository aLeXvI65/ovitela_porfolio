import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from '@react-three/drei';
import Loader from '../Loader';

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  const [decalInfo] = useTexture([props.imgInfo]);
  const [toggleDecal] = [props.toggleDecal];

  return (
    <Float speed={2.5} rotationIntensity={0.5} floatIntensity={1} >
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75} rotation={[0, 0*Math.PI, 0]}>
        <boxGeometry args={[1.5, 1.5, 1.5]} />
        <meshStandardMaterial
          color="#222"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 0.5]}
          // rotation={[2 * Math.PI, 0, 6.25]}
          rotation={[0,0,0]}
          flatShading
          map={(toggleDecal) ? decalInfo : decal}
        />
        {/* <Decal
          position={[0, 0, -0.5]}
          // rotation={[2 * Math.PI, 0, 6.25]}
          rotation={[0,0,0]}
          scale={[-1,1,1]}
          flatShading
          map={decalInfo}
        /> */}
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon, infoIcon, toggleDecal }) => {
  return (
    <Canvas frameloop="always" gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<Loader />}>
        {/* <OrbitControls enableZoom={false} position0={0} /> */}
        <Ball imgUrl={icon} imgInfo={infoIcon} toggleDecal={toggleDecal}/>
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
