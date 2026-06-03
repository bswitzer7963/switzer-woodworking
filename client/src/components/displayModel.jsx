//Source: https://sbcode.net/react-three-fiber/use-gltf/
//Background Image: https://polyhaven.com/a/ticknock_02

import {useState, useEffect, useRef} from 'react';
import {Canvas} from '@react-three/fiber';
import {OrbitControls, Environment, useGLTF, ContactShadows, useTexture} from '@react-three/drei';


//import {ModelComponent} from './modelComponent.jsx'; deprecated
import {Board_Round} from './modelComponents/Board_Round.jsx';
import {Board_Rect} from './modelComponents/Board_Rect.jsx';
import {Bowl} from './modelComponents/Bowl.jsx';

//remove projtype when able to send real project obj
export default function DisplayModel({projType, setSelectedDesign, selectedDesign, imageArray, imageInfoArray, setImageInfoArray,
    dAngle, setDAngle, dPos, setDPos, dRot, setDRot, dScale, setDScale
}) {
    const curModelDefaults = {
        'Bowl': {
            defaultAngle: Math.PI / 4,
            defaultY: 0.75,
            defaultScale: [1, 1, 1],
            defaultRot: [0, Math.atan2(Math.cos(Math.PI / 4), Math.sin(Math.PI / 4)), 0]

        },
        'CuttingBoardRect': {
            defaultAngle: 0,
            defaultY: 0.1,
            defaultScale: [1, 1, 0.2],
            defaultRot: [Math.PI / 2, 0, Math.PI]
        },
        'CuttingBoardRound': {
            defaultAngle: 0,
            defaultY: 0.1,
            defaultScale: [1, 1, 0.2],
            defaultRot: [Math.PI / 2, 0, Math.PI]
        }
    };

    //scrapping decorate mode, realized the autoSpin was exclusively bothersome lol
    //Moved the decal info up to editcustomview, passed as prop to here

    const modelOpts = {
        'CuttingBoardRect': Board_Rect,
        'CuttingBoardRound': Board_Round,
        'Bowl': Bowl
    };

    const CurModel = modelOpts[projType] || Bowl;

    useEffect(() => {
        const cur = curModelDefaults[projType] || curModelDefaults['Bowl'];
        setDAngle(cur.defaultAngle);
        setDPos([Math.cos(cur.defaultAngle), cur.defaultY, Math.sin(cur.defaultAngle)]);
        setDScale(cur.defaultScale);
        setDRot(cur.defaultRot);
    }, [selectedDesign]);

    function move(dir) {
        if (projType.startsWith('Cutting')) {
            setDPos(prev => {
                const [x, y, z] = prev;
                switch(dir) {
                    case 'up':
                        return [x, y, z - 0.1];
                    case 'down': 
                        return [x, y, z + 0.1];
                    case 'left': 
                        return [x - 0.1, y, z];
                    case 'right': 
                        return [x + 0.1, y, z];
                    default:
                        throw new Error("Unrecognized direction in diaplyModel (board)");
                }
            });
        }
        else {
            if (dir == 'up' || dir === 'down') {
                setDPos(prev => {
                    const [x, y, z] = prev;
                    const change = dir === 'up' ? 0.1 : -0.1;
                    return [x, y + change, z];
                });
            }
            else if (dir == 'left' || dir === 'right') {
                setDAngle(prev => {
                    const change = dir === 'right' ? -0.1 : 0.1;
                    const postChange = prev + change;
                    const x = Math.cos(postChange);
                    const z = Math.sin(postChange);
                    const rot = Math.atan2(x, z);
                    setDRot(() => [0, rot, 0]);
                    setDPos((pos) => [x, pos[1], z]);
                    return postChange;
                });
            }
        }
    }

    function scale(dir) {
        setDScale(prev => {
            const [x, y, z] = prev;
            if (dir === 'up') {
                return [x + 0.1, y + 0.1, z];
            }
            else if (dir ==='down') {
                return [x - 0.1, y - 0.1, z];
            }
            else {
                throw new Error("Unrecognized scale dir in displayModel");
            }
        });
    }

    function rotate(dir) {
        setDRot(prev => {
            const [x, y, z] = prev;
            if (dir === 'right') {
                return [x, y, z + 0.1];
            }
            else if (dir ==='left') {
                return [x, y, z - 0.1];
            }
            else {
                throw new Error("Unrecognized rot dir in displayModel");
            }
        });
    }

    function handleReturnToOrigin() {
        const cur = curModelDefaults[projType] || curModelDefaults['Bowl'];
        setDAngle(cur.defaultAngle);
        setDPos([Math.cos(cur.defaultAngle), cur.defaultY, Math.sin(cur.defaultAngle)]);
        setDScale(cur.defaultScale);
        setDRot(cur.defaultRot);
    }

    function handleClearAll() {
        //LOOKAT, gotta be something deeper here to consider lol
        setImageInfoArray([]);
    }

    function handleExitView() {
        console.log('Exit Fullscreen')
    }

    //Add a design selector, can move between placed designs, not sure if i want to allow multiple of the same design
    function handlePlaceDesign() {
        setImageInfoArray(prev => {
            const arr = [...prev];
            arr[selectedDesign] = {
                design: imageArray[selectedDesign],
                angle: dAngle,
                pos: dPos,
                rot: dRot,
                scale: dScale
            };
            return arr;
        });
        setSelectedDesign(null);
    }


    let curDesignUrl = null;

    if (selectedDesign !== null) {
        curDesignUrl = imageArray[selectedDesign]?.filtered;
    }

    const modelUrl = modelOpts[projType] || modelOpts['Bowl'];

    return (
        <div id="cavas-w-dash">
            <div id="three-canvas-space">
                <Canvas camera={{position: [0, 2, 4], near: 0.01}} gl={{preserveDrawingBuffer: true}}>
                    <Environment preset="forest" background/>
                    <fog attach="fog" args={['black', 15, 20]} />
                    <CurModel
                        mUrl={modelUrl}
                        imageArray={imageArray}
                        imageInfoArray={imageInfoArray}
                        selectedDesign={selectedDesign}
                        dUrl={curDesignUrl}
                        dPos={dPos}
                        dRot={dRot}
                        dScale={dScale}
                    />
                    <OrbitControls 
                        autoRotate={false}
                    />
                </Canvas>
            </div>
            <div id="canvas-dash">
                <div id="canvas-dash-btns">
                    <div id="move-ctrls">
                        <button id="move-left" onClick={() => move('left')}>
                            L
                        </button>
                        <button id="move-up" onClick={() => move('up')}>
                            Up
                        </button>
                        <button id="move-down" onClick={() => move('down')}>
                            Down
                        </button>
                        <button id="move-right" onClick={() => move('right')}>
                            R
                        </button>
                    </div>
                    <div id="scale-ctrls">
                        <button id="scale-up" onClick={() => scale('up')}>
                            Up
                        </button>
                        <button id="scale-down" onClick={() => scale('down')}>
                            Down
                        </button>
                    </div>
                    <div id="rot-ctrls">
                        <button id="rot-left" onClick={() => rotate('left')}>
                            L
                        </button>
                        <button id="rot-right" onClick={() => rotate('right')}>
                            R
                        </button>
                    </div>
                    <button id="place-design-btn" onClick={() => handlePlaceDesign()}>
                        Place Design
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
            </div>

        </div>
    )
}