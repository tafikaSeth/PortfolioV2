import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import MyAnimatedBox from "./scene"

export default function CanvaScene() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <Suspense fallback={null}>
        <MyAnimatedBox />
      </Suspense>
    </Canvas>
  )
}
