import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import './TestPage3.css';


export default function TestPage3() {


  function Box(props) {
    const mesh = useRef()
    const [state, setState] = useState({isHovered: false, isActive: false})

    useFrame(state => {
      const time = state.clock.getElapsedTime();
      mesh.current.position.y = mesh.current.position.y + Math.sin(time*2)/100;
      mesh.current.rotation.y = mesh.current.rotation.x += 0.01;
    })

    return (
      <mesh
        {...props}
        ref={mesh}
        scale={state.isHovered ? [1.5, 1.5, 1.5] : [1, 1, 1]}
        onClick={(e) => setState({...state, isActive: !state.isActive, })}
        onPointerOver={(e) => setState({...state, isHovered: true})}
        onPointerOut={(e) => setState({...state, isHovered: false})}>
        <boxBufferGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={state.isActive ? 'green' : '#D90368'} />
      </mesh>
    )
  }


  return (
    <Canvas className="canVas">
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Box position={[-1, 0, 0]} />
      <Box position={[4, 0, 2]} />
    </Canvas>
  )
}
