import { Sky } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import * as thrD from 'three'
import { Physics } from '@react-three/cannon'
import Ground from "./components/Ground.jsx"
import Camera from "./components/Camera.jsx"
import Player from "./components/Player.jsx"

console.log(thrD)

function App() {

  return (
    <>
      <Canvas>
        <Sky sunPosition={[100,100,20]}/>
        <ambientLight intensity={0.5} />
        <Camera />
        <Physics>
          <Player/>
          
          <Ground/>
          
        </Physics>
      </Canvas>
    </>
  )
}

export default App
