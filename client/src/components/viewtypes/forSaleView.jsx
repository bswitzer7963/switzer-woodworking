import {useState, useEffect} from 'react';
import api from '../../api.js'

export default function ForSaleView({setCurState}) {
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
        setCurState({curView: 'listing', spec: specListing, mode: null});
    }

    let listedListings;
    if (curForSale.length === 0) {
        listedListings = 
            <h1>
                Sorry, there are no listings yet...
            </h1>
    }
    else {
        listedListings = curForSale.map((listing) => (
            <li key={listing.existingID} onClick={() => handleSaleButton(listing)}>
                <div className="listing-header">
                    <h1>
                        {listing.title}
                    </h1>
                    <h1>
                        {listing.price}
                    </h1>  
                </div>
            </li>
        ));
    }

    return (
        <div id="for-sale-view">
            <h1 id="for-sale-header">
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
