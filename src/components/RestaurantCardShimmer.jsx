const RestaurantCardShimmer = () => {
  const arr = new Array(16);
  return (
    <>
      <div data-testid = "shimmer-ui" className="restaurant-list">
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