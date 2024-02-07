import { useLayoutEffect, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useScroll } from '@react-three/drei'
import gsap from 'gsap'

export function Cubes(props) {
  const cubesRef = useRef()
  const tl = useRef()

  // const scroll = useScroll()

  // useFrame(() => {
  //   tl.current.seek(scroll.offset * tl.current.duration())
  // })

  // useLayoutEffect(() => {
  //   tl.current = gsap.timeline()

  //   tl.current.to(
  //     cubesRef.current.position,
  //     {
  //       duration: 1,
  //       y: 1.2
  //     },
  //     0
  //   )
  // }, [])

  return (
    <group {...props} dispose={null} ref={cubesRef}>
      <mesh>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh>
    </group>
  )
}