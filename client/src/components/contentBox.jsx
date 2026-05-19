import {useState, useEffect} from 'react';
import axios from 'axios';

export default function ContentBox({curState, setCurState, curUser, setCurUser}) {
    const [curExisting, setCurExisting] = useState([]);

    function handleCustom() {
        setCurState('custom');
    }

    function handleSaleButton() {
        setCurState('listings');
    }
    function handleFooterButton() {
        setCurState('custom');
    }

    const listed = curExisting.map((listing) => {
        <li key={curExisting.listingID}>
            <div className="listing-header">
                <h1>
                    {listing.title}
                </h1>
                <h1>
                    {listing.price}
                </h1>  
            </div>
            <button id="listing-btn" onClick={handleListing}>
                See More
            </button>
        </li>
    });

    return (
        <div id="content-box">
            <h1 id="new-proj-header">
                Start New Project
            </h1>
            <div id="new-proj-btn-section">
                <button id="new-cuttingboard-btn" onClick={() => handleStartNew('cuttingboard')}>
                    New Cutting Board
                </button>
                <button id="new-bat-btn" onClick={() => handleStartNew('bat')}>
                    New Bat
                </button>
                <button id="new-bowl-btn" onClick={() => handleStartNew('bowl')}>
                    New Bowl
                </button>
                <button id="new-sign-btn" onClick={() => handleStartNew('sign')}>
                    New Sign
                </button>
                <button id="new-emblem-btn" onClick={() => handleStartNew('emblem')}>
                    New Emblem
                </button>
                <button id="new-custom-btn" onClick={() => handleStartNew('custom')}>
                    New Custom Request
                </button>
            </div>
            <h1 id="for-sale-section">
                For Sale
            </h1>
            <div id="sort-specs">
                <select id="sort-dropdown">
                    <option value="Featured">
                        Featured
                    </option>
                    <option value="popular">
                        Popular
                    </option>
                    <option value="price">
                        Price ()
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
            <ol id="for-sale">
                {listed}
            </ol>
            <div id="info-section">
                <button id="about">
                    About
                </button>
                <button id="create-info">
                    Creating this app
                </button>
                <button id="contact" onClick={sendTo}>
                    Contact Now
                </button>
            </div>
        </div>
    )
}
