'use client'

import { Model } from '@/component/model'
import { Canvas } from '@react-three/fiber';
import { Center, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { useState } from 'react'

export default function Home() {
  const [animationName, setAnimationName] = useState('NorthernSoulSpinCombo')
  const [activeButton, setActiveButton] = useState('NorthernSoulSpinCombo');
  const handleButtonClick = (animation: any) => {
    setAnimationName(animation);
    setActiveButton(animation);
  };
  const buttons = [
    { name: 'HipHop', label: '월' },
    { name: 'Macarena', label: '화' },
    { name: 'Samba', label: '수' },
    { name: 'Belly', label: '목' },
    { name: 'NorthernSoulSpinCombo', label: '금' },
  ];

  return (
    <div className='area'>
      <p className='title'>Weekly Dance</p>
      <div className='dance-area'>
        <Canvas>
          <ambientLight intensity={1.5} />
          <directionalLight position={[10, 0, 5]} intensity={5} />
          <Center>
            <Model animationName={animationName}/>
          </Center>
          <OrbitControls />
          <PerspectiveCamera makeDefault position={[-8, 2, 10]} fov={10} />
        </Canvas>
      </div>
        <p className='dance-name'>{activeButton}</p>
      <div className='btn-area'>
        {buttons.map((button) => (
          <button
            key={button.name}
            onClick={() => handleButtonClick(button.name)}
            className={activeButton === button.name ? 'active' : ''}
          >
            {button.label}
          </button>
        ))}
      </div>
    </div>
  )
}
