import {useState, useEffect} from 'react';
import axios from 'axios';

//LOOKAT CHANGE FOR SALE TO TOP 3, MOVE FILTERS/SORT TO NEXT PAGE
export default function MainView({curState, setCurState, curUser, setCurUser}) {
    const [curExisting, setCurExisting] = useState([]);

    function handleCustom(specType) {
        setCurState({curView: 'custom', spec: specType});
    }

    function handleSaleButton(specListing) {
        setCurState({curView: 'listings', spec: specListing});
    }
    
    function handleFooterButton(specType) {
        setCurState({curView: 'info', spec: specType});
    }

    let inProgress;
    if (curUser) {
        inProgress =
            <button id="see-existing-btn">
                See {curUser.fName}'s Saved Projects
            </button>
    }
    else {
        inProgress = 
            <>
                Login To Save New or Resume Existing Projects
            </>
    }

    const listedListings = curExisting.map((listing) => {
        <li key={curExisting.listingID}>
            <div className="listing-header">
                <h1>
                    {listing.title}
                </h1>
                <h1>
                    {listing.price}
                </h1>  
            </div>
            <button id="listing-btn" onClick={() => handleSaleButton(listing)}>
                See More
            </button>
        </li>
    });

    return (
        <div id="main-view">
            <div id="in-progress">
                {inProgress}
            </div>
            <h1 id="new-proj-header">
                Start New Project
            </h1>
            <div id="new-proj-btn-section">
                <button id="new-cuttingboard-btn" onClick={() => handleCustom('cuttingboard')}>
                    New Cutting Board
                </button>
                <button id="new-bat-btn" onClick={() => handleCustom('bat')}>
                    New Bat
                </button>
                <button id="new-bowl-btn" onClick={() => handleCustom('bowl')}>
                    New Bowl
                </button>
                <button id="new-sign-btn" onClick={() => handleCustom('sign')}>
                    New Sign
                </button>
                <button id="new-emblem-btn" onClick={() => handleCustom('emblem')}>
                    New Emblem
                </button>
                <button id="new-custom-btn" onClick={() => handleCustom('custom')}>
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
                        Price
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
                {listedListings}
            </ol>
            <button id="see-more-for-sale-btn">
                See More
            </button>
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
        </div>
    )
}
