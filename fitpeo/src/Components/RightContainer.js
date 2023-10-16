import React from "react";
import WishingContainer from "./WishingContainer.js";
import CardsContainer from "./CardsContainer.js";
import BarChart from "./BarChart.js";
// import PieChart from "./PieChart.js";
import Table from "./Table.js";
import DoughnutChart from "./DoughnutChart.js";



const RightContainer =()=>{
   return(
    <div className="Right-container">
         <WishingContainer />
         <CardsContainer />
         <div className="barchart-doughtnut-div">
         <BarChart />
         <DoughnutChart />
         </div>
         <Table />
         
         
    
    </div>
   
   )

}
export default RightContainer;