import {useState, useEffect, useRef} from 'react';
import DisplayModel from '../displayModel.jsx';
import api from '../../api.js'

export default function EditCustomView({curState, curUser, setCurState}) {
    const [imageArray, setImageArray] = useState([]);
    const [curProject, setCurProject] = useState({
        projType: curState.spec || 'Board-Rect',
        title: '',
        description: '',
        size: '',
        images: [],
        designPos: [],
        status: 'Draft'
    });

    switch(curState.mode) {
        case 'image':
            return <ImageFilter 
                curState={curState}
                setCurState={setCurState}
                imageArray={imageArray}
                setImageArray={setImageArray}
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
                />
        default:
            throw new Error("Unrecognized spec in editCustomView");
    }
}

function EditCustom({curState, curUser, setCurState, imageArray, setImageArray, curProject, setCurProject}) {
    const [selectedDesign, setSelectedDesign] = useState(null);

    function updateProject(key, value) {
        setCurProject(prev => ({...prev, [key]: value}))
    }

    function handleDelete(e, imgOfIminentDoomInd) {
        e.stopPropagation();
        setImageArray(imageArray.filter((images, i) => i !== imgOfIminentDoomInd));
    }

    async function handleSaveProject() {
        await api.post('/projects', {
            ...curProject,
            images: imageArray,
            creatorID: curUser.userID
        })
    }

    const imageList = imageArray.map((image, i) => (
        <li key={i} className="dash-deco-opt" onClick={() => setSelectedDesign(i)} onDoubleClick={() => setCurState({...curState, mode: 'image'})}>
            <img id="dash-deco-icon"
                src={image}
                alt={`Design #${i+1}`}
            />
            <button id="delete-deco" onClick={(e) => handleDelete(e, i)}/>
        </li>
    ));
    
    return (
        <div id="edit-view">
            <DisplayModel projType={curProject.projType}/>
            <div id="edit-dash">
                <button onClick={() => handleSaveProject()}>
                    Save
                </button>
                <select value={curProject.projType} onChange={(e) => updateProject('projType', e.target.value)}>
                    <option value='Board-Rect'>
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
                <button id="new-image" disabled={imageArray.length > 2} onClick={() => setCurState({...curState, mode: 'image'})}>
                    New Image
                </button>
                <ol id="submitted-images">
                    Double Click To Edit
                    {imageList}
                </ol>
            </div>
        </div>
    )
}

//https://www.youtube.com/watch?v=e_QGePW-GBw&t=806s This really just goes to this creator, my experience with image proc in
//canvas goes as far as this watch. Didnt copy paste, but certainly a good amount of this is just watch and print lol
//https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toBlob

function ImageFilter({setCurState, imageArray, setImageArray, curProject}) {
    const canvasRef = useRef(null);
    const fileRef = useRef(null);
    const [image, setImage] = useState(null);
    const [imageType, setImageType] = useState('logo');
    const [settings, setSettings] = useState({
        saturation: 200,
        inversion: 0,
        contrast: 200,
        grayscale: 100
    });

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

    function handleFileChange(cur) {
        const imgFile = cur.target.files;
        if (!imgFile) return;

        const img = new Image();
        img.onload = () => setImage(img);
        img.src = URL.createObjectURL(imgFile[0]);
    }

    function handleSave() {
        const canvas = canvasRef.current;
        canvas.toBlob((blob) => {
            const url = URL.createObjectURL(blob);
            setImageArray([...imageArray, url]);
            setCurState({curView: 'custom', spec: curProject, mode: 'edit'});
        }, 'image/png');
    }

    function handleCancel() {
        setCurState({curView: 'custom', spec: curProject, mode: 'edit'});
    }

    function updateSetting(key, value) {
        setSettings((prev) => ({...prev, [key]: value}));
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
                <label className="switch" htmlFor="image-type">
                    For realistic pictures\n
                    (otherwise for logo/cartoon w/ white background)
                </label>
                <input 
                    type="checkbox"
                    className="slider round"
                    id="image-type"
                    onChange={(e) => setImageType(e.target.checked ? 'picture' : 'logo')}
                />
                <button onClick={handleCancel}>
                    Cancel
                </button>
                <button id="save-image-btn" onClick={handleSave}>
                    Confirm
                </button>
            </div>
            <div className="image-area">
                <canvas ref={canvasRef}></canvas>
            </div>
        </div>
    )
}