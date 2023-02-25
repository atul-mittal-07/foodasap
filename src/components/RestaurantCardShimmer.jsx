const RestaurantCardShimmer = () => {
  const arr = new Array(16);
  return (
    <>
      <div className="restaurant-list">
        {
          arr.fill("").map((a, index) => {
            return (
              <div className="shimmer" key={index}>
              </div>)
          })
        }
      </div>
    </>
  )
}

export default RestaurantCardShimmer;