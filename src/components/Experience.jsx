import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Cubes } from "./Cubes";

export const Experience = ({ scrollProgress }) => {
  const cameraRef = useRef();
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    return () => gsap.globalTimeline.clear();
  }, []);

  useFrame(() => {
    if (hasScrolled) {
      gsap.to(cameraRef.current.position, {
        z: 2.5 + scrollProgress,
        y: scrollProgress,
        duration: 0.5
      });
    } else {
      console.log(cameraRef.current.position)
    }
  });

  useEffect(() => {
    if (scrollProgress !== 0) {
      setHasScrolled(true);
    }
  }, [scrollProgress]);

  return (
    <>
      <PerspectiveCamera makeDefault ref={cameraRef} fov={64} position={[2.3, 1.5, 2.3]} />
      <OrbitControls enableZoom={false} />
      <Cubes />
    </>
  );
};
