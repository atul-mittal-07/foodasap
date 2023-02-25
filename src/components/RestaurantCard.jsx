import { useContext } from "react";
import { IMAGE_CDN } from "../config/images-cdn";
import UserContext from "../utils/UserContext";

const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
  costForTwoString,
  avgRating
}) => {
  const { user } = useContext(UserContext);
  return (
    <div className="m-5 p-5 bg-gray-400 shadow-black shadow-xl h-58 w-58">
      <img
        src={
          IMAGE_CDN +
          cloudinaryImageId
        }
      />
      <h2 className="font-semibold text-xl">{name}</h2><h2>{avgRating}⭐️</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{lastMileTravelString}</h4>
      <h5 className="font-bold">{costForTwoString}</h5>
      <h5 className="font-bold text-blue-900">{user.name} - {user.email}</h5>
    </div>
  );
};

export default RestaurantCard;