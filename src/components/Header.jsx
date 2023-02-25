import { useState } from "react";
import Logo from "./../assets/images/logo.png";
import { Link } from 'react-router-dom';
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import store from "../utils/store";
import {useSelector} from "react-redux";

const Title = () => (
  <a href="/">
    <img
      className="h-20 w-25 rounded-lg shadow-xl shadow-slate-400"
      alt="logo"
      src={Logo}
    />
  </a>
);

const Header = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const { user } = useContext(UserContext);
  const cartItems =useSelector(store=>store.cart.items);
  return (
    <div className="flex justify-between">
      <Title />
      <div className="h-20">
        <ul className="flex m-5">
          <li><Link className="m-2 p-2 text-2xl font-bold text-white bg-black shadow-xl shadow-slate-400" to="/">Home</Link></li>
          <li><Link className="m-2 p-2 text-2xl font-bold text-white bg-black shadow-xl shadow-slate-400" to="/about">About</Link></li>
          <li><Link className="m-2 p-2 text-2xl font-bold text-white bg-black shadow-xl shadow-slate-400" to="/contact">Contact</Link></li>
          <li><Link className="m-2 p-2 text-2xl font-bold text-white bg-black shadow-xl shadow-slate-400" to="/instamart">Instamart</Link></li>
          <li><Link className="m-2 p-2 text-2xl font-bold text-white bg-black shadow-xl shadow-slate-400" to="/cart">Cart - {cartItems.length}</Link></li>
        </ul>
      </div>
      {/* <h3 className="m-3 text-red-600 font-bold">{user.name}</h3> */}
      <div className="m-5 p-2 text-2xl font-bold text-white bg-black shadow-xl shadow-slate-400">
        {
          loggedIn ? <button onClick={() => {
            setLoggedIn(false);
          }}>Login</button> : <button onClick={() => {
            setLoggedIn(true);
          }}>Logout</button>
        }
      </div>
    </div>
  );
};

export default Header;