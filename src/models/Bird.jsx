import { useRef, useEffect } from 'react'
import birdScene from '../assets/3d/bird.glb'
import { useAnimations, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

const Bird = () => {
  const { scene, animations } = useGLTF(birdScene);
  const birdRef = useRef();
  const { actions } = useAnimations( animations, birdRef );

  useEffect(() => {
    actions['Take 001'].play();
  }, []);

  useFrame(({clock, camera}) => {
    birdRef.current.position.y += Math.sin(clock.elapsedTime) * 0.01;

    if(birdRef.current.position.x > camera.position.x +17){
        birdRef.current.rotation.y =Math.PI;
    }else if( birdRef.current.position.x < camera.position.x -17){
        birdRef.current.rotation.y =0 ;
    }

    if (birdRef.current.rotation.y === 0){
        birdRef.current.position.x += 0.015;
        birdRef.current.position.z -= 0.0025;
    }else{
        birdRef.current.position.x -= 0.015;
        birdRef.current.position.z += 0.0025;
    }
  })

  return (
    <mesh position={[-5, 0, 0.25]} scale={[0.1, 0.1, 0.1]} ref={ birdRef }>
      <primitive object = {scene}/>
    </mesh>
  )
}

export default Bird