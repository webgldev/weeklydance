import * as THREE from 'three'
import React, { useRef, useEffect } from 'react'
import { useAnimations, useFBX, useGLTF } from '@react-three/drei'

import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    EyeLeft: THREE.SkinnedMesh
    EyeRight: THREE.SkinnedMesh
    Wolf3D_Head: THREE.SkinnedMesh
    Wolf3D_Teeth: THREE.SkinnedMesh
    Wolf3D_Hair: THREE.SkinnedMesh
    Wolf3D_Glasses: THREE.SkinnedMesh
    Wolf3D_Body: THREE.SkinnedMesh
    Wolf3D_Outfit_Bottom: THREE.SkinnedMesh
    Wolf3D_Outfit_Footwear: THREE.SkinnedMesh
    Wolf3D_Outfit_Top: THREE.SkinnedMesh
    Hips: THREE.Bone
  }
  materials: {
    Wolf3D_Eye: THREE.MeshStandardMaterial
    Wolf3D_Skin: THREE.MeshStandardMaterial
    Wolf3D_Teeth: THREE.MeshStandardMaterial
    Wolf3D_Hair: THREE.MeshStandardMaterial
    Wolf3D_Glasses: THREE.MeshStandardMaterial
    Wolf3D_Body: THREE.MeshStandardMaterial
    Wolf3D_Outfit_Bottom: THREE.MeshStandardMaterial
    Wolf3D_Outfit_Footwear: THREE.MeshStandardMaterial
    Wolf3D_Outfit_Top: THREE.MeshStandardMaterial
  }
}


