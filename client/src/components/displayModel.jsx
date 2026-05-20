//Source: https://sbcode.net/react-three-fiber/use-gltf/
//Background Image: https://polyhaven.com/a/ticknock_02

import {useState, useRef} from 'react';
import {Canvas} from '@react-three/fiber';
import {OrbitControls, Environment, useGLTF, ContactShadows, useTexture} from '@react-three/drei';

const modelOpts = [
    {title:'Bat', url: '/bat.glb'},
    {title:'Bowl', url: '/bowl.glb'},
    {title:'CuttingBoard-Rect', url: '/rectangle-cuttingboard.glb'}
];

function Model({url}) {
    const {scene} = useGLTF(url);
    return <primitive object={scene}/>
}

//remove projtype when able to send real project obj
export default function DisplayModel({projType, project, designs}) {
    const [isSpinning, setIsSpinning] = useState(true);
    const [isDecorating, setIsDecorating] = useState(false);
    const timer = useRef(null)

    const curModel = modelOpts.find((type) => type.title === projType);

    function handleClick() {
        if (!isDecorating) {
            clearTimeout(timer.current);
            setIsSpinning(false);
        }
    }

    function handleUnClick() {
        if (!isDecorating) {
            timer.current = setTimeout(() => {
                setIsSpinning(true);
            }, 4000);
        }
    }

    function toggleMode() {
        if (isDecorating) {
            setIsDecorating(false);
        }
        else {
            setIsDecorating(true);
        }
    }

    let imageOpts = null;
    //const imageOpts = designs.map(())

    return (
        <div id="cavas-w-dash">
            <div id="three-canvas-space">
                <Canvas camera={{position: [0, 2, 4], near: 0.025}}>
                    {/* <Environment files="/background.hdr" background blur={0.1}/> */}
                    <Environment preset="forest" background/>
                    <fog attach="fog" args={['black', 15, 20]} />
                    <group>
                        <Model url={curModel.url}/>
                    </group>
                    <OrbitControls 
                        enabled={!isDecorating}
                        autoRotate={isSpinning}
                        onStart={handleClick}
                        onEnd={handleUnClick}
                    />
                </Canvas>
            </div>
            <div id="canvas-dash">
                <div id="canvas-dash-btns">
                    <button id="toggle-dec-btn" onClick={() => toggleMode()}>
                        Toggle to: {isDecorating ? "Navigate Mode" : "Decorate Mode"}
                    </button>
                    <button id="return-to-origin-btn" onClick={() => handleReturnToOrigin()}>
                        Return To Origin
                    </button>
                    <button id="clear-all-btn" onClick={() => handleClearAll()}>
                        Clear All
                    </button>
                    <button id="exit-model-view-btn" onClick={() => handleExitView()}>
                        Exit Model View
                    </button>
                </div>
                <ol>
                    {imageOpts}
                </ol>
            </div>

        </div>
    )
}