import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navigation.css";

const list = [
  { name: "home", path: "/", exact: true },
  { name: "products", path: "/products" },
  { name: "contact", path: "/contact" },
  { name: "admin panel", path: "/admin" }
];

const Navigation = () => {
  const menu = list.map(item => (
    <li key="item.name">
      <NavLink to={item.path} exact={item.exact ? item.exact : false}>
        {item.name}
      </NavLink>
    </li>
  ));

  return (
    <nav className="main">
      <ul>
        {/* <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="products">Products</NavLink>
        </li>
        <li>
          <NavLink to="contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="admin">Admin panel</NavLink>
        </li> */}
        {menu}
      </ul>
    </nav>
  );
};

export default Navigation;
