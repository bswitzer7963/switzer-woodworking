//I am aware this is insanely ugly at the moment, I will go back and simplify what i can visually, lint check etc
import {useState, useEffect, useRef} from 'react';
import DisplayModel from '../displayModel.jsx';
import {removeBackground} from '@imgly/background-removal';
import html2canvas from 'html2canvas';
import api from '../../api.js'

export default function EditCustomView({curState, curUser, setCurState}) {
    const [imageArray, setImageArray] = useState([{orig: '/quag_cleaned.png', filtered: '/quag_cleaned.png'}]);
    const [imageInfoArray, setImageInfoArray] = useState([]);
    const [selectedDesign, setSelectedDesign] = useState(null);
    const [curProject, setCurProject] = useState({
        projType: curState.spec || 'CuttingBoardRect',
        title: '',
        description: '',
        size: 'Custom',
        imgList: [],
        imgInfo: {}
    });

    //Tuned for bowl to show first, ironically my first working model
    let defaultAngle = Math.PI / 4;
    const [dAngle, setDAngle] = useState(defaultAngle);
    const [dPos, setDPos] = useState([Math.cos(defaultAngle), 0.75, Math.sin(defaultAngle)]);
    //Kinda ugly, but i have too many vars as is
    const [dRot, setDRot] = useState([0, Math.atan2(Math.cos(defaultAngle), Math.sin(defaultAngle)), 0]);
    //Might have to change depending on model v
    const [dScale, setDScale] = useState([1, 1, 1]);
    

    switch(curState.mode) {
        case 'image':
            return <ImageFilter 
                curState={curState}
                setCurState={setCurState}
                imageArray={imageArray}
                setImageArray={setImageArray}
                selectedDesign={selectedDesign}
                setSelectedDesign={setSelectedDesign}
                />
        case 'edit':
            return <EditCustom 
                curUser={curUser}
                curState={curState}
                setCurState={setCurState}
                imageArray={imageArray}
                setImageArray={setImageArray}
                curProject={curProject}
                setCurProject={setCurProject}
                selectedDesign={selectedDesign}
                setSelectedDesign={setSelectedDesign}
                dAngle={dAngle}
                setDAngle={setDAngle}
                dPos={dPos}
                setDPos={setDPos}
                dRot={dRot}
                setDRot={setDRot}
                dScale={dScale}
                setDScale={setDScale}
                imageInfoArray={imageInfoArray}
                setImageInfoArray={setImageInfoArray}
                />
        default:
            throw new Error("Unrecognized spec in editCustomView");
    }
}

function EditCustom({
    curState, curUser, setCurState, imageArray, setImageArray, curProject, setCurProject, selectedDesign, setSelectedDesign, setImageInfoArray, imageInfoArray,
    dAngle, setDAngle, dPos, setDPos, dRot, setDRot, dScale, setDScale
}) {
    function updateProject(key, value) {
        setCurProject(prev => ({...prev, [key]: value}))
    }

    function handleDelete(e, imgOfIminentDoomInd) {
        e.stopPropagation();
        setImageArray(imageArray.filter((image, i) => i !== imgOfIminentDoomInd));
    }

    //DC to: https://stackoverflow.com/questions/18650168/convert-blob-to-base64
    function blobToBase64(blob) {
        return new Promise((resolve, _) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result);
            reader.readAsDataURL(blob);
        });
    }

    async function handleSaveProject() {
        const canvas = document.getElementById("three-canvas-space");
        const snapshot = await html2canvas(canvas);
        const ssUrl = snapshot.toDataURL('image/png');

        const saveable = []

        for (const img of imageArray) {
            const orig = img.orig.startsWith('blob:') ? await blobToBase64(img.orig) : img.orig;
            const filtered = img.filtered.startsWith('blob:') ? await blobToBase64(img.filtered) : img.filtered;
            saveable.push({orig, filtered});
        }

        await api.post(`/users/${curUser.userID}/projects`, {
            ...curProject,
            imgList: saveable,
            imgInfo: imageInfoArray,
            creatorID: curUser.userID,
            snapshot: ssUrl
        });
    }


    const imageList = imageArray.map((image, i) => (
        <li key={i} className="dash-deco-opt" onClick={() => setSelectedDesign(i)}>
            <button id="edit-deco" onClick={(e) => {
                setSelectedDesign(i);
                setCurState({...curState, mode: 'image'});
            }}>
                WRENCH
            </button>
            <img id="dash-deco-icon"
                src={image.filtered}
                alt={`Design #${i+1}`}
            />
            <button id="delete-deco" onClick={(e) => handleDelete(e, i)}>
                X
            </button>
        </li>
    ));

    return (
        <div id="edit-view">
            <DisplayModel 
                projType={curProject.projType}
                selectedDesign={selectedDesign}
                imageArray={imageArray}
                dAngle={dAngle}
                setDAngle={setDAngle}
                dPos={dPos}
                setDPos={setDPos}
                dRot={dRot}
                setDRot={setDRot}
                dScale={dScale}
                setDScale={setDScale}
                imageInfoArray={imageInfoArray}
                setImageInfoArray={setImageInfoArray}
            />
            <div id="edit-dash">
                <button onClick={() => handleSaveProject()} disabled={!curUser}>
                    Save
                </button>
                <select value={curProject.projType} onChange={(e) => updateProject('projType', e.target.value)}>
                    <option value='CuttingBoardRect'>
                        Rectangle CuttingBoard
                    </option>
                    <option value='Board-Square'>
                        Square CuttingBoard
                    </option>
                    <option value='Bat'>
                        Bat
                    </option>
                    <option value='Bowl'>
                        Bowl
                    </option>
                    <option value='Emblem'>
                        Emblem
                    </option>
                    <option value='Custom'>
                        Custom
                    </option>
                </select>
                <input 
                    id="project-title"
                    type="text"
                    placeholder={`${curUser? curUser.fName : 'Guest'}'s Masterpiece`}
                    value={curProject.title}
                    minLength="1"
                    maxLength="25"
                    onChange={(e) => updateProject('title', e.target.value)}
                />
                <input 
                    id="project-desc"
                    type="text"
                    placeholder="Leave any information you feel might be useful..."
                    value={curProject.description}
                    maxLength="500"
                    onChange={(e) => updateProject('description', e.target.value)}
                />
                <select value={curProject.size} onChange={(e) => updateProject('size', e.target.value)}>
                    <option value='Small'>
                        Small
                    </option>
                    <option value='Medium'>
                        Medium
                    </option>
                    <option value='Large'>
                        Large
                    </option>
                    <option value='Custom'>
                        Custom EXPLAIN IN DESC
                    </option>
                </select>
                <button id="new-image" disabled={imageArray.length > 2} onClick={() => {
                    setCurState({...curState, mode: 'image'});
                    setSelectedDesign(null);
                }}>
                    New Image
                </button>
                <ol id="submitted-images">
                    {imageList}
                </ol>
            </div>
        </div>
    )
}

