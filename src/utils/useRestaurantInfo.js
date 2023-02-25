import { useState, useEffect } from "react";
import { FETCH_INFO_URL } from "../config/images-cdn";

const useRestaurantInfo = (id) => {

  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  const getRestaurantInfo = async () => {
    const data = await fetch(FETCH_INFO_URL + id);
    const json = await data.json();
    setRestaurant(json?.data);
  }

  return restaurant;
}

export default useRestaurantInfo;