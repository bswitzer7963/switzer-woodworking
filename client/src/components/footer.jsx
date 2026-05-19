import {useState, useEffect} from 'react';
import axios from 'axios';

export default function Footer({curState, setCurState, curUser, setCurUser}) {   
    function handleFooterButton(specType) {
        setCurState({curView: 'info', spec: specType});
    }

    return ( 
        <div id="info-section">
            <button id="about" onClick={() => handleFooterButton('about')}>
                About
            </button>
            <button id="create-info" onClick={() => handleFooterButton('create-info')}>
                Creating this app
            </button>
            <button id="contact" onClick={() => handleFooterButton('contact')}>
                Contact Now
            </button>
        </div>
    )
}           
