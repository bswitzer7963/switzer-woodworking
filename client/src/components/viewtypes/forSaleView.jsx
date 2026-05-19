import {useState, useEffect} from 'react';
import api from '../api.js'
import axios from 'axios';

export default function MainView({curState, setCurState, curUser, setCurUser}) {
    const [curForSale, setCurForSale] = useState([]);

    useEffect(() => {
        api.get('/forsale')
            .then(res => {
                setCurForSale(res.data)
            })
            .catch(err => {
                console.error("Failed to GET forsale", err)
            })
    }, [])

    function handleSaleButton(specListing) {
        setCurState({curView: 'listing', spec: specListing});
    }

    const listedListings = curForSale.map((listing) => {
        <li key={curForSale.existingID}>
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
        <div id="for-sale-view" onClick={() => handleClickListingBox()}>
            <h1 id="for-sale-section">
                For Sale
            </h1>
            <h3 id="for-sale-desc">
                Already made projects that are too good to go to waste
            </h3>
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
        </div>
    )
}
