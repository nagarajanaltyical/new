import React from "react";
import { Link } from "react-router-dom";
import Box from "../assets/Box.svg";
import a from "../assets/1a.svg";
import MediaQuery from "react-responsive";
import Logo from "../assets/logo.png";
import what from "../assets/whatsapp.svg";
import copy from "../assets/copyrights.svg";

import getapp from "../assets/GetApp.svg";
import youtube from "../assets/utube.svg";
import fb from "../assets/fb.svg";
import insta from "../assets/insta.svg";
import linkdin from "../assets/LI.svg";
import twitter from "../assets/twitter.svg";

import feature from "../assets/QR.svg";
import footer from "../assets/footer.svg";
import CopyrightOutlinedIcon from "@mui/icons-material/CopyrightOutlined";
import person1 from "../assets/person1.svg";
import person2 from "../assets/person2.svg";
import ad1 from "../assets/AD1.svg";
import qr from "../assets/Features JS.svg";
import stepjs from "../assets/stepsJS.svg";
import Jobseeker from "../assets/jobseekerimg.svg";
import "../Job seeker/jobseeker.css";
import { blue } from "@material-ui/core/colors";
import Carousel from "../carosual";
import apple from "../assets/App Store.png";
import playstore from "../assets/Playstore.png";
import { styled } from "styled-components";
import Search from "../components/components/search";
import { findByRole } from "@testing-library/react";
import Footer from "../components/Footer";
// import { Button } from "@material-ui/core";

// const Container = styled.div`
//   displa;
// `;
const Button = styled.button`
  /* border: none; */
  background-color: teal;
  color: white;
  width: 102px;
  height: 40px;
  margin-top: 200px;
  margin-left: 100px;
  background: linear-gradient(
    90deg,
    #142d33 0%,
    #194751 21.35%,
    #126678 52.6%,
    #1e5966 76.56%,
    #194751 100%
  );
  border-radius: 20px;
`;
function Jobseeeker() {
  return (
    <>
      {/* <Container> */}
      <div className="imgback1">
        <img src={Jobseeker} alt="menu" className="imgback1" />
      </div>
      <div className="search">
        <Search />
      </div>
      <p style={{ width: "100%", marginTop: "180px" }}>GET JOBS IN 3 PHASES</p>
      <img src={stepjs} alt="menu" className="imgback2" />
      <div
        style={{
          backgroundColor: "#E5FAFF",
          height: "640px",
          zIndex: -2,
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div style={{}}>
          <img src={person1} alt="person" className="imgperson1" />
          <img src={person2} alt="person" className="imgperson2" />
        </div>
        {/* </div> */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <p className="person1txt">
            At our web application, we prioritize the success of job seekers. We
            provide a range of resources and tools designed to empower you in
            your job search. From advanced job search options and resume
            builders to expert career advice and interview preparation tips,
            we're here to support you every step of the way. Our goal is to help
            you find and secure the right job opportunity that aligns with your
            skills, aspirations, and professional growth.
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <Button>Get Job</Button>
          </div>
        </div>
      </div>
      <div>
        <img src={qr} alt="img" className="imgqr" />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img src={feature} alt="img" className="imgfeature" />
      </div>
      {/* <Link to="/menu">
          <button> ORDER NOW </button>
        </Link> */}
      {/* <Carousel /> */}
      {/* </div> */}
      {/* <div style={{ display: "block", marginTop: "200px" }}> */}
      {/* </div> */}
      {/* <div style={{ display: "flex" }}> */}
      <Carousel />
      {/* </div> */}
      <img src={getapp} alt="enu" className="getappimg" />
      <div
        style={{
          position: "relative",
          width: "100%",
          justifyContent: "center",
          marginLeft: "-50px",
          alignItems: "center",
          display: "flex",
          alignContent: "center",
          marginTop: "-180px",
          // flexDirection: "column",
        }}
      >
        {/* <button
          style={{
            backgroundColor: "transparent",
            width: "300px",
            height: "100px",
          }}
        > */}
        <img
          src={playstore}
          alt="enu"
          style={{ width: "250px", height: "80px", objectFit: "contain" }}
        />
        {/* </button> */}

        <img
          src={apple}
          alt="enu"
          style={{ width: "270px", height: "60px", objectFit: "contain" }}
        />
      </div>
      <img src={ad1} alt="ad1" style={{ width: "100%" }} />
    </>
  );
}

export default Jobseeeker;
