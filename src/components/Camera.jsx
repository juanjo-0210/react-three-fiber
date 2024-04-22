//import { OrbitControls, PerspectiveCamera } from "@react-three/drei"
import { PointerLockControls } from "@react-three/drei"
import { useThree } from '@react-three/fiber'


const Camera = () => {
    const { camera, gl } = useThree()
    console.log(gl)
  return (
    <>
      <PointerLockControls args={[camera, gl.domElement]} />
    </>
  )
}

export default Camera
