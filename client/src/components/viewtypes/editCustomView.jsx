import {useState, useEffect} from 'react';
import api from '../../api.js'

export default function EditCustomView({curUser, curState, setCurUser, setCurState}) {
    switch(curState.spec) {
        case 'edit':
            return <EditCustom
                curUser={curUser}
                setCurUser={setCurUser}
                curState={curState}
                setCurState={setCurState}
                />
        case 'new':
            return <StartNew
                setCurState={setCurState}
                />
        default:
            throw new Error("Unrecognized view in editCustomView");
    }
}

function EditCustom({curUser, curState, setCurUser, setCurState}) {

}

function StartNew({curState, setCurState}) {
    const [type, setType] = useState(curState.spec);
}