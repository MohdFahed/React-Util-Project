import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Products() {
  return (
    <>
      <div className="container">
        <input type="search"></input>
      </div>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="feature" className="nav-item">
              Feature
            </Link>
          </li>
          <li className="nav-item">
            <Link to="newProducts" className="nav-item">
              New Products
            </Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </>
  );
}
