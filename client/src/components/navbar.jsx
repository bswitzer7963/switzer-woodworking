import {useState, useEffect} from 'react';
import axios from 'axios';

export default function NavBar({curState, setCurState, curUser, setCurUser}) {

    function handleClick(btn) {
        switch(btn) {
            case 'contact':
                setCurState({curView: 'info', spec: 'contact'});
                break;
            case 'login':
                setCurState({curView: 'auth', spec: 'main'});
                break;
            case 'home':
                setCurState({curView: 'main', spec: null});
                break;
            case 'tweak':
                setCurState({curView: 'image-proc-debug', spec: null});
                break;
            default:
                throw new Error("Unrecognized button in navbar");
        }
    }

    function handleLogin() {
        setCurState({curView: 'auth', spec: 'main'});
    }



    let greeting = null;
    if (curUser) {
        greeting = (
            <h1>
                Hey {curUser.fName}
            </h1>
        );
    }

    return (
        <div id="navbar">
            {greeting}
            <div id="nav-btns">
                <button id="home-btn" onClick={() => handleClick('home')}>
                    Home
                </button>
                <button id="contact-btn" onClick={() => handleClick('contact')}>
                    Contact
                </button>
                <button id="login-btn" onClick={() => handleLogin('login')}>
                    Login/Register
                </button>
                <button id="temp-imageproc-btn" onClick={() => handleClick('tweak')}>
                    Tweak Images
                </button>
            </div>
        </div>
    )
}