import React from "react";
import { Link } from "react-router-dom";
import Box from "../assets/Box.svg";
import a from "../assets/1a.svg";
import getapp from "../assets/GetApp.svg";
import b from "../assets/2a.svg";
import feature from "../assets/QR.svg";
import qr from "../assets/Features JS.svg";
import stepjs from "../assets/stepsJS.svg";
import Jobseeker from "../assets/jobseekerimg.svg";
import "../Job seeker/jobseeker.css";
import { blue } from "@material-ui/core/colors";
import Carousel from "../carosual";
import apple from "../assets/App Store.png";
import playstore from "../assets/Playstore.png";
import { styled } from "styled-components";

// const Container = styled.div`
//   displa;
// `;

function Jobseeeker() {
  return (
    <>
      {/* <Container> */}
      <div style={{}}>
        <img src={Jobseeker} alt="menu" className="imgback1" />
      </div>
      <p style={{}}>GET JOBS IN 3 PHASES</p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "90px",
        }}
      >
        <img src={stepjs} alt="menu" className="imgback2" />
      </div>
      <div style={{ backgroundColor: "#E5FAFF", height: "400px" }}>
        <div></div>
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
      {/* </Container> */}
    </>
  );
}

export default Jobseeeker;
