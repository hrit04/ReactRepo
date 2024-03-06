import React from 'react'

import { useEffect, useState } from 'react'
import Shimmer from './shimmer';

import { MENU_API } from '../utils/constants';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';

const RestaurantMenu = () => {

   //const [resInfo, setresInfo] = useState(null);



    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);




    // useEffect(() => {
    //     console.log("in useEffect");
    //     fetchMenu();
    // }, []);

   
    // console.log("in Restaurant menu");
    // const fetchMenu = async () => {
    //     const data = await fetch(MENU_API + resId);

    //     const json = await data.json();
    //     console.log(json);
    //     //json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    //     setresInfo(json.data);

    // }

    const { name, cuisines, cloudinaryImageId, avgRatingString, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info  || {};
    // console.log("hritam",resInfo);

    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card || {};

    


    return resInfo === null ? (<Shimmer/>) : (
        <div className="menu">

            <h1>{name}</h1>
            <p>{cuisines.join(", ") } - {costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul>
                {itemCards.map( (row)=>(
                    <li key={row.card.info.id}> {row.card.info.name} - {row.card.info.price/100 || row.card.info.defaultPrice/100 } Rs </li>
                ))}
            </ul>
        </div>
    )
}

export default RestaurantMenu