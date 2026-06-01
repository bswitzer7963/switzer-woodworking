import {useState, useEffect} from 'react';
import axios from 'axios';

//LOOKAT CHANGE FOR SALE TO TOP 3, MOVE FILTERS/SORT TO NEXT PAGE
export default function MainView({curState, setCurState, curUser, setCurUser}) {
    const [curForSale, setCurForSale] = useState([]);

    //Need axios get call to set curForSale (do only top 3 here)

    function handleCustom(specType) {
        setCurState({curView: 'custom', spec: specType, mode: 'edit'});
    }

    function handleSaleButton(specListing) {
        setCurState({curView: 'listing', spec: specListing, mode: null});
    }

    let inProgress;
    if (curUser) {
        inProgress =
            <button id="see-existing-btn" onClick={() => setCurState({curView: 'account', spec: null, mode: null})}>
                See {curUser.fName}'s Saved Projects
            </button>
    }
    else {
        inProgress = 
            <>
                Login To Save New or Resume Existing Projects
            </>
    }

    const listedListings = curForSale.map((listing) => {
        <li key={curForSale.listingID}>
            <div className="listing-header">
                <h1>
                    {listing.title}
                </h1>
                <h1>
                    {listing.price}
                </h1>  
            </div>
            <button id="listing-btn" onClick={() => handleSaleButton(listing)}>
                View
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
                <button id="new-cuttingboard-rect-btn" onClick={() => handleCustom('CuttingBoardRect')}>
                    New Cutting Board (Rectangle)
                </button>
                <button id="new-cuttingboard-rnd-btn" onClick={() => handleCustom('CuttingBoardRound')}>
                    New Cutting Board (Round)
                </button>
                <button id="new-bowl-btn" onClick={() => handleCustom('Bowl')}>
                    New Bowl
                </button>
                <button id="new-sign-btn" onClick={() => handleCustom('Sign')}>
                    New Sign
                </button>
                <button id="new-emblem-btn" onClick={() => handleCustom('Emblem')}>
                    New Emblem
                </button>
                <button id="new-custom-btn" onClick={() => handleCustom('Custom')}>
                    New Custom Project
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
            <button id="see-more-for-sale-btn" onClick={() => setCurState({curView: 'for-sale', spec: null, mode: null})}>
                See More
            </button>
        </div>
    )
}
