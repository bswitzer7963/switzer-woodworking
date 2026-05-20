import {useState, useEffect} from 'react';
import api from '../../api.js'

export default function EditCustomView({curState, curUser, setCurState}) {
    const [imageArray, setImageArray] = useState([]);
    switch(curState.spec) {
        case 'image':
            return <ImageFilter 
                curState={curState}
                setCurState={setCurState}
                imageArray={imageArray}
                setImageArray={setImageArray}
                />
        case 'edit':
            return <EditCustom 
                curState={curState}
                setCurState={setCurState}
                imageArray={imageArray}
                setImageArray={setImageArray}
                />
        default:
            throw new Error("Unrecognized spec in editCustomView");
    }
}

function EditCustom({curState, curUser, setCurState, imageArray, setImageArray}) {
    const [curType, setCurType] = useState("");
    const [curSize, setCurSize] = useState("");
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    
    const [selectedDesign, setSelectedDesign] = useState(null);
    const [tweakingDeco, setTweakingDeco] = useState(false);

    function handleDelete(imgOfIminentDoomInd) {
        e.propa
        setImageArray(imageArray.filter((images, i) => i !== imgOfIminentDoomInd));
    }
    
    const imageList = imageArray.map((image, i) => (
        <li key={i} className="dash-deco-icon" onClick={() => setSelectedDesign(i)}>
            src={image}
            alt={`Design #${i+1}`}
            <button id="delete-deco" onClick={(e) => handleDelete(e, i)}/>
        </li>
    ));
    return (
        <div id="edit-view">
            <DisplayModel projType="Bowl"/>
            <div id="edit-dash">
                <button onClick={() => handleSaveProject()}>
                    Save
                </button>
                <select onChange={handleChangeType}>
                    <option value="board-rect">
                        Rectangle CuttingBoard
                    </option>
                    <option value="board-sq">
                        Square CuttingBoard
                    </option>
                    <option value="bat">
                        Bat
                    </option>
                    <option value="bowl">
                        Bowl
                    </option>
                    <option value="emblem">
                        Emblem
                    </option>
                    <option value="custom">
                        Custom
                    </option>
                </select>
                <input 
                    id="project-title"
                    type="text"
                    placeholder={`${curUser.fName}'s Masterpiece`}
                    value={title}
                    minLength="1"
                    maxLength="25"
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input 
                    id="project-desc"
                    type="text"
                    placeholder={curUser.fName}
                    value={title}
                    maxLength="500"
                    onChange={(e) => setTitle(e.target.value)}
                />
                <button id="new-image" disabled={imageArray.length > 2}>
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

function ImageFilter({setCurState, imageArray, setImageArray}) {
    const canvasRef = useRef(null);
    const fileRef = useRef(null);
    const [image, setImage] = useState(null);
    const [imageType, setImageType] = userState('logo');
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
            onChange({confirmed: true, url});
        }, 'image/png');
        setImageArray([...imageArray, result.url]);
        setCurState({curView: 'custom', spec: 'edit'});
    }

    function handleCancel() {
        setCurState({curView: 'custom', spec: 'edit'});
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
                    checked={setImageType('picture')}
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
}