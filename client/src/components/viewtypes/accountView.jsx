import {useState, useEffect} from 'react';
import api from '../../api.js'

export default function AccountView({curUser, setCurState}) {
    const [curSaved, setCurSaved] = useState([]);

    useEffect(() => {
        api.get(`/users/${curUser.userID}/projects`)
            .then(res => {
                setCurSaved(res.data)
            })
            .catch(err => {
                console.error("Failed to GET saved", err)
            })
    }, []);

    function handleClickSaved(specSaved) {
        setCurState({curView: 'custom', spec: specSaved, mode: 'edit'});
    }

    let listedSaved;
    if (curSaved.length === 0) {
        listedSaved = 
            <>
                <h2>
                    Seems like we haven't made any drafts yet, try making some on the home page!
                </h2>
                <button id="home-from-account" onClick={() => setCurState({curView: 'main', spec: null, mode: null})}>
                    To Home
                </button>
            </>
    }
    else {
        listedSaved = curSaved.map((project) => (
            <li key={project.projID} onClick={() => handleClickSaved(project)}>
                <div className="project-header">
                    <h1>
                        {project.projTitle}
                    </h1>
                    <img src={project.snapshot} alt="Snapshot not found" className="saved-snapshot" />
                </div>
            </li>
        ));
    }

    return (
        <div id="account-view">
            <h1 id="account-header">
                {curUser.fName}'s Account
            </h1>
            <h3 id="account-desc">
                Your Saved Masterpieces...
            </h3>
            <div id="sort-specs">
                <select id="sort-dropdown">
                    <option value="favorite">
                        Favorite
                    </option>
                    <option value="type">
                        Type
                    </option>
                    <option value="posted">
                        Posted Date
                    </option>
                </select>
                <select id="order">
                    <option value="ascending">
                        Ascending
                    </option>
                    <option value="descending">
                        Descending
                    </option>
                </select>           
            </div>
            <ol id="saved">
                {listedSaved}
            </ol>
        </div>
    )
}
