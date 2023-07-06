// import React, { useState } from "react";
// import Logo from "../assets/logo.png";
// import velai from "../assets/velai.png";
// import home from "../assets/home.png";
// import { Link } from "react-router-dom";
// // import ReorderIcon from "@material-ui/icons/Reorder";
// import "../styles/navbarx.css";
// import MenuIcon from "@mui/icons-material/Menu";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// function Navbar() {
// const [openLinks, setOpenLinks] = useState(false);
// const [click, setClick] = useState(false);
// const handleClick = () => setClick(!click);
// const closeMobileMenu = () => setClick(false);
// // for nav color change
// const [colorChange, setColorchange] = useState(false);
// const changeNavbarColor = () => {
//   if (window.scrollY >= 100) {
//     setColorchange(true);
//   } else {
//     setColorchange(false);
//   }
// };
// window.addEventListener("scroll", changeNavbarColor);
// const toggleNavbar = () => {
//   setOpenLinks(!openLinks);
// };
//   <div className={colorChange ? "navbar colorChange" : "navbar"}>
//     <div className="img1">
//       <img src={Logo} alt="logo" style={{ width: "100px" }} />
//     </div>
//     <div className="rightSide">
//       <Link to="/">
//         <div className="navhead1">Job Seeker</div>
//       </Link>
//       <Link to="/Jobprovider">
//         <div className="navhead2">Job Provider</div>
//       </Link>
//       <Link to="/about">
//         <div className="navhead3">Rental Seeker</div>
//       </Link>
//       <Link to="/contact">
//         <div className="navhead4">Rental Provider </div>
//       </Link>
//       <Link to="/home">
//         <img
//           src={home}
//           alt="home"
//           className="homeimg"
//           style={{ width: "25px", marginRight: "80px", marginLeft: "30px" }}
//         />
//       </Link>
//       <Link to="/mainprofile">
//         <AccountCircleIcon />
//       </Link>
//       </div>
//     </div>
//   );
// }
// <div className={colorChange ? "navbar colorChange" : "navbar"}>
//   <div className="logo-nav">
//     <div className="logo-container">
//       <div className="img1">
//         <img src={Logo} alt="logo" style={{ width: "100px" }} />
//       </div>
//     </div>
//     <ul className={click ? "nav-options active" : "nav-options"}>
//       <li className="option" onClick={closeMobileMenu}>
//         <Link to="/" className="navhead1">
//           <div>Job Seeker</div>
//         </Link>
//       </li>
//       <li className="option" onClick={closeMobileMenu}>
//         <Link to="/Jobprovider" className="navhead2">
//           <div>Job Provider</div>
//         </Link>
//       </li>
//       <li className="option" onClick={closeMobileMenu}>
//         <Link to="/about" className="navhead3">
//           <div>Rental Seeker</div>
//         </Link>
//       </li>
//       <li className="option mobile-option" onClick={closeMobileMenu}>
//         <Link to="/contact" className="navhead4">
//           <div>Rental Provider </div>
//         </Link>
//       </li>
//       <li className="option mobile-option" onClick={closeMobileMenu}>
//         <Link to="/home">
//           <img
//             src={home}
//             alt="home"
//             className="homeimg"
//             // style={{
//             //   width: "25px",
//             //   marginRight: "80px",
//             //   marginLeft: "30px",
//             // }}
//           />
//         </Link>
//       </li>
//       <li className="option mobile-option" onClick={closeMobileMenu}>
//         <Link to="/mainprofile">
//           <AccountCircleIcon />
//         </Link>
//       </li>
//     </ul>
//   </div>
//   <div className="mobile-menu" onClick={handleClick}>
//     {click ? (
//       <MenuIcon className="menu-icon" />
//     ) : (
//       <MenuIcon className="menu-icon" />
//     )}
//   </div>
// </div>
// const [click, setClick] = useState(false);
// const handleClick = () => setClick(!click);
// const closeMobileMenu = () => setClick(false);
// return (
//   <div className="header">
//     <div className="logo-nav">
//       <div className="logo-container">
//         <a href="#">
//           <Logo className="logo" />
//         </a>
//       </div>
//       <ul className={click ? "nav-options active" : "nav-options"}>
//         <li className="option" onClick={closeMobileMenu}>
//           <a href="#">ABOUT</a>
//         </li>
//         <li className="option" onClick={closeMobileMenu}>
//           <a href="#">CONTACT</a>
//         </li>
//         <li className="option" onClick={closeMobileMenu}>
//           <a href="#">BLOG</a>
//         </li>
//         <li className="option mobile-option" onClick={closeMobileMenu}>
//           <a href="#">SIGN-IN</a>
//         </li>
//         <li className="option mobile-option" onClick={closeMobileMenu}>
//           <a href="" className="sign-up">
//             SIGN-UP
//           </a>
//         </li>
//       </ul>
//     </div>
//     <ul className="signin-up">
//       <li className="sign-in" onClick={closeMobileMenu}>
//         <a href="#">SIGN-IN</a>
//       </li>
//       <li onClick={closeMobileMenu}>
//         <a href="" className="signup-btn">
//           SIGN-UP
//         </a>
//       </li>
//     </ul>
//     <div className="mobile-menu" onClick={handleClick}>
//       {click ? (
//         // <CloseMenu className="menu-icon" />
//         "kd"
//       ) : (
//         <MenuIcon className="menu-icon" />
//       )}
//     </div>
//   </div>
//   );
// }
// export default Navbar;
// import { NavItems } from "../components/NavItems.js";
import { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import MenuIcon from "@mui/icons-material/Menu";
import "../styles/navbarx.css";
import { ReactComponent as CloseMenu } from "../assets/x.svg";
import { ReactComponent as MenuIcon } from "../assets/Menu.svg";
import Logo from "../assets/logo.png";
import velai from "../assets/velai.png";
import home from "../assets/home.png";
//  import "../styles/navbarx.css";
export default function Navbar() {
  // for nav color change

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 100) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  return (
    <div className={colorChange ? "header-colorChange" : "header"}>
      <div className="logo-nav">
        <div className="logo-container">
          <img src={Logo} alt="logo" className="img1" />
        </div>
        <ul className={click ? "nav-options active" : "nav-options"}>
          <li className="option" onClick={closeMobileMenu}>
            <Link to="/">
              <div>Job Seeker</div>
            </Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <Link to="/Jobprovider">
              <div>Job Provider</div>
            </Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <Link to="/about">
              <div>Rental Seeker</div>
            </Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <Link to="/contact">
              <div>Rental Provider </div>
            </Link>
          </li>
          <div className="account">
            <li className="option" onClick={closeMobileMenu}>
              <Link to="/home">
                <img
                  src={home}
                  alt="home"
                  className="homeimg"
                  style={{
                    height: "30px",
                    width: "30px",
                  }}
                />
              </Link>
            </li>
            <li className="option" onClick={closeMobileMenu}>
              <Link to="/mainprofile">
                <AccountCircleIcon
                  style={{
                    // backgroundColor: "red",
                    height: "45px",
                    width: "45px",
                  }}
                />
              </Link>
            </li>
          </div>
        </ul>
      </div>

      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <CloseMenu className="menu-icon" />
        ) : (
          <MenuIcon className="menu-icon" />
        )}
      </div>
    </div>

    // const [open, setOpen] = useState(false);
    // const handleClick = () => {
    //   setOpen(!open);
    // };
    // const closeMobileMenu = () => setOpen(false);

    // const [colorChange, setColorchange] = useState(false);
    // const changeNavbarColor = () => {
    //   if (window.scrollY >= 100) {
    //     setColorchange(true);
    //   } else {
    //     setColorchange(false);
    //   }
    // };
    // window.addEventListener("scroll", changeNavbarColor);
    // return (
    //   <nav className={colorChange ? "NavbarItems-colorChange" : "NavbarItems"}>
    //     <img
    //       src={Logo}
    //       alt="logo"
    //       className="img1"
    //       style={{ width: "100px", padding: "20px" }}
    //     />
    //     <div className="Hamburger-Cross-Icons" onClick={handleClick}>
    //       <i className={open ? "fas fa-times" : "fas fa-bars"}></i>
    //     </div>
    //     <ul className={open ? "MenuItems-active" : "MenuItems"}>
    //       <li className="listnav">

    //         <div className="nav2">
    //           <Link to="/" className="nav-links" onClick={closeMobileMenu}>
    //             <div>Job Seeker</div>
    //           </Link>
    //           <Link
    //             to="/Jobprovider"
    //             className="nav-links"
    //             onClick={closeMobileMenu}
    //           >
    //             <div>Job Provider</div>
    //           </Link>
    //           <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
    //             <div>Rental Seeker</div>
    //           </Link>
    //           <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
    //             <div>Rental Provider </div>
    //           </Link>

    //         </div>
    //         <div className="nav3">
    //           <Link to="/home" onClick={closeMobileMenu}>
    //             <img
    //               src={home}
    //               alt="home"
    //               className="homeimg"
    //               style={{
    //                 height: "30px",
    //                 width: "30px",
    //                 backgroundColor: "red",
    //                 marginRight: "20px",
    //               }}
    //             />
    //           </Link>
    //           <Link to="/mainprofile" onClick={closeMobileMenu}>
    //             <AccountCircleIcon
    //               style={{
    //                 // backgroundColor: "red",
    //                 height: "35px",
    //                 width: "35x",
    //               }}
    //             />
    //           </Link>
    //         </div>
    //       </li>
    //     </ul>
    //   </nav>
  );
}
