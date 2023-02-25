// import { lazy, Suspense } from "react";  //This is also correct
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Error from "./components/Error";
import RestaurantInfo from "./components/RestaurantInfo";
import Login from "./components/login";
import Profile from "./components/Profile";
import UserContext from "./utils/UserContext";
import Cart from "./components/Cart";
import {Provider} from "react-redux";
import store from "./utils/store";

const About = React.lazy(() => import("./components/About"));
const Contact = React.lazy(() => import("./components/Contact"));
const Instamart = React.lazy(() => import("./components/Instamart"));

const AppLayout = () => {
  const [user, setUser] = useState({
    name: 'Atul Mittal',
    email: 'atulmittal0795@gmail.com'
  })
  return (
    <>
      {/* This is to provide dynamic values to the context data and also we are passing the set function, with this we'll be able to change parent's state from child's component */}
      <Provider store={store}>
      <UserContext.Provider
        value={{
          user: user,
          setUser: setUser
        }}>
        <Header />
        <Outlet />
        <Footer />
      </UserContext.Provider>
      </Provider>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/about",
        element: (
          <React.Suspense fallback={<h1>Loading...</h1>}><About /></React.Suspense>
        ),
        children: [
          {
            path: "profile",
            element: <Profile />
          }
        ]
      },
      {
        path: "/restaurants",
        element: <Body />
      },
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/contact",
        element: (
          <React.Suspense fallback={<h1>Loading...</h1>}><Contact /></React.Suspense>
        )
      },
      {
        path: "/instamart",
        element: (
          <React.Suspense fallback={<h1>Loading Instamart</h1>}><Instamart /></React.Suspense>
        )
      },
      {
        path: "/restaurants/:id",
        element: <RestaurantInfo />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path:"/cart",
        element:<Cart/>
      }
    ]
  }
]);



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
