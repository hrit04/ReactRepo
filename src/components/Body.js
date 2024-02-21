import RestaurantCard from "./RestaurantCard"
import restroData from "../utils/mockRestroData";
import {useState} from 'react';

//let restroDataVar = restroData;
const Body =()=>{

  let [restroDataVar, setrestroDataVar] = useState(restroData);

  // state variable -> super powerful variable 
  /*
     
  React hooks -> normal js utility functions 
  useState() -> super powerful state variable 
  useEffect()

  */
    return (
        <div className="body">
          <div className="filter">
            <button className="filter-btn" onClick={()=>{
              let filteredList = restroDataVar.filter((res)=>{
                console.log(res.info.avgRating)
                return res.info.avgRating > 4
              } 
              )
              setrestroDataVar(filteredList);
              console.log('clicked', restroDataVar);
            }}>Top Rated Restaurants</button>
          </div>
          <div className="res-container"> 
            {
             restroDataVar.map(row=> <RestaurantCard key={row.info.id} resData={row}/>)
            }
          </div>
        </div>
    )
}

export default Body;