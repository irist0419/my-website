import { useRef, useEffect } from 'react'
import chestScene from '../assets/3d/chest.glb'
import { useAnimations, useGLTF } from '@react-three/drei'

const Chest = () => {
    const { scene, animations } = useGLTF(chestScene);
    const chestRef = useRef();
    const { actions } = useAnimations( animations, chestRef );
  
    useEffect(() => {
      actions['HarrisChestClips'].play();
    }, []);
  
    return (
      <mesh position={[0, 0, 0.25]} scale={[2.3 ,2.3 , 2.3]} rotation={[-0.15, 0.5, 0]} ref={ chestRef }>
        <primitive object = {scene}/>
      </mesh>
    )
  }

export default Chest