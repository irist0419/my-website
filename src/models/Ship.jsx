 import { useRef, useEffect } from 'react'
 import { useAnimations, useGLTF } from '@react-three/drei'
 import shipScene from '../assets/3d/ship.glb'
 
 const Ship = ({ isRotating, ...props }) => {
    const ref = useRef();
    const { scene, animations } = useGLTF(shipScene);
    const { actions } = useAnimations (animations, ref);


    useEffect(() => {
        console.log({isRotating});
        if(isRotating){
            actions['Take 001'].play();
        }else{
            actions['Take 001'].stop();
        }


    }, [actions, isRotating])

   return (
     <mesh {...props} ref={ref} scale={0.004}>
      <primitive  object={scene} />
     </mesh>
   )
 }
 
 export default Ship