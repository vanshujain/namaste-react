import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cloudinaryImageId, avgRating, cuisines, costForTwo, sla } =
    resData?.info;
  const deliveryTime = sla?.deliveryTime;
  return (
    <div className="rest-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="rest-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />

      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{`Rating: ${avgRating}`}</h4>
      <h4>{`delivery time: ${deliveryTime} minutes`}</h4>
    </div>
  );
};
export default RestaurantCard;
