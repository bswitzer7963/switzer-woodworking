//Source: https://sbcode.net/react-three-fiber/use-gltf/
//Background Image: https://polyhaven.com/a/ticknock_02

import {useState, useEffect, useRef} from 'react';
import {Canvas} from '@react-three/fiber';
import {OrbitControls, Environment, useGLTF, ContactShadows, useTexture} from '@react-three/drei';

import {Board_Rect} from '../../public/modelComponent/Board_Rect.jsx';
import {Bowl} from '../../public/modelComponent/Bowl.jsx';

//remove projtype when able to send real project obj
export default function DisplayModel({projType, selectedDesign, imageArray, placedDesigns, setPlacedDesigns}) {
    const curModelDefaults = {
        'Bowl': {
            defaultAngle: Math.PI / 4,
            defaultY: 0.75,
            defaultScale: [1, 1, 1],
            defaultRot: [0, 0, 0]

        },
        'Board-Rect': {
            defaultAngle: 0,
            defaultY: 0,
            defaultScale: [0.5, 0.5, 0.5],
            defaultRot: [Math.PI / 2, 0, 0]
        }
    };

    const [isSpinning, setIsSpinning] = useState(true);
    const [isDecorating, setIsDecorating] = useState(false);
    //Tuned for bowl to show first, ironically my first working model
    let defaultAngle = Math.PI / 4;
    const [dAngle, setDAngle] = useState(defaultAngle);
    const [dPos, setDPos] = useState([Math.cos(defaultAngle), 0.75, Math.sin(defaultAngle)]);
    //Kinda ugly, but i have too many vars as is
    const [dRot, setDRot] = useState([0, Math.atan2(Math.cos(defaultAngle), Math.sin(defaultAngle)), 0]);
    //Might have to change depending on model v
    const [dScale, setDScale] = useState([1, 1, 1]);
    const timer = useRef(null);


    const modelOpts = {
        'Board-Rect': Board_Rect,
    /*     'Bat': Bat,*/
        'Bowl': Bowl
    };

    const CurModel = modelOpts[projType] || Bowl;

    useEffect(() => {
        const cur = curModelDefaults[projType] || curModelDefaults['Bowl'];
        setDAngle(cur.defaultAngle);
        setDPos([Math.cos(defaultAngle), cur.defaultY, Math.sin(defaultAngle)]);
        setDScale(cur.defaultScale);
        setDRot(cur.defaultRot);
    }, []);

    //const curModel = modelOpts.find((type) => type.title === projType) || modelOpts[0];
    function move(dir) {
        if (projType.startsWith('Board')) {
            setDPos(prev => {
                const [x, y, z] = prev;
                switch(dir) {
                    case 'up':
                        return [x, y, z + 0.1];
                    case 'down': 
                        return [x, y, z - 0.1];
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
            }, 6000);
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

    function handleReturnToOrigin() {
        console.log('Send back to center')
    }

    function handleClearAll() {
        console.log('Restart changes')
    }

    function handleExitView() {
        console.log('Exit Fullscreen')
    }

    let curDesignUrl = null;

    if (selectedDesign !== null) {
        curDesignUrl = imageArray[selectedDesign]?.filtered
        console.log('selectedDesign:', selectedDesign)
        console.log('curDesignUrl:', curDesignUrl)
    }

    return (
        <div id="cavas-w-dash">
            <div id="three-canvas-space">
                <Canvas camera={{position: [0, 2, 4], near: 0.025}}>
                    {/* <Environment files="/background.hdr" background blur={0.1}/> */}
                    <Environment preset="forest" background/>
                    <fog attach="fog" args={['black', 15, 20]} />
                    <CurModel
                        dUrl={curDesignUrl}
                        dPos={dPos}
                        dRot={dRot}
                        dScale={dScale}
                    />
                    <OrbitControls 
                        enabled={!isDecorating}
                        autoRotate={false}
                        onStart={handleClick}
                        onEnd={handleUnClick}
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
                    <button id="toggle-dec-btn" onClick={() => toggleMode()}>
                        Toggle to: {isDecorating ? "View Mode" : "Decorate Mode"}
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