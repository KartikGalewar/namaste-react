 import {IMG_CDN_URL} from "../constants";
 import { Image, Shimmer } from "react-shimmer";

const RestaurantCard = ({ cloudinaryImageId,name,cuisines,lastMileTravelString }) => {
    // const {cloudinaryImageId,name,cuisines} = props.restaurant.data;
    return (
      <div className="cls-restrau-cards">
        <Image
          src={
            IMG_CDN_URL +
            cloudinaryImageId
          }
          fallback={<Shimmer width={800} height={600} />}
          alt="restraurant card"
        />
        <div className="cls-prod-name">{name}</div>
        <div className="cls-prod-cuisines">{cuisines.join(",")}</div>
        <div className="cls-prod-name">{lastMileTravelString} Minutes</div>
      </div>
    );
  };

  export default RestaurantCard;
  