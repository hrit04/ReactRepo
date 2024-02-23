import RestaurantCard from "./RestaurantCard"
import restroData from "../utils/mockRestroData";
import {useState} from 'react';
import { useEffect } from "react";
import Shimmer from "./shimmer";

//let restroDataVar = restroData;
//var restroDataAlways="";
const Body =()=>{

  /*
  Whenever there is a change in state variables , reacts finds the difference between the virtual DOM using reconcilation algorithms
  (react fibre), and updates the actual DOM

  virtual DOM is a representation of actual DOM in object format

  Actual DOM: <div>...<div/>

  Virtual DOM: {}

  */

  let [restroDataVar, setrestroDataVar] = useState([]);

  const [filteredRestro, setfilteredRestro] = useState([]);

  const [searchText, setsearchText] = useState("");

  //whenever the state variable updated , react call the reconcilation cycle or rerender the whole component
  console.log(searchText);
  useEffect(()=>{
    console.log("useEffect called");
    fetchData();
  }, []);

  
async function fetchData() {
   const res = await fetch("https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D23.022505%26lng%3D72.5713621%26page_type%3DDESKTOP_WEB_LISTING");
   const json = await res.json();
   setrestroDataVar(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
   setfilteredRestro(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
   //restroDataAlways = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
   console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
}

// conditional rendering
// if(restroDataVar.length==0){
//   return <Shimmer/>
// }



  console.log("body called");

  // state variable -> super powerful variable 
  /*
     
  React hooks -> normal js utility functions 
  useState() -> super powerful state variable 
  useEffect()

  */
    return restroDataVar.length==0 ? <Shimmer/> : (
        <div className="body">
          <div className="filter">
            <div className="search">
              <input type="text" 
              className="search-box" 
              value={searchText}
              onChange={(e)=>{
                setsearchText(e.target.value);
              }}
              ></input>
              <button onClick={()=>{
                //Filter the restrocards and update the UI
                console.log(searchText);
                const filteredRestro= restroDataVar.filter((restro)=>{
                   return restro.info.name.toLowerCase().includes(searchText.toLowerCase());
                })
                setfilteredRestro(filteredRestro);
              }}>Search</button>
            </div>
            <button className="filter-btn" onClick={()=>{
              let filteredList = restroDataVar.filter((res)=>{
                console.log(res.info.avgRating)
                return res.info.avgRating > 4
              } 
              )
              setfilteredRestro(filteredList);
              console.log('clicked', restroDataVar);
            }}>Top Rated Restaurants</button>
          </div>
          <div className="res-container"> 
            {
             filteredRestro.map(row=> <RestaurantCard key={row.info.id} resData={row}/>)
            }
          </div>
        </div>
    )
}

export default Body;