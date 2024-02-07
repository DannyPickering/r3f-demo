import { OrbitControls, ScrollControls } from "@react-three/drei"
import { Cubes } from "./Cubes"

export const Experience = () => {
  return (
    <>
      <OrbitControls enableZoom={false} />
      <ScrollControls pages={0.75} damping={0.25}>
        <Cubes />
      </ScrollControls>
    </>
  )
}