import React from "react";
import up from "../images1/arrow-up-short.svg";
import down from "../images1/arrow-down-short.svg";
// import earnings from "../images1/house-door.svg";
import dollar from "../images1/currency-dollar (1).svg";
import bag from "../images1/bag-dash.svg";
import income  from "../images1/wallet2.svg";
import order from "../images1/journal-text.svg"
const CardsContainer=()=>{
    return(
        <div className="Cards-container">
            <div className="cards">
                <div className="cards-image">
                  <img src={dollar} alt=""/>
                </div>
                <div className="card-description">
                   <div className="card-heading">
                   <p>Earnings</p>
                    <p><strong>$198k</strong></p>
                   </div>
                    <div className="card-description-1">
                    <img src={up} alt="" />
                    <span><p className="rate">37.8% </p></span>
                    <span><p>this month</p></span>

                    </div>

            
                </div>

            </div>
            <div className="cards">
                <div className="cards-image" style={{backgroundColor:" rgb(235, 100, 235)"}}>
                  <img src={order} alt="" />
                </div>
                <div className="card-description">
                   <div className="card-heading">
                   <p>Orders</p>
                    <p><strong>$2.4k</strong></p>
                   </div>
                    <div className="card-description-1">
                    <img src={down} alt="" />
                    <span><p className="rate-1">2% </p></span>
                    <span><p>this month</p></span>

                    </div>

            
                </div>

            </div>
            <div className="cards">
                <div className="cards-image" style={{backgroundColor:"rgb(147, 136, 205)"}}>
                  <img src={income} alt=""/>
                </div>
                <div className="card-description">
                   <div className="card-heading">
                   <p>Balance</p>
                    <p><strong>$2.4k</strong></p>
                   </div>
                    <div className="card-description-1">
                    <img src={down} alt="" />
                    <span><p className="rate-1">2% </p></span>
                    <span><p>this month</p></span>

                    </div>

            
                </div>

            </div>
            <div className="cards">
                <div className="cards-image" style={{backgroundColor:"rgb(189, 116, 179)"}}>
                  <img src={bag} alt=""/>
                </div>
                <div className="card-description">
                   <div className="card-heading">
                   <p>Total Sales</p>
                    <p><strong>$89K</strong></p>
                   </div>
                    <div className="card-description-1">
                    <img src={up} alt="" />
                    <span><p className="rate">11%</p></span>
                    <span><p>this month</p></span>

                    </div>

            
                </div>

            </div>




        </div>
    )

}
export default CardsContainer;