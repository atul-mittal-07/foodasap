import {useSelector} from "react-redux";
import CartItem from "./CartItem";
import {useDispatch} from "react-redux";
import { clearCart } from "../utils/CartSlice";
const Cart = ()=>{
  const cartItems = useSelector(store=>store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart=()=>{
    dispatch(clearCart());
  }
  return(
    <>
    <h1 className="font-bold text-2xl">Cart - {cartItems.length} items</h1>
    <button className="mt-2 p-2 text-2xl font-bold text-red-500 bg-green-200" onClick={()=>handleClearCart()}>Clear Cart</button>
    <div className="flex flex-wrap mt-10">
    {cartItems.map((item)=><CartItem key={item.id} {...item}/>)}
    </div>
    </>
  );
}

export default Cart;