//https://www.youtube.com/watch?v=e_QGePW-GBw&t=806s This really just goes to this creator, my experience with image proc in
//canvas goes as far as this watch. Didnt copy paste, but certainly a good amount of this is just watch and print lol
//https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toBlob

function ImageFilter({curState, setCurState, imageArray, setImageArray, curProject, selectedDesign, setSelectedDesign}) {
    const canvasRef = useRef(null);
    const fileRef = useRef(null);
    const [image, setImage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [settings, setSettings] = useState({
        saturation: 200,
        inversion: 0,
        contrast: 200,
        grayscale: 100
    });

    //Preload if we have a selected (editing that selected image, else ask for one)
    useEffect(() => {
        if (selectedDesign === null) return;

        const img = new Image();
        img.onload = () => setImage(img);
        img.src = imageArray[selectedDesign].orig;
    }, []);

    useEffect(() => {
        if (!image) return;
        renderImage();
    }, [image, settings]);

    function renderImage() {
        const canvas = canvasRef.current;
        canvas.width = image.width;
        canvas.height = image.height;

        const canvasCtx = canvas.getContext('2d');

        canvasCtx.filter = generateFilter();
        canvasCtx.drawImage(image, 0, 0);
    }

    function generateFilter() {
        return `saturate(${settings.saturation}%) invert(${settings.inversion}%) contrast(${settings.contrast}%) grayscale(${settings.grayscale}%)`;
    }

    async function handleFileChange(cur) {
        const imgFile = cur.target.files;
        if (!imgFile) return;

        setIsLoading(true);
        //Remove background with imgly, had to use small model cuz it took digustingly long with med
        const imgWOBG = await removeBackground(imgFile[0], {model: 'small'});
        const urlWOBG = URL.createObjectURL(imgWOBG);

        const img = new Image();
        img.onload = () => {
            setImage(img);
            setIsLoading(false);
        };
        img.src = urlWOBG;
    }

    async function handleSave() {
        const canvas = canvasRef.current;
        canvas.toBlob((blob) => {
            const url = URL.createObjectURL(blob);

            //Should probably switch to 1 indexing cuz this is ugly
            if (selectedDesign !== null) {
                let temp = [...imageArray];
                temp[selectedDesign] = {...temp[selectedDesign], filtered: url};
                setImageArray(temp);
            }
            else {
                setImageArray([...imageArray, {orig: image.src, filtered: url}]);
            }
            setSelectedDesign(null);
            setCurState({...curState, mode: 'edit'});
        }, 'image/png');
        setSelectedDesign(null);
    }

    function handleCancel() {
        setCurState({...curState, mode: 'edit'});
    }

    function updateSetting(key, value) {
        setSettings((prev) => ({...prev, [key]: value}));
    }

    let loadMess = null;
    if (isLoading) {
        loadMess = 
            <h2 id="load-message">
                Loading... (This might take a while)
            </h2>
    }

    return (
        <div id="image-confirm-page">
            <div className="toolbar">
                <div className="toolbar-item">
                    <input 
                        type="file" 
                        ref={fileRef}
                        onChange={handleFileChange}
                    />
                </div>
                <label className="switch" htmlFor="inversion">
                    Invert
                </label>
                <input 
                    type="checkbox"
                    className="slider round"
                    id="inversion"
                    checked={settings.inversion === 100}
                    onChange={(e) => updateSetting('inversion', e.target.checked ? 100 : 0)}
                />
                <button onClick={handleCancel}>
                    Cancel
                </button>
                <button id="save-image-btn" onClick={handleSave}>
                    Confirm
                </button>
            </div>
            <div className="image-area">
                {loadMess}
                <canvas ref={canvasRef}></canvas>
            </div>
        </div>
    )
}