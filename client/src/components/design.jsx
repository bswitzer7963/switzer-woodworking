import React from 'react'
import { Decal, useTexture } from '@react-three/drei'

export default function Design({url, pos, rot, scale, opac}) {
    const texture = useTexture(url || '/Quagsire.webp');
    texture.flipX = false;

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
            blending={3}
            premultipliedAlpha
            depthTest={false}
            polygonOffset
            polygonOffsetFactor={-10}
            polygonOffsetUnits={-10}
          />
        </Decal>
      )
}