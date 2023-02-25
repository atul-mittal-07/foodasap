import { IMAGE_CDN } from "../config/images-cdn";

const CartItem = ({
  name,
  description,
  cloudinaryImageId,
}) => {
  return (
    <div className="m-5 p-5 bg-gray-400 shadow-black shadow-xl h-58 w-58">
      <img
        src={
          IMAGE_CDN +
          cloudinaryImageId
        }
      />
      <h2 className="font-semibold text-xl">{name}</h2>
      <h5 className="font-bold">{description}</h5>
    </div>
  );
};

export default CartItem;