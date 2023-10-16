import React from "react";
import SearchImg from "../images1/search.svg"
const data=[
    {img:"https://picsum.photos/200",
    heading:"Abstract 3d",
    description:"Lorem ipsum dolor sit amet, consectetur.",
    stock:"32 in Stock",
    price:"$45.99",
    totalsales:"20"
   },
   {img:"https://picsum.photos/200/300",
    heading:"Sarphens Illustration",
    description:"Lorem ipsum dolor sit amet, consectetur.",
    stock:"32 in Stock",
    price:"$45.99",
    totalsales:"20"
}

]
const Table=()=>{
    return(
        <div className="ProductSell-div">
        <div className="table-first">
            <h3>Product Sell</h3>
            <div className="table-search">
                <div className="table-search-div">
                <img src={SearchImg} alt=""/>
                <input type="search"  placeholder="Search"/>
                </div>
                <div>
                <select name="select" className='select'>
                <option value="1">Last 30 Days</option>
                <option value="2">last 3 Months</option>
                <option value="3">Last 6 months</option>
                <option value="4">Last 1 Year</option>
                </select>
                </div>
            </div>
        </div>
        <table>
            <thead>
                <tr>
                    <th>Product Name</th>
                    <th className="stock">Stack</th>
                    <th>Price</th>
                    <th className="stock">Total Sales</th>
                </tr>
            </thead>
            <tbody>
                
                <tr>
                    <td className="table-product-div" colSpan={5}>
                        <div >
                            <img src={data[0].img} alt="" className="table-image"/>
                        </div> 
                        <div className="table-product-description">
                            <p><strong>{data[0].heading}</strong></p>
                            <p>{data[0].description}</p>
                        </div>
                    </td>
                    <td>{data[0].stock}</td>
                    <td>{data[0].price}</td>
                    <td>{data[0].totalsales}</td>

                </tr>
                <tr>
                    <td className="table-product-div" colSpan={5}>
                        <div >
                            <img src={data[1].img} alt="" className="table-image"/>
                        </div> 
                        <div className="table-product-description">
                            <p><strong>{data[1].heading}</strong></p>
                            <p>{data[1].description}</p>
                        </div>
                    </td>
                    <td>{data[1].stock}</td>
                    <td>{data[1].price}</td>
                    <td>{data[1].totalsales}</td>

                </tr>
             
            </tbody>
        </table>
        </div>
       
       
    )
}
export default Table;