import React from 'react'

import { useEffect, useState } from 'react'
import Shimmer from './shimmer';

import { MENU_API } from '../utils/constants';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';

const RestaurantMenu = () => {

    //const [resInfo, setresInfo] = useState(null);

    const { resId } = useParams();

    const resInfo = useRestaurantMenu(resId);

    const [showIndex, setshowIndex] = useState(null);
   

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

    const { name, cuisines, cloudinaryImageId, avgRatingString, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info || {};
    // console.log("hritam",resInfo);

    const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card || {};

    console.log("all", resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR);

    const catagories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => {
        console.log(c.card.card['@type']);
        return c.card.card['@type'] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
    })

    console.log("catagories", catagories);




    return resInfo === null ? (<Shimmer />) : (
        <div className="text-center">

            <h1 className='font-bold my-6 text-2xl'>{name}</h1>
            <p className='font-bold text-lg'>
                {cuisines.join(", ")} - {costForTwoMessage}
            </p>

            {
                // categories Accordion
                catagories.map((row, index) => (
                    <RestaurantCategory key={row.card.card.title}  data={row?.card?.card} 
                    showItems = {(index == showIndex) ? true : false}
                    setshowIndex = {()=>  (index == showIndex)? setshowIndex(null) :  setshowIndex(index)}
                    />
                ))
}





            {/* <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul>
                {itemCards.map((row) => (
                    <li key={row.card.info.id}> {row.card.info.name} - {row.card.info.price / 100 || row.card.info.defaultPrice / 100} Rs </li>
                ))}
            </ul> */}
        </div>
    )
}

export default RestaurantMenu;