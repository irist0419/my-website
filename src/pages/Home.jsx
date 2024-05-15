import { useState, Suspense, useEffect, useRef} from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
import HomeInfo from '../components/HomeInfo';
import Island from '../models/Island'
import Sky from '../models/Sky'
import Bird from '../models/Bird'
import Ship from '../models/Ship'
import PirateTavern from '../assets/pirate-tavern.mp3'
import { soundoff, soundon, scroll } from '../assets/icons';


const Home = () => {
  const audioRef = useRef(new Audio(PirateTavern));
  audioRef.current.volume =0.3;
  audioRef.current.loop = true;
  const [isRotating, setIsRotating] = useState(false);
  const [ currentStage, setCurrentStage ] = useState(1);
  const [ isPlayingMusic, setIsPlayingMusic ] = useState(false);

  useEffect(() =>{
    if(isPlayingMusic){
      audioRef.current.play();
    }
    return () =>{
      audioRef.current.pause();
    }
  },[isPlayingMusic])

  const adjustIslandForScreenSize =() => {
    let screenScale = null;
    let screenPosition = [0, -9.5, -43.4];
    let rotation = [0, 4.7,0 ];
  
    if (window.innerWidth < 768){
      screenScale = [1.5, 1.5, 1.5];
    } else{
      screenScale = [2, 2, 2];
    }
    return [screenScale, screenPosition, rotation]
  }

  const adjustShipForScreenSize =() => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768){
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0.5, -2.65 ,0];
    } else{
      screenScale = [3, 3, 3];
      screenPosition = [0.5, -2.65 ,0];
    }
    return [screenScale, screenPosition]
  }

  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();
  const [shipScale, shipPosition] = adjustShipForScreenSize();

  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex
      items-center justify-center">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>
      <Canvas 
      className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
      }`}
      camera={{ near: 0.1, far: 1000}}>
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1,1,1]} intensity= {1.5}/>
          <ambientLight intensity={0.5} />
          <hemisphereLight  skyColor="#b1e1ff" groundColor="#000000" intensity ={2}/> 
          <Bird/> 
          <Sky isRotating = {isRotating} />
          <Island
              isRotating = {isRotating}
              setIsRotating = {setIsRotating}
              setCurrentStage={setCurrentStage}
              position = {islandPosition}
              rotation ={islandRotation}
              scale = {islandScale}
          />
          <Ship
            scale = {shipScale}
            position = {shipPosition}
            isRotating = {isRotating}
            rotation={[0,20.5,0]}
          />
        </Suspense>
      </Canvas>

      <div className='absolute bottom-2 left-2' >
        <img src = {!isPlayingMusic ? soundoff : soundon}
          alt="sound"
          className='w-10 h-10 cursor-pointer object-contain'
          onClick = {() => setIsPlayingMusic(!isPlayingMusic) }
        />
      </div>
      <div className='absolute bottom-2 right-2'>
        <img src= {scroll}
        alt="scroll"
        className='w-10 h-10 object-contain'
        />

      </div>
    </section>
  )
}

export default Home