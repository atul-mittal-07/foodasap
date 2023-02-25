import { useState, useEffect } from "react";
import { FETCH_URL } from "../config/images-cdn";

const filterData = (searchText, allRestaurants) => {
  return allRestaurants?.filter((restaurant) => restaurant?.data?.data?.name.toLowerCase().includes(searchText.toLowerCase()));
}

const useRestaurants = (searchText) => {

  const [allRestaurants, setAllRestaurants] = useState(null);
  const [filteredRestaurants, setFilteredRestaurants] = useState(null);

  useEffect(() => {
    getRestaurantsfromSwiggy();
  }, [])

  useEffect(() => {
    const data = filterData(searchText, allRestaurants);
    setFilteredRestaurants(data);
  }, [searchText])

  const getRestaurantsfromSwiggy = async () => {
    const data = await fetch(FETCH_URL);
    const json = await data.json(); //Readable to JSON
    setAllRestaurants(json?.data?.cards);
    setFilteredRestaurants(json?.data?.cards);
  }

  return [allRestaurants, filteredRestaurants];
}

export default useRestaurants;