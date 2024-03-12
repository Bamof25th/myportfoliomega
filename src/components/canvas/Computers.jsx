import React from 'react'
import { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls,Preload,useGLTF } from '@react-three/drei';

import  CanvasLoader  from "../Loader";



const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={1.85} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={isMobile? 600 : 1000}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.4 : 0.75}
        position={isMobile ? [-2.5, -2.2, -1.1] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () =>{
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const mediaQuery =  window.matchMedia('(max-width:600px)')
   
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
        mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
  }, []);

  return(
    <Canvas
     frameLoop ="demand"
     shadows
     dpr={[1, 2]}
     camera={{ position:[24,3,5], fov : 20 }}
     gl = {{ preserveDrawingBuffer : true }}
    >
     <Suspense
     fallback={<CanvasLoader/>}
     >
       <OrbitControls
       enableZoom={false}
       maxPolarAngle={Math.PI / 2}
       minPolarAngle={Math.PI / 2}
       />
       <Computers isMobile ={isMobile} />
     </Suspense>
   
    <Preload all />

    </Canvas>
  )
}

export default ComputersCanvas;