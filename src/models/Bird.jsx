import React from 'react'
import birdScene from '../assets/3d/bird.glb'
import { useGLTF } from '@react-three/drei'

const Bird = () => {
  const { scene, animations } = useGLTF(birdScene);
  return (
    <mesh position={[-5.5, 0.5, 0.25]} scale={[0.1, 0.1, 0.1]}>
      <primitive object = {scene}/>
    </mesh>
  )
}

export default Bird