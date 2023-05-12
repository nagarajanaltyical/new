import React, { useState } from "react";
import Logo from "../assets/logo.png";
import velai from "../assets/velai.png";
import home from "../assets/home.png";
import menu from "../assets/menu.png";
import { Link } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";
import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);
  // for nav color change
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 100) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className={colorChange ? "navbar colorChange" : "navbar"}>
      <div className="img1">
        <img src={Logo} alt="logo" style={{ width: "100px" }} />
      </div>
      {/* <div
        className="leftSide"
        id={openLinks ? "open" : "close"}
      > */}
      {/*  <div className="hiddenLinks">
          <Link to="/">
            <div className="navhead1">Job Seeker</div>
          </Link>
          <Link to="/menu">
            <div className="navhead2">Job Provider</div>
          </Link>
          <Link to="/about">
            <div className="navhead3">Rental Seeker</div>
          </Link>
          <Link to="/contact">
            <div className="navhead4">Rental Provider </div>
          </Link>
          <Link to="/contact">
            <img src={home} alt="home" />
          </Link>
          <Link to="/contact">
            <img src={menu} alt="menu" />
          </Link>
        </div> */}
      {/* </div> */}
      <div className="rightSide">
        <Link to="/">
          <div className="navhead1">Job Seeker</div>
        </Link>
        <Link to="/menu">
          <div className="navhead2">Job Provider</div>
        </Link>
        <Link to="/about">
          <div className="navhead3">Rental Seeker</div>
        </Link>
        <Link to="/contact">
          <div className="navhead4">Rental Provider </div>
        </Link>
        <Link to="/home">
          <img
            src={home}
            alt="home"
            className="homeimg"
            style={{ width: "25px", marginRight: "80px", marginLeft: "30px" }}
          />
        </Link>
        {/* <Link to="/contact"> */}
        {/* <img src={menu} alt="menu" style={{ width: "20px" }} /> */}
        {/* </Link> */}
        {/* <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button> */}
      </div>
    </div>
  );
}

export default Navbar;
