import React from 'react'
import { useGLTF, Decal, useTexture } from '@react-three/drei'


function Design({url, pos, rot, scale, opac}) {
    const texture = useTexture(url || '/Quagsire.webp');
    return (
        <Decal
          debug
          position={pos}
          rotation={rot}
          scale={scale}
        >
          <meshBasicMaterial
            map={texture}
            transparent
            opacity={opac}
            polygonOffset
            polygonOffsetFactor={-1}
          />
        </Decal>
      )
}

export function ModelComponent({mUrl, dUrl, dPos, dRot, dScale, imageArray, imageInfoArray, selectedDesign}) {
  const {scene} = useGLTF(mUrl || '/board_rect_end.glb');
  
  let placedDesigns = null;
  if (imageInfoArray.length > 0) {
    placedDesigns = imageInfoArray.map((info, i) => {

      //To not render twice
      if (!info || !imageArray[i] || i === selectedDesign) return null;

      return (
        <Design
            key={i}
            url={imageArray[i].filtered}
            pos={info.pos}
            rot={info.rot}
            scale={info.scale}
            opac={0.5}
        />
      )
    });
  }

  let curDesign = null;
  if (dUrl) {
    curDesign = (
        <Design
            url={imageArray[selectedDesign].filtered}
            pos={dPos}
            rot={dRot}
            scale={dScale}
            opac={0.3}
        />
    )
  }

  return (
    <primitive object={scene}>
        {placedDesigns}
        {curDesign}
    </primitive>
  )
}

useGLTF.preload('/board_rect_end.glb');
useGLTF.preload('/bowl_end.glb');