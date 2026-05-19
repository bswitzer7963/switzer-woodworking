import {useState, useEffect} from 'react';
import axios from 'axios';

export default function NavBar({curState, setCurState, curUser, setCurUser}) {

    function handleContact() {

    }

    function handleLogin() {
        setCurState('welcome');
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
                <button id="contact-btn" onClick={handleContact}>
                    Contact
                </button>
                <button id="login-btn" onClick={handleLogin}>
                    Login/Register
                </button>
            </div>
        </div>
    )
}