import { useContext, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import RestaurantCardShimmer from "./RestaurantCardShimmer";
import { Link } from 'react-router-dom';
import useRestaurants from "../utils/useRestaurants";
import UserContext from "../utils/UserContext";



const Body = () => {
  const [searchText, setSearchText] = useState("");
  const { user, setUser } = useContext(UserContext);

  const [allRestaurants, filteredRestaurants] = useRestaurants(searchText); //Custom Hook

  return allRestaurants?.length > 0 ? (
    <>
      <input
        data-testid ="input"
        className="border border-red-800 ml-[40%] mr-[40%] w-[20%] h-8 text-center shadow-xl shadow-slate-500"
        type="text"
        placeholder="Search"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }} />
      <input
        className="border border-red-800 mt-2 ml-[40%] mr-[40%] w-[20%] h-8 text-center shadow-xl shadow-slate-500"
        type="text"
        placeholder="Name"
        value={user.name}
        onChange={(e) => setUser({
          ...user,
          name: e.target.value
        })} />
      <input
        className="border border-red-800 mt-2 ml-[40%] mr-[40%] w-[20%] h-8 text-center shadow-xl shadow-slate-500"
        type="text"
        placeholder="Email"
        value={user.email}
        onChange={(e) => setUser({
          ...user,
          email: e.target.value
        })} />
      {
        filteredRestaurants?.length === 0 ? (<h1 data-testid="no-res-found">Sorry No Restaurant Found</h1>) : (
          <div data-testid="res-list" className="flex flex-wrap mt-10">
            {filteredRestaurants?.map((restaurant) => {
              return <Link key={restaurant?.data?.data?.id} to={"/restaurants/" + restaurant?.data?.data?.id}><RestaurantCard {...restaurant?.data?.data} /></Link>;
            })}
          </div>
        )
      }

    </>
  ) : <RestaurantCardShimmer />;
};

export default Body;