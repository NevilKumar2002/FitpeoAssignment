import React from "react";
import SearchImg from "../images1/search.svg"
const WishingContainer=()=>{
    return(
        <div className="wishing-first-container">
            <h2>Hello Sharukh 👋</h2>
            <div className="input-div">
                <img src={SearchImg} alt=""/>
            <input type="search"  placeholder="Search"/>
            </div>
           

        </div>
    )

}
export default WishingContainer;