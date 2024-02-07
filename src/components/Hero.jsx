import { Canvas } from '@react-three/fiber'
import { Experience } from './Experience'
import { useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export const Hero = () => {
  const heroRef = useRef()
  const canvasRef = useRef()
  const [scrollProgress, setScrollProgress] = useState(0)

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    let ctx = gsap.context(() => {
      const tlPin = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          scrub: 1,
          pin: true,
          start: 'top top',
          end: '50%',
          onUpdate: (self) => {
            const progress = self.progress;
            console.log(progress)
            setScrollProgress(progress);
          },
          markers: true,
        },
      })
    })

    // Clean up GSAP
    return () => ctx.revert();

  }, []);

  return (
    <div className='hero' ref={heroRef}>
      <Canvas ref={canvasRef}>
        <Experience scrollProgress={scrollProgress} />
      </Canvas>
    </div>
  )
}
