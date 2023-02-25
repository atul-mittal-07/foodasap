import React from 'react'
import { Link, Outlet } from "react-router-dom";

const About = () => {
  return (
    <>
      <h1>This is the Food Ordering App created in React 🔥</h1>
      <Link to="/about/profile">Developer's Profile ⬇️</Link>
      <Outlet></Outlet>
    </>

  )
}

export default About;