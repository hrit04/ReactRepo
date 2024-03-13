import RestaurantCard, { PromotedRestaurantCard } from "./RestaurantCard"
import restroData from "../utils/mockRestroData";
import { useState } from 'react';
import { useEffect } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const FilteredRestaurantCard = PromotedRestaurantCard(RestaurantCard);

//let restroDataVar = restroData;
//var restroDataAlways="";
const Body = () => {

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
  useEffect(() => {
    console.log("useEffect called");
    fetchData();
  }, []);

  // by passing the cors issue using https://corsproxy.org/?
  async function fetchData() {
    const res = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.8440055&lng=91.31077719999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
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

  const onlineStatus = useOnlineStatus()

  console.log(onlineStatus);

  if (onlineStatus === false) {
    return <h1> Seems like you are offline, Please check your Internet Connection</h1>;
  }

  console.log("restroDataVar", restroDataVar);
  return restroDataVar.length == 0 ? <Shimmer /> : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 px-4">
          <input type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          ></input>
          <button className='px-4 m-4 bg-green-100 rounded-lg' onClick={() => {
            //Filter the restrocards and update the UI
            console.log(searchText);
            const filteredRestro = restroDataVar.filter((restro) => {
              return restro.info.name.toLowerCase().includes(searchText.toLowerCase());
            })
            setfilteredRestro(filteredRestro);
          }}>Search</button>
        </div>


        <div className="px-0 py-0 m-8 bg-blue-500 flex items-center rounded-lg">
          <button className="filter-btn" onClick={() => {
            let filteredList = restroDataVar.filter((res) => {
              console.log(res.info.avgRating)
              return res.info.avgRating > 4
            }
            )
            setfilteredRestro(filteredList);
            console.log('clicked', restroDataVar);
          }}>Top Choices</button>
        </div>

      </div>
      <div className="flex flex-wrap">
        {
          filteredRestro.map( (row) => (
              <Link key={row.info.id} to={"/restaurants/" + row.info.id}>
              {row.info.aggregatedDiscountInfoV3?.header  ? ( <FilteredRestaurantCard resData={row} /> ) : ( <RestaurantCard resData={row} />) }
              </Link> 
          ))
        }
      </div>
    </div>
  )
}

export default Body;