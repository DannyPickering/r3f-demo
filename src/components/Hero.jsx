import { Canvas } from '@react-three/fiber'
import { Experience } from './Experience'

export const Hero = () => {
  return (
    <div className='hero'>
      <Canvas camera={{ fov: 64, position: [2.3, 1.5, 2.3] }}>
        <Experience />
      </Canvas>
    </div>
  )
}