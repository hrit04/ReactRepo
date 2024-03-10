import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  let { resData } = props;
  let { name, cuisines, avgRating, costForTwo } = resData?.info;
  let { deliveryTime } = resData?.info?.sla;
  return (
    <div className="res-card m-4 p-4 w-[250] bg-gray-100 rounded-lg hover:bg-gray-400">
      <img
        className="res-logo rounded-lg"
        alt="res-logo"
        src={CDN_URL + resData.info.cloudinaryImageId}
      ></img>
      <h3 className="font-bold text-pretty">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo} </h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;



export const PromotedRestaurantCard = (RestaurantCard) => {
  return (props) => {
    // console.log(props?.resData?.info?.aggregatedDiscountInfoV3?.header)
    return (
      <div>
      <label className="absolute bg-black text-white m-2 p-2 rounded-lg">{props.resData?.info?.aggregatedDiscountInfoV3?.header}</label>
      <RestaurantCard {...props}/>
      </div>
    )
  }
}
