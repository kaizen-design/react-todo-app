import React from "react";
import { NavLink, useLocation, Outlet } from "react-router-dom";

const About = (props) => {
  console.log(useLocation());
  //const { pathname } = useLocation();
  return (
    <div className="about__content">
      <ul className="about__list">
        <li>
          <NavLink to={`about-app`}>About App</NavLink>
        </li>
        <li>
          <NavLink to={`about-author`}>About Author</NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  )
}

export default About;