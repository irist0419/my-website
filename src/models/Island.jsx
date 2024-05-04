
import { useRef, useEffect} from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { a } from '@react-spring/three'
import { BufferGeometry, BufferAttribute } from 'three';

import islandScene from '../assets/3d/island.glb'

const Island = ({ isRotating, setIsRotating,setCurrentStage, ...props}) => {
  const islandRef = useRef()
  const {gl, viewport } = useThree()
  const { nodes, materials} = useGLTF(islandScene)

  const lastx =useRef(0);
  const rotationSpeed = useRef(0);
  const dampingFactor=0.98;

  const handlePointerDown = (e) =>{
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(true);

    const clientX = e.touches ? e.touches[0].clientX : e.clientX;

    lastx.current = clientX
  }

  const handlePointerUp = (e) =>{
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(false);
  }

  const handlePointerMove = (e) =>{
    e.stopPropagation();
    e.preventDefault();

    if(isRotating) {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;

    const delta = (clientX-lastx.current)/viewport.width

    islandRef.current.rotation.y += delta * 0.01 * Math.PI;
    lastx.current = clientX
    rotationSpeed.current = delta * 0.01 * Math.PI;
  }
  }

  const handleKeyDown = (e) => {
    if(e.key === 'ArrowLeft'){
      if(!isRotating) setIsRotating(true);
      islandRef.current.rotation.y += 0.01 * Math.PI;
    } else if(e.key === 'ArrowRight'){
      if(!isRotating) setIsRotating(true);
      islandRef.current.rotation.y -= 0.01 * Math.PI;
    }
  }

  const handleKeyUp = (e) => {
    if(e.key === 'ArrowLeft' || e.key === 'ArrowRight'){
      setIsRotating(false);
    }
  }

  useFrame(() =>{
    if(!isRotating){
      rotationSpeed.current *= dampingFactor;
      if(Math.abs(rotationSpeed.current) < 0.001){
        rotationSpeed.current=0;
      }
      islandRef.current.rotation.y += rotationSpeed.current;
    } else {
      const rotation = islandRef.current.rotation.y;

      const normalizedRotation =
        ((rotation % (2* Math.PI)) + 2*Math.PI) % ( 2*Math.PI);

      // Set the current stage based on the island's orientation
      switch (true) {
        case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
          setCurrentStage(4);
          break;
        case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
          setCurrentStage(3);
          break;
        case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
          setCurrentStage(2);
          break;
        case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
          setCurrentStage(1);
          break;
        default:
          setCurrentStage(null);
      }
    }
  })

  useEffect(() =>{
    const canvas = gl.domElement;
    canvas.addEventListener('pointerdown', handlePointerDown);
    canvas.addEventListener('pointerup', handlePointerUp);
    canvas.addEventListener('pointermove', handlePointerMove);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    return() => {
      canvas.addEventListener('pointerdown', handlePointerDown);
      canvas.addEventListener('pointerup', handlePointerUp);
      canvas.addEventListener('pointermove', handlePointerMove);
      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('keyup', handleKeyUp);
    }

  }, [gl, handlePointerDown,handlePointerUp, handlePointerMove])

  return (
      <a.group ref={islandRef} {...props} scale={0.078}>
        <group position={[36.842, 470.161, 15.695]} rotation={[-1.484, 0, 0.262]} scale={0.439}>
          <mesh
              
              
              geometry={nodes['Box052_Material_#134_0'].geometry}
              material={materials.Material_134}
              position={[0, 0, -80.798]}
          />
        </group>
        <group position={[295.523, 249.02, 15.695]} rotation={[-1.655, 0.023, -3.141]} scale={0.625}>
          <mesh
              
              
              geometry={nodes['Box059_Material_#143_0'].geometry}
              material={materials.Material_143}
              position={[0, 0, -80.798]}
          />
        </group>
        <group
            position={[84.062, 55.25, 120.991]}
            rotation={[-Math.PI / 2, 0, 2.094]}
            scale={[1.184, 1.736, 1]}>
          <mesh
              
              
              geometry={nodes['Object002_Material_#214_0'].geometry}
              material={materials.Material_214}
              position={[0, 0, -51.064]}
          />
        </group>
        <group
            position={[318.391, 79.724, 7.033]}
            rotation={[0, Math.PI / 2, 0]}
            scale={[1.941, 1, 1]}>
          <mesh
              
              
              geometry={nodes['Object003_Material_#211_0'].geometry}
              material={materials.Material_211}
              position={[-40.771, 0, -123.14]}
          />
        </group>
        <mesh
            
            
            geometry={nodes['Cylinder001_Material_#343_0'].geometry}
            material={materials.Material_343}
            position={[18.008, 0, -5.062]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={1.513}
        />
        <mesh
            
            
            geometry={nodes['Box003_Material_#185_0'].geometry}
            material={materials.Material_185}
            position={[181.393, 52.28, 7.836]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[1.097, 0.896, 1.691]}
        />
        <mesh
            
            
            geometry={nodes['Cylinder006_Material_#186_0'].geometry}
            material={materials.Material_186}
            position={[296.072, -5.523, 63.857]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[1.097, 0.896, 1.097]}
        />
        <mesh
            
            
            geometry={nodes['Box004_Material_#144_0'].geometry}
            material={materials.Material_144}
            position={[295.576, 204.308, 6.316]}
            rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
            
            
            geometry={nodes['Plane001_Material_#371_0'].geometry}
            material={materials.Material_371}
            position={[78.203, 1.9, -16.181]}
            rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
            
            
            geometry={nodes['Cylinder010_Material_#286_0'].geometry}
            material={materials.Material_286}
            position={[18.81, 367.686, -27.734]}
            rotation={[-2.752, -0.48, 3.12]}
        />
        <mesh
            
            
            geometry={nodes['Box005_Material_#221_0'].geometry}
            material={materials.Material_221}
            position={[-18.011, 319.756, -48.797]}
            rotation={[-1.523, 0.022, 0.436]}
        />
        <mesh
            
            
            geometry={nodes['Cylinder012_Material_#287_0'].geometry}
            material={materials.Material_287}
            position={[27.861, 465.886, -7.802]}
            rotation={[0.093, 0.348, -0.032]}
            scale={[0.809, 0.815, 1]}
        />
        <mesh
            
            
            geometry={nodes['Box006_Material_#289_0'].geometry}
            material={materials.Material_289}
            position={[4.058, -1.905, 204.079]}
            rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
            
            
            geometry={nodes['Box008_Material_#369_0'].geometry}
            material={materials.Material_369}
            position={[314.09, 61.479, 7.718]}
            rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
            
            
            geometry={nodes['Plane002_22_-_Default_0'].geometry}
            material={materials['22_-_Default']}
            position={[348.605, 17.168, 8.083]}
            rotation={[-Math.PI / 2, Math.PI / 4, 0]}
        />
        <mesh
            
            
            geometry={nodes['Torus001_Material_#139_0'].geometry}
            material={materials.Material_139}
            position={[-14.316, 252.412, 53.118]}
            rotation={[-0.145, -0.78, -0.102]}
        />
        <mesh
            
            
            geometry={nodes['Torus002_Material_#138_0'].geometry}
            material={materials.Material_138}
            position={[6.963, 216.552, 69.656]}
            rotation={[-0.109, -0.347, -0.037]}
        />
        <mesh
            
            
            geometry={nodes['Cylinder024_Material_#346_0'].geometry}
            material={materials.Material_346}
            position={[279.526, -11.951, -127.563]}
            rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
            
            
            geometry={nodes['Box025_Material_#288_0'].geometry}
            material={materials.Material_288}
            position={[-125.749, -3.63, -143.298]}
            rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
            
            
            geometry={nodes['Box030_Material_#213_0'].geometry}
            material={materials.Material_213}
            position={[-200.977, 15.481, 56.067]}
            rotation={[-Math.PI / 2, 0, 0.175]}
        />
        <mesh
            
            
            geometry={nodes['Box035_Material_#319_0'].geometry}
            material={materials.Material_319}
            position={[-193.339, 0, 135.715]}
            rotation={[-Math.PI / 2, 0, 0.262]}
        />
        <mesh
            
            
            geometry={nodes['Box043_Material_#188_0'].geometry}
            material={materials.Material_188}
            position={[130.808, 117.599, -93.862]}
            rotation={[0.087, 1.251, 0]}
        />
        <mesh
            
            
            geometry={nodes['Box050_Material_#211_0'].geometry}
            material={materials.Material_211}
            position={[-37.279, 346.9, 11.934]}
            rotation={[0.929, -1.519, 1.005]}
        />
        <mesh
            
            
            geometry={nodes['Box054_Material_#288_0'].geometry}
            material={materials.Material_288}
            position={[98.715, -3.63, -195.42]}
            rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
            
            
            geometry={nodes['Box055_Material_#211_0'].geometry}
            material={materials.Material_211}
            position={[-0.934, 346.9, 65.321]}
            rotation={[0.047, -0.492, 0.099]}
        />
        <mesh
            
            
            geometry={nodes['Box056_Material_#211_0'].geometry}
            material={materials.Material_211}
            position={[67.558, 346.9, 65.321]}
            rotation={[0, 0.466, 0]}
        />
        <mesh
            
            
            geometry={nodes['Box057_Material_#211_0'].geometry}
            material={materials.Material_211}
            position={[101.638, 343.703, 15.974]}
            rotation={[0, 1.251, 0]}
        />
        <mesh
            
            
            geometry={nodes['Box058_Material_#211_0'].geometry}
            material={materials.Material_211}
            position={[85.358, 343.703, -40.891]}
            rotation={[Math.PI, 0.756, -Math.PI]}
        />
        <mesh
            
            
            geometry={nodes['Cylinder025_Material_#345_0'].geometry}
            material={materials.Material_345}
            position={[407.221, -11.951, 0.585]}
            rotation={[-1.833, 0, 0]}
        />
        <mesh
            
            
            geometry={nodes['Cylinder026_Material_#344_0'].geometry}
            material={materials.Material_344}
            position={[366.187, -11.951, 125.688]}
            rotation={[-1.222, 0, 0]}
        />
        <mesh
            
            
            geometry={nodes['Box060_Material_#288_0'].geometry}
            material={materials.Material_288}
            position={[-92.79, -3.63, -25.935]}
            rotation={[-Math.PI / 2, 0, Math.PI / 9]}
        />
        <mesh
            
            
            geometry={nodes['Box061_Material_#289_0'].geometry}
            material={materials.Material_289}
            position={[-40.295, 24.408, 100.659]}
            rotation={[-Math.PI / 2, 0, 3.054]}
        />
        <mesh
            
            
            geometry={nodes['Box062_Material_#288_0'].geometry}
            material={materials.Material_288}
            position={[-96.803, 29.715, 35.182]}
            rotation={[-Math.PI / 2, -0.087, -2.531]}
        />
        <mesh
            
            
            geometry={nodes['Box063_Material_#220_0'].geometry}
            material={materials.Material_220}
            position={[-71.57, 29.715, 65.736]}
            rotation={[-1.582, 0.044, -0.438]}
        />
        <mesh
            
            
            geometry={nodes['Box064_Material_#289_0'].geometry}
            material={materials.Material_289}
            position={[-101.107, 63.218, -5.579]}
            rotation={[-Math.PI / 2, -1.222, 0]}
            scale={0.852}
        />
        <mesh
            
            
            geometry={nodes['Box065_Material_#289_0'].geometry}
            material={materials.Material_289}
            position={[-130.723, -1.905, 5.066]}
            rotation={[-1.669, -0.132, -1.332]}
            scale={[1.231, 1.116, 1.201]}
        />
        <mesh
            
            
            geometry={nodes['Box066_Material_#288_0'].geometry}
            material={materials.Material_288}
            position={[26.872, -5.222, 115.724]}
            rotation={[-Math.PI / 2, -0.087, -2.531]}
            scale={1.077}
        />
        <mesh
            
            
            geometry={nodes['Box067_Material_#289_0'].geometry}
            material={materials.Material_289}
            position={[-51.722, 96.786, 34.408]}
            rotation={[-1.585, 0.145, 1.37]}
            scale={[1.231, 1.116, 1.201]}
        />
        <mesh
            
            
            geometry={nodes['Box068_Material_#288_0'].geometry}
            material={materials.Material_288}
            position={[-4.712, -15.907, -113.591]}
            rotation={[-Math.PI / 2, -0.087, -2.531]}
        />
        <mesh
            
            
            geometry={nodes['Box069_Material_#289_0'].geometry}
            material={materials.Material_289}
            position={[-3.477, 18.797, -156.224]}
            rotation={[2.823, -1.284, 2.588]}
            scale={0.852}
        />
        <mesh
            
            
            geometry={nodes['Box070_Material_#289_0'].geometry}
            material={materials.Material_289}
            position={[17.095, 73.298, -105.169]}
            rotation={[-1.606, -0.358, 1.411]}
            scale={0.852}
        />
        <mesh
            
            
            geometry={nodes['Cylinder027_Material_#312_0'].geometry}
            material={materials.Material_312}
            position={[100.81, 104.682, -118.275]}
            rotation={[-1.292, -0.013, -0.669]}
        />
        <mesh
            
            
            geometry={nodes['Box071_Material_#289_0'].geometry}
            material={materials.Material_289}
            position={[89.709, 98.557, -115.301]}
            rotation={[-1.644, 0.071, -0.583]}
            scale={0.852}
        />
        <mesh
            
            
            geometry={nodes['Cylinder028_Material_#210_0'].geometry}
            material={materials.Material_210}
            position={[149.746, 114.948, -190.974]}
            rotation={[Math.PI, 0.436, 0]}
            scale={0.652}
        />
        <mesh
            
            
            geometry={nodes['Cylinder029_Material_#372_0'].geometry}
            material={materials.Material_372}
            position={[147.479, 128.675, -191.465]}
            rotation={[-1.602, -0.215, -1.716]}
        />
        <mesh
            
            
            geometry={nodes['Cylinder033_Material_#216_0'].geometry}
            material={materials.Material_216}
            position={[69.415, 54.447, 144.423]}
            rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
            
            
            geometry={nodes['Cylinder034_Material_#347_0'].geometry}
            material={materials.Material_347}
            position={[86.106, 56.584, 126.336]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={[0.891, 0.775, 0.61]}
        />
        <mesh
            
            
            geometry={nodes['Box072_Material_#215_0'].geometry}
            material={materials.Material_215}
            position={[97.021, 56.584, 135.083]}
            rotation={[-Math.PI / 2, 0, 0.262]}
        />
        <mesh
            
            
            geometry={nodes['Box091_Material_#8721_0'].geometry}
            material={materials.Material_8721}
            position={[173.253, 197.392, 23.969]}
            rotation={[-0.814, 0.183, 0.064]}
            scale={1.223}
        />
        <mesh
            
            
            geometry={nodes['ChamferBox002_Material_#263_0'].geometry}
            material={materials.Material_263}
            position={[74.077, 196.395, 64.472]}
            rotation={[-Math.PI / 2, 0, 0.611]}
            scale={0.781}
        />
        <mesh
            
            
            geometry={nodes['ChamferBox003_Material_#263_0'].geometry}
            material={materials.Material_263}
            position={[38.069, 171.44, 73.566]}
            rotation={[-Math.PI / 2, 0, 0.087]}
            scale={0.781}
        />
        <mesh
            
            
            geometry={nodes['ChamferBox004_Material_#263_0'].geometry}
            material={materials.Material_263}
            position={[-19.133, 265.625, 21.893]}
            rotation={[-Math.PI / 2, 0, -1.335]}
            scale={0.781}
        />
        <mesh
            
            
            geometry={nodes['ChamferBox005_Material_#263_0'].geometry}
            material={materials.Material_263}
            position={[-18.672, 240.671, -9.649]}
            rotation={[-Math.PI / 2, 0, -1.859]}
            scale={0.781}
        />
        <mesh
            
            
            geometry={nodes['ChamferBox006_Material_#263_0'].geometry}
            material={materials.Material_263}
            position={[80.242, 265.625, -25.413]}
            rotation={[-Math.PI / 2, 0, 2.068]}
            scale={0.781}
        />
        <mesh
            
            
            geometry={nodes['ChamferBox007_Material_#263_0'].geometry}
            material={materials.Material_263}
            position={[60.368, 161.923, -46.11]}
            rotation={[-Math.PI / 2, 0, 2.679]}
            scale={1.113}
        />
        <mesh
            
            
            geometry={nodes['ChamferBox008_Material_#263_0'].geometry}
            material={materials.Material_263}
            position={[10.207, 179.239, -48.283]}
            rotation={[-Math.PI / 2, 0, -2.819]}
            scale={0.925}
        />
        <mesh
            
            
            geometry={nodes['ChamferBox009_Material_#263_0'].geometry}
            material={materials.Material_263}
            position={[87.819, 240.671, 31.026]}
            rotation={[-Math.PI / 2, 0, 1.222]}
            scale={0.781}
        />
        <mesh
            
            
            geometry={nodes['Plane004_Material_#342_0'].geometry}
            material={materials.Material_342}
            position={[-72.372, 117.448, -2.866]}
            rotation={[3.111, -1.462, -1.623]}
        />
        <mesh
            
            
            geometry={nodes['Plane005_Material_#342_0'].geometry}
            material={materials.Material_342}
            position={[-72.372, 117.448, -2.866]}
            rotation={[0.004, -0.72, 1.552]}
        />
        <mesh
            
            
            geometry={nodes['Plane006_Material_#342_0'].geometry}
            material={materials.Material_342}
            position={[-72.372, 117.448, -2.866]}
            rotation={[0.006, 1.026, 1.544]}
        />
        <mesh
            
            
            geometry={nodes['Plane007_Material_#342_0'].geometry}
            material={materials.Material_342}
            position={[-72.372, 117.448, -2.866]}
            rotation={[0.003, -0.022, 1.549]}
        />
        <mesh
            
            
            geometry={nodes['Plane012_Material_#342_0'].geometry}
            material={materials.Material_342}
            position={[-77.651, 110.659, 6.511]}
            rotation={[1.877, -1.203, -2.876]}
        />
        <mesh
            
            
            geometry={nodes['Plane013_Material_#342_0'].geometry}
            material={materials.Material_342}
            position={[-77.651, 110.659, 6.511]}
            rotation={[0.295, -0.667, 2.002]}
        />
        <mesh
            
            
            geometry={nodes['Plane014_Material_#342_0'].geometry}
            material={materials.Material_342}
            position={[-77.651, 110.659, 6.511]}
            rotation={[-0.509, 0.935, 2.158]}
        />
        <mesh
            
            
            geometry={nodes['Plane015_Material_#342_0'].geometry}
            material={materials.Material_342}
            position={[-77.651, 110.659, 6.511]}
            rotation={[0.011, -0.019, 1.898]}
        />
        <mesh
            
            
            geometry={nodes['Plane016_Material_#342_0'].geometry}
            material={materials.Material_342}
            position={[-77.651, 113.233, 13.526]}
            rotation={[1.877, -1.203, -2.876]}
        />
        <mesh
            
            
            geometry={nodes['Plane017_Material_#342_0'].geometry}
            material={materials.Material_342}
            position={[-77.651, 113.233, 13.526]}
            rotation={[0.295, -0.667, 2.002]}
        />
        <mesh
            
            
            geometry={nodes['Plane018_Material_#342_0'].geometry}
            material={materials.Material_342}
            position={[-77.651, 113.233, 13.526]}
            rotation={[-0.509, 0.935, 2.158]}
        />
        <mesh
            
            
            geometry={nodes['Plane019_Material_#342_0'].geometry}
            material={materials.Material_342}
            position={[-77.651, 113.233, 13.526]}
            rotation={[0.011, -0.019, 1.898]}
        />
        <mesh
            
            
            geometry={nodes['Plane020_Material_#342_0'].geometry}
            material={materials.Material_342}
            position={[-82.584, 113.379, 27.961]}
            rotation={[0.007, -1.069, 1.555]}
        />
        <mesh
            
            
            geometry={nodes['Plane021_Material_#342_0'].geometry}
            material={materials.Material_342}
            position={[-82.584, 113.379, 27.961]}
            rotation={[0.003, -0.109, 1.55]}
        />
        <mesh
            
            
            geometry={nodes['Plane022_Material_#342_0'].geometry}
            material={materials.Material_342}
            position={[-82.584, 113.379, 27.961]}
            rotation={[3.091, 1.505, -1.542]}
        />
        <mesh
            
            
            geometry={nodes['Plane023_Material_#342_0'].geometry}
            material={materials.Material_342}
            position={[-82.584, 113.379, 27.961]}
            rotation={[0.004, 0.589, 1.547]}
        />
        <mesh
            
            
            geometry={nodes['Plane024_Material_#342_0'].geometry}
            material={materials.Material_342}
            position={[-72.865, 110.514, 65.805]}
            rotation={[0.656, -0.973, 2.076]}
        />
        <mesh
            
            
            geometry={nodes['Plane025_Material_#342_0'].geometry}
            material={materials.Material_342}
            position={[-72.865, 110.514, 65.805]}
            rotation={[0.231, -0.075, 1.834]}
        />
        <mesh
            
            
            geometry={nodes['Plane026_Material_#342_0'].geometry}
            material={materials.Material_342}
            position={[-72.865, 110.514, 65.805]}
            rotation={[-1.697, 1.275, -2.845]}
        />
        <mesh
            
            
            geometry={nodes['Plane027_Material_#342_0'].geometry}
            material={materials.Material_342}
            position={[-72.865, 110.514, 65.805]}
            rotation={[0.013, 0.592, 1.891]}
        />
        <mesh
            
            
            geometry={nodes['Plane035_Material_#342_0'].geometry}
            material={materials.Material_342}
            position={[-77.507, 109.164, 44.416]}
            rotation={[0.013, 0.592, 1.891]}
        />
        <mesh
            
            
            geometry={nodes['Plane036_Material_#342_0'].geometry}
            material={materials.Material_342}
            position={[57.586, 117.448, -105.23]}
            rotation={[0.009, 1.2, 1.541]}
        />
        <mesh
            
            
            geometry={nodes['Plane037_Material_#342_0'].geometry}
            material={materials.Material_342}
            position={[87.254, 114.583, -79.804]}
            rotation={[0.388, -0.435, 1.68]}
        />
        <mesh
            
            
            geometry={nodes['Plane038_Material_#342_0'].geometry}
            material={materials.Material_342}
            position={[87.254, 114.583, -79.804]}
            rotation={[0.266, 0.518, 1.682]}
        />
        <mesh
            
            
            geometry={nodes['Plane039_Material_#342_0'].geometry}
            material={materials.Material_342}
            position={[87.254, 114.583, -79.804]}
            rotation={[-2.678, 0.867, -1.77]}
        />
        <mesh
            
            
            geometry={nodes['Plane040_Material_#342_0'].geometry}
            material={materials.Material_342}
            position={[87.254, 114.583, -79.804]}
            rotation={[0.029, 1.202, 1.871]}
        />
        <mesh
            
            
            geometry={nodes['Plane041_Material_#342_0'].geometry}
            material={materials.Material_342}
            position={[64.591, 110.659, -97.062]}
            rotation={[0.388, -0.435, 1.68]}
        />
        <mesh
            
            
            geometry={nodes['Plane042_Material_#342_0'].geometry}
            material={materials.Material_342}
            position={[64.591, 110.659, -97.062]}
            rotation={[0.266, 0.518, 1.682]}
        />
        <mesh
            
            
            geometry={nodes['Plane043_Material_#342_0'].geometry}
            material={materials.Material_342}
            position={[64.591, 110.659, -97.062]}
            rotation={[-2.678, 0.867, -1.77]}
        />
        <mesh
            
            
            geometry={nodes['Plane044_Material_#342_0'].geometry}
            material={materials.Material_342}
            position={[64.591, 110.659, -97.062]}
            rotation={[0.029, 1.202, 1.871]}
        />
        <mesh
            
            
            geometry={nodes['Plane045_Material_#342_0'].geometry}
            material={materials.Material_342}
            position={[71.183, 113.233, -94.663]}
            rotation={[0.388, -0.435, 1.68]}
        />
        <mesh
            
            
            geometry={nodes['Plane046_Material_#342_0'].geometry}
            material={materials.Material_342}
            position={[71.183, 113.233, -94.663]}
            rotation={[0.266, 0.518, 1.682]}
        />
        <mesh
            
            
            geometry={nodes['Plane047_Material_#342_0'].geometry}
            material={materials.Material_342}
            position={[71.183, 113.233, -94.663]}
            rotation={[-2.678, 0.867, -1.77]}
        />
        <mesh
            
            
            geometry={nodes['Plane048_Material_#342_0'].geometry}
            material={materials.Material_342}
            position={[71.183, 113.233, -94.663]}
            rotation={[0.029, 1.202, 1.871]}
        />
        <mesh
            
            
            geometry={nodes['Plane049_Material_#342_0'].geometry}
            material={materials.Material_342}
            position={[83.061, 113.379, -85.09]}
            rotation={[0.003, 0.153, 1.549]}
        />
        <mesh
            
            
            geometry={nodes['Plane050_Material_#342_0'].geometry}
            material={materials.Material_342}
            position={[83.061, 113.379, -85.09]}
            rotation={[0.008, 1.113, 1.542]}
        />
        <mesh
            
            
            geometry={nodes['Plane051_Material_#342_0'].geometry}
            material={materials.Material_342}
            position={[83.061, 113.379, -85.09]}
            rotation={[3.138, 0.283, -1.591]}
        />
        <mesh
            
            
            geometry={nodes['Plane052_Material_#342_0'].geometry}
            material={materials.Material_342}
            position={[83.061, 113.379, -85.09]}
            rotation={[3.128, 1.331, -1.579]}
        />
        <mesh
            
            
            geometry={nodes['Plane053_Material_#342_0'].geometry}
            material={materials.Material_342}
            position={[93.485, 106.59, -82.418]}
            rotation={[0.354, 0.137, 1.459]}
        />
        <mesh
            
            
            geometry={nodes['Plane054_Material_#342_0'].geometry}
            material={materials.Material_342}
            position={[93.485, 106.59, -82.418]}
            rotation={[0.516, 1.089, 1.35]}
        />
        <mesh
            
            
            geometry={nodes['Plane055_Material_#342_0'].geometry}
            material={materials.Material_342}
            position={[93.485, 106.59, -82.418]}
            rotation={[-2.834, 0.297, -1.499]}
        />
        <mesh
            
            
            geometry={nodes['Plane056_Material_#342_0'].geometry}
            material={materials.Material_342}
            position={[93.485, 106.59, -82.418]}
            rotation={[3.098, 1.328, -1.201]}
        />
        <mesh
            
            
            geometry={nodes['Plane057_Material_#342_0'].geometry}
            material={materials.Material_342}
            position={[100.26, 109.164, -84.233]}
            rotation={[0.354, 0.137, 1.459]}
        />
        <mesh
            
            
            geometry={nodes['Plane058_Material_#342_0'].geometry}
            material={materials.Material_342}
            position={[100.26, 109.164, -84.233]}
            rotation={[0.516, 1.089, 1.35]}
        />
        <mesh
            
            
            geometry={nodes['Plane059_Material_#342_0'].geometry}
            material={materials.Material_342}
            position={[100.26, 109.164, -84.233]}
            rotation={[-2.834, 0.297, -1.499]}
        />
        <mesh
            
            
            geometry={nodes['Plane060_Material_#342_0'].geometry}
            material={materials.Material_342}
            position={[100.26, 109.164, -84.233]}
            rotation={[3.098, 1.328, -1.201]}
        />
        <mesh
            
            
            geometry={nodes['Plane061_Material_#342_0'].geometry}
            material={materials.Material_342}
            position={[83.061, 113.379, -147.391]}
            rotation={[0.003, 0.153, 1.549]}
        />
        <mesh
            
            
            geometry={nodes['Plane062_Material_#342_0'].geometry}
            material={materials.Material_342}
            position={[83.061, 113.379, -147.391]}
            rotation={[0.008, 1.113, 1.542]}
        />
        <mesh
            
            
            geometry={nodes['Plane063_Material_#342_0'].geometry}
            material={materials.Material_342}
            position={[83.061, 113.379, -147.391]}
            rotation={[3.128, 1.331, -1.579]}
        />
        <mesh
            
            
            geometry={nodes['Plane064_Material_#342_0'].geometry}
            material={materials.Material_342}
            position={[62.604, 114.782, -122.529]}
            rotation={[0.003, 0.153, 1.549]}
        />
        <mesh
            
            
            geometry={nodes['Plane065_Material_#342_0'].geometry}
            material={materials.Material_342}
            position={[62.604, 114.782, -122.529]}
            rotation={[0.008, 1.113, 1.542]}
        />
        <mesh
            
            
            geometry={nodes['Plane066_Material_#342_0'].geometry}
            material={materials.Material_342}
            position={[62.604, 114.782, -122.529]}
            rotation={[3.128, 1.331, -1.579]}
        />
        <mesh
            
            
            geometry={nodes['Plane067_Material_#342_0'].geometry}
            material={materials.Material_342}
            position={[17.871, 114.782, -86.484]}
            rotation={[0.003, 0.153, 1.549]}
        />
        <mesh
            
            
            geometry={nodes['Plane068_Material_#342_0'].geometry}
            material={materials.Material_342}
            position={[17.871, 114.782, -86.484]}
            rotation={[3.128, 1.331, -1.579]}
        />
        <mesh
            
            
            geometry={nodes['Plane069_Material_#342_0'].geometry}
            material={materials.Material_342}
            position={[36.151, 86.495, -170.926]}
            rotation={[3.111, -1.462, -1.623]}
        />
        <mesh
            
            
            geometry={nodes['Plane070_Material_#342_0'].geometry}
            material={materials.Material_342}
            position={[36.151, 86.495, -170.926]}
            rotation={[0.004, -0.72, 1.552]}
        />
        <mesh
            
            
            geometry={nodes['Plane071_Material_#342_0'].geometry}
            material={materials.Material_342}
            position={[36.151, 86.495, -170.926]}
            rotation={[0.006, 1.026, 1.544]}
        />
        <mesh
            
            
            geometry={nodes['Plane072_Material_#342_0'].geometry}
            material={materials.Material_342}
            position={[36.151, 86.495, -170.926]}
            rotation={[0.003, -0.022, 1.549]}
        />
        <mesh
            
            
            geometry={nodes['Plane073_Material_#342_0'].geometry}
            material={materials.Material_342}
            position={[-3.145, 86.495, -90.364]}
            rotation={[3.111, -1.462, -1.623]}
        />
        <mesh
            
            
            geometry={nodes['Plane074_Material_#342_0'].geometry}
            material={materials.Material_342}
            position={[-3.145, 86.495, -90.364]}
            rotation={[0.004, -0.72, 1.552]}
        />
        <mesh
            
            
            geometry={nodes['Plane075_Material_#342_0'].geometry}
            material={materials.Material_342}
            position={[-3.145, 86.495, -90.364]}
            rotation={[0.006, 1.026, 1.544]}
        />
        <mesh
            
            
            geometry={nodes['Plane076_Material_#342_0'].geometry}
            material={materials.Material_342}
            position={[-3.145, 86.495, -90.364]}
            rotation={[0.003, -0.022, 1.549]}
        />
      </a.group>
  )
}

export default Island;