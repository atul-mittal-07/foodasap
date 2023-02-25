import { useParams } from "react-router-dom";
import { IMAGE_CDN } from "../config/images-cdn";
import RestaurantCardShimmer from "./RestaurantCardShimmer";
import useRestaurantInfo from "../utils/useRestaurantInfo";
import {useDispatch} from "react-redux";
import { addItem } from "../utils/CartSlice";

const RestaurantInfo = () => {

  const { id } = useParams();

  const restaurant = useRestaurantInfo(id);
  const dispatch = useDispatch();

  const handleAddItem =(item)=>{
    dispatch(addItem(item));
  }

  return !restaurant ? <RestaurantCardShimmer /> : (
    <>
      <div className="flex flex-wrap">
        <div className="m-5 p-5">
          <h1 className="font-semibold text-3xl">Restaurant id: {id}</h1>
          <h2 className="font-extrabold text-3xl">{restaurant?.name}</h2>
          <img className="shadow-xl shadow-black" src={IMAGE_CDN + restaurant?.cloudinaryImageId} />
          <h3 className="font-extrabold text-2xl mt-2">{restaurant?.area}</h3>
          <h3>{restaurant?.city}</h3>
          <h3>{restaurant?.avgRating}🌟</h3>
          <h3>{restaurant?.costForTwoMsg}</h3>
        </div>
        <div>
          <h1 className="font-extrabold text-2xl mt-2">Menu</h1>
          <ul>
            {Object.values(restaurant?.menu?.items).map((item) => (
              <div className="flex mb-2">
                <li className="w-[300px]" key={item.id}>‣{item.name}</li>
                <span>₹{(item.price) / 100}</span>
                <button className="ml-2 pl-2 pr-2 bg-green-200" onClick={()=>handleAddItem(item)}>Add</button>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default RestaurantInfo;