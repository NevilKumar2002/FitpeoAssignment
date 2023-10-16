import React from "react";
import box from "../images1/box.svg";
import dashboard from "../images1/nut.svg";
import customers from "../images1/person-square.svg";
import help from "../images1/question-square.svg";
import income  from "../images1/wallet2.svg";
import rightArrow from "../images1/chevron-right.svg";
import downArrow from "../images1/chevron-down.svg";
// import promote from "../images1/"
// import {FiArchive} from "react-icons/fi" 

// import ReactDOM  from "react-dom";
// console.log("nevil");

const LeftContainer = ()=>{
    return (
        <div className="navbar">
            <div className="Navbar-heading">
              
                <img src={dashboard} alt=""/>
                <h1>Dashboard</h1>
            </div>
            <div className="Navbar-components">
                <button className="component-1">
                    <img src={dashboard} alt=""/>
                    <h4>Dashboard</h4>
                    <img src={rightArrow} alt="" className="arrow-image"/>
                </button>
                <button className="component-1">
                    <img src={box} alt=""/>
                    <h4>Product</h4>
                    <img src={rightArrow} alt="" className="arrow-image"/>
                </button>
                <button  className="component-1">
                    <img src={customers} alt=""/>
                    <h4>Customers</h4>
                    <img src={rightArrow} alt="" className="arrow-image"/>
                </button>
                <button  className="component-1">
                    <img src={income} alt=""/>
                    <h4>Income</h4>
                    <img src={rightArrow} alt="" className="arrow-image"/>
                </button>
                <button  className="component-1">
                    <img src={income} alt="" />
                    <h4>Promote</h4>
                    <img src={rightArrow} alt="" className="arrow-image"/>
                </button>
                <button className="component-1">
                    <img src={help} alt=""/>
                    <h4>Help</h4>
                    <img src={rightArrow} alt="" className="arrow-image"/>
                </button>
            </div>
            <div className="manager-container">
                <img src="https://www.shutterstock.com/image-photo/handsome-smiling-young-man-folded-260nw-2069457431.jpg" alt="manager"/>
                <div className="manager-name-container">
                    <h4>Evano</h4>
                    <p>Project Manager</p>
                </div>
                <img src={downArrow} alt="down"   className="arrow-image"/>
            </div>
            
    </div>

    )
}
export default LeftContainer;