export function Model({ animationName, ...props }: any) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/b.glb') as GLTFResult
  // const { animations: hiAnimation } = useFBX('/hi.fbx') // hi
  const { animations: SambaAnimation } = useFBX('/01.fbx') // SambaDancing
  const { animations: MacarenaAnimation } = useFBX('/02.fbx') // MacarenaDance
  const { animations: BellyAnimation } = useFBX('/03.fbx') // BellyDance
  const { animations: HipHopAnimation } = useFBX('/04.fbx') // HipHopDancing
  const { animations: NorthernSoulSpinComboAnimation } = useFBX('/05.fbx') // NorthernSoulSpinCombo

  SambaAnimation[0].name = 'Samba';
  MacarenaAnimation[0].name = 'Macarena';
  BellyAnimation[0].name = 'Belly';
  HipHopAnimation[0].name = 'HipHop';
  NorthernSoulSpinComboAnimation[0].name = 'NorthernSoulSpinCombo';

  const animations = [
    ...SambaAnimation, 
    ...MacarenaAnimation, 
    ...BellyAnimation, 
    ...HipHopAnimation, 
    ...NorthernSoulSpinComboAnimation
  ];
  console.log(SambaAnimation)

  // console.log(MacarenaAnimation)
  // console.log(BellyAnimation)
  // console.log(HipHopAnimation)
  // console.log(NorthernSoulSpinComboAnimation)

  // SambaAnimation.forEach((clip, clipIndex) => {
  //   console.log(`Animation Clip ${clipIndex}: ${clip.name}`);
  //   clip.tracks.forEach((track, trackIndex) => {
  //     console.log(`  Track ${trackIndex}: ${track.name}`);
  //   });
  // });

  // FBX 애니메이션의 트랙 이름을 GLB 모델의 본 이름으로 매칭
  animations.forEach((clip) => {
    clip.tracks.forEach((track) => {
      track.name = track.name
        .replace('mixamorigHips', 'Hips')
        .replace('mixamorigSpine', 'Spine')
        .replace('mixamorigSpine1', 'Spine1')
        .replace('mixamorigSpine2', 'Spine2')
        .replace('mixamorigNeck', 'Neck')
        .replace('mixamorigHead', 'Head')
        .replace('mixamorigLeftShoulder', 'LeftShoulder')
        .replace('mixamorigLeftArm', 'LeftArm')
        .replace('mixamorigLeftForeArm', 'LeftForeArm')
        .replace('mixamorigLeftHand', 'LeftHand')
        .replace('mixamorigLeftHandThumb1', 'LeftHandThumb1')
        .replace('mixamorigLeftHandThumb2', 'LeftHandThumb2')
        .replace('mixamorigLeftHandThumb3', 'LeftHandThumb3')
        .replace('mixamorigLeftHandIndex1', 'LeftHandIndex1')
        .replace('mixamorigLeftHandIndex2', 'LeftHandIndex2')
        .replace('mixamorigLeftHandIndex3', 'LeftHandIndex3')
        .replace('mixamorigLeftHandMiddle1', 'LeftHandMiddle1')
        .replace('mixamorigLeftHandMiddle2', 'LeftHandMiddle2')
        .replace('mixamorigLeftHandMiddle3', 'LeftHandMiddle3')
        .replace('mixamorigLeftHandRing1', 'LeftHandRing1')
        .replace('mixamorigLeftHandRing2', 'LeftHandRing2')
        .replace('mixamorigLeftHandRing3', 'LeftHandRing3')
        .replace('mixamorigLeftHandPinky1', 'LeftHandPinky1')
        .replace('mixamorigLeftHandPinky2', 'LeftHandPinky2')
        .replace('mixamorigLeftHandPinky3', 'LeftHandPinky3')
        .replace('mixamorigRightShoulder', 'RightShoulder')
        .replace('mixamorigRightArm', 'RightArm')
        .replace('mixamorigRightForeArm', 'RightForeArm')
        .replace('mixamorigRightHand', 'RightHand')
        .replace('mixamorigRightHandThumb1', 'RightHandThumb1')
        .replace('mixamorigRightHandThumb2', 'RightHandThumb2')
        .replace('mixamorigRightHandThumb3', 'RightHandThumb3')
        .replace('mixamorigRightHandIndex1', 'RightHandIndex1')
        .replace('mixamorigRightHandIndex2', 'RightHandIndex2')
        .replace('mixamorigRightHandIndex3', 'RightHandIndex3')
        .replace('mixamorigRightHandMiddle1', 'RightHandMiddle1')
        .replace('mixamorigRightHandMiddle2', 'RightHandMiddle2')
        .replace('mixamorigRightHandMiddle3', 'RightHandMiddle3')
        .replace('mixamorigRightHandRing1', 'RightHandRing1')
        .replace('mixamorigRightHandRing2', 'RightHandRing2')
        .replace('mixamorigRightHandRing3', 'RightHandRing3')
        .replace('mixamorigRightHandPinky1', 'RightHandPinky1')
        .replace('mixamorigRightHandPinky2', 'RightHandPinky2')
        .replace('mixamorigRightHandPinky3', 'RightHandPinky3')
        .replace('mixamorigLeftUpLeg', 'LeftUpLeg')
        .replace('mixamorigLeftLeg', 'LeftLeg')
        .replace('mixamorigLeftFoot', 'LeftFoot')
        .replace('mixamorigLeftToeBase', 'LeftToeBase')
        .replace('mixamorigRightUpLeg', 'RightUpLeg')
        .replace('mixamorigRightLeg', 'RightLeg')
        .replace('mixamorigRightFoot', 'RightFoot')
        .replace('mixamorigRightToeBase', 'RightToeBase');
    });
  });
  
  const { actions } = useAnimations(animations, group);
  

  useEffect(() => {
    if (actions && actions[animationName]) {
      actions[animationName].reset().fadeIn(0.5).play();
    }
  
    return () => {
      if (actions && actions[animationName]) {
        actions[animationName].fadeOut(0.5);
      }
    };
  }, [actions, animationName]);
  
  return (
    <group ref={group} {...props} dispose={null}>
      <primitive object={nodes.Hips} />
      <skinnedMesh
        name="EyeLeft"
        geometry={nodes.EyeLeft.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeLeft.skeleton}
        morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
      />
      <skinnedMesh
        name="EyeRight"
        geometry={nodes.EyeRight.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeRight.skeleton}
        morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Head"
        geometry={nodes.Wolf3D_Head.geometry}
        material={materials.Wolf3D_Skin}
        skeleton={nodes.Wolf3D_Head.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Teeth"
        geometry={nodes.Wolf3D_Teeth.geometry}
        material={materials.Wolf3D_Teeth}
        skeleton={nodes.Wolf3D_Teeth.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Hair.geometry}
        material={materials.Wolf3D_Hair}
        skeleton={nodes.Wolf3D_Hair.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Glasses.geometry}
        material={materials.Wolf3D_Glasses}
        skeleton={nodes.Wolf3D_Glasses.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Body.geometry}
        material={materials.Wolf3D_Body}
        skeleton={nodes.Wolf3D_Body.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
        material={materials.Wolf3D_Outfit_Bottom}
        skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
        material={materials.Wolf3D_Outfit_Footwear}
        skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Top.geometry}
        material={materials.Wolf3D_Outfit_Top}
        skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
      />
    </group>
  )
}

useGLTF.preload('/b.glb')