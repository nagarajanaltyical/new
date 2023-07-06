import React from "react";
import { Link } from "react-router-dom";
import Box from "../assets/Box.svg";
import a from "../assets/1a.svg";
import getapp from "../assets/GetApp.svg";
import b from "../assets/2a.svg";
import c from "../assets/3a.svg";
import d from "../assets/4a.svg";
import homeimg from "../assets/home1.svg";
import "../styles/Home.css";
import { blue } from "@material-ui/core/colors";
import Carousel from "../carosual";
import apple from "../assets/App Store.png";
import playstore from "../assets/Playstore.png";
import { styled } from "styled-components";
import Footer from "../components/Footer";

// const Container = styled.div`
//   displa;
// `;

function Home() {
  return (
    <div style={{ display: "flex", flex: 1, flexDirection: "row" }}>
      {/* <Container> */}
      <div>
        <img src={homeimg} alt="menu" className="imgback" />
      </div>
      <p className="heading1">"NEW OFFERS ARE WAITING FOR YOU!!!”</p>
      <p className="heading2">
        Connecting job seekers and employers has never been easier with our job
        portal app. Let us help you find your dream job or the perfect candidate
        for your company.
      </p>
      {/* <div className="two">
        <img
          src={Box}
          alt="menu"
          style={{
            width: "280px",
            height: "300.56px",
            // left: "1480.98px",
            // top: "-500px",
            marginLeft: "78%",
            justifyContent: "end",
            marginTop: "-14rem",
          }}
        />
        <div className="two1">
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              // backgroundColor: "red",
              alignContent: "center",
            }}
          >
            <p
              style={{
                fontFamily: "roboto",
                fontStyle: "normal",
                fontWeight: 600,
                fontSize: "30px",
                color: "#333",
                marginBottom: "40px",
              }}
            >
              OUR SECTORS
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              marginBottom: "50px",
            }}
          >
            <div className="card1">
              <div
                style={{
                  display: "flex",
                  // marginTop: "20px",
                  flexDirection: "row",
                  width: "100%",
                  alignContent: "center",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  marginLeft: "30px",
                }}
              >
                <img
                  src={a}
                  alt="enu"
                  style={{
                    width: "50px",
                    border: "30px",
                    height: "40.56px",
                    marginRight: "10px",
                    // left: "1480.98px",
                    // top: "-500px",
                  }}
                />
                <p
                  style={{
                    fontSize: "30px",
                    fontWeight: 500,
                    fontFamily: "roboto",
                  }}
                >
                  JOB SEEKERS
                </p>
              </div>

              <div className="p1">
                "Connect with top employers and discover new career
                opportunities with our job seeker tools. Designed to help you
                land your next job."
              </div>
            </div>
            <div className="card2">
              <div
                style={{
                  display: "flex",
                  // marginTop: "20px",
                  flexDirection: "row",
                  width: "100%",
                  alignContent: "center",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  marginLeft: "30px",
                }}
              >
                <img
                  src={b}
                  alt="enu"
                  style={{
                    width: "50px",
                    border: "30px",
                    height: "40.56px",
                    marginRight: "10px",
                    // left: "1480.98px",
                    // top: "-500px",
                  }}
                />
                <p
                  style={{
                    fontSize: "30px",
                    fontWeight: 500,
                    fontFamily: "roboto",
                  }}
                >
                  JOB PROVIDERS
                </p>
              </div>
              <div className="p2">
                "Post job openings and find qualified candidates quickly and
                easily with our job provider services. Designed to simplify the
                hiring process."
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",

              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <div className="card3">
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",

                  width: "100%",
                  alignContent: "center",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  marginLeft: "30px",
                }}
              >
                <img
                  src={c}
                  alt="enu"
                  style={{
                    width: "50px",
                    border: "30px",
                    height: "40.56px",
                    marginRight: "10px",
                    // left: "1480.98px",
                    // top: "-500px",
                  }}
                />
                <p
                  style={{
                    fontSize: "30px",
                    fontWeight: 500,
                    fontFamily: "roboto",
                  }}
                >
                  RENTAL SEEKERS
                </p>
              </div>
              <div className="p3">
                "Find the perfect rental property with our rental seeker
                services - designed to help you locate your ideal home or
                apartment."
              </div>
            </div>
            <div className="card4">
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                  alignContent: "center",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  marginLeft: "30px",
                }}
              >
                <img
                  src={d}
                  alt="enu"
                  style={{
                    width: "50px",
                    border: "30px",
                    height: "40.56px",
                    marginRight: "10px",
                    // left: "1480.98px",
                    // top: "-500px",
                  }}
                />
                <p
                  style={{
                    fontFamily: "roboto",
                    fontSize: "30px",
                    fontWeight: 500,
                  }}
                >
                  RENTAL PROVIDERS
                </p>
              </div>
              <div className="p4">
                "Our rental provider services help you reach a wider audience,
                simplify the renting process, and find the right tenant for your
                property."
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <Link to="/menu">
          <button> ORDER NOW </button>
        </Link> */}
      {/* <Carousel /> */}
      {/* </div> */}
      {/* <div style={{ display: "block", marginTop: "200px" }}> */}
      {/* </div> */}
      {/* <div style={{ display: "flex" }}> */}
      {/* <Carousel /> */}
      {/* </div> */}
      {/* <img src={getapp} alt="enu" className="getappimg" /> */}
      {/* <div
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
       
        <img
          src={playstore}
          alt="enu"
          className="playstore"
          style={{ width: "250px", height: "80px", objectFit: "contain" }}
        />

        <img
          src={apple}
          alt="enu"
          className="apple"
          style={{ width: "270px", height: "60px", objectFit: "contain" }}
        />
      </div> */}
      {/* <Footer /> */}
      {/* </Container> */}
    </div>
  );
}

export default Home;
