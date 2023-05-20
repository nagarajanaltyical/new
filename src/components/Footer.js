import React from "react";
import youtube from "../assets/utube.svg";
import "../Job seeker/jobseeker.css";
import what from "../assets/whatsapp.svg";
import footer from "../assets/footer.svg";
import Logo from "../assets/logo.png";

import twitter from "../assets/twitter.svg";
import linkdin from "../assets/LI.svg";
import insta from "../assets/insta.svg";
import fb from "../assets/fb.svg";
import copy from "../assets/copyrights.svg";

import "../styles/Footer.css";

function Footer() {
  return (
    <div className="bottom">
      <div className="bot1">
        <div className="velaiapp">
          <a className="head1">VELAI APP</a>
          <a className="shead1">Home</a>
          <a className="shead1">Job Seeker</a>
          <a className="shead1">Job Provider</a>
          <a className="shead1">Rental Seeker</a>
          <a className="shead1">Rental Provider</a>
        </div>
        <div className="botsub1">
          <div className="legal">
            <a className="head2">Legal</a>
            <a className="shead2">Privacy Policy</a>

            <a className="shead2">Terms & Conditions</a>
            <a className="shead2">FAQ</a>
          </div>
          <div className="support">
            <a className="head2">Support</a>
            <a className="shead1">support@velaiapp.com</a>
            <a className="shead1">help@velaiapp.com</a>
            <a className="shead3">
              <img className="iconmedia" src={what} alt="logo" style={{}} />
              <p className="shead1"> 123456789</p>
            </a>
          </div>
        </div>
        <div className="bottomlogo">
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
              alignContent: "flex-end",
            }}
          >
            <img src={Logo} alt="logo" style={{ width: "100px" }} />
          </div>
          <p className="bottext">Your go-to app for Jobs and Rentals. </p>
          <img
            src={footer}
            alt="botlast"
            style={{
              position: "relative",
              zIndex: "1",
              width: "340px",
              height: "252px",
            }}
          />
        </div>
      </div>
      <div className="bot2">
        <hr
          style={{
            backgroundColor: "#56909d",
            height: "1.5px",
            border: "5px",
            width: "90%",
          }}
        />
        <div className="copyrights">
          <div className="copyleft">
            <img
              src={copy}
              alt="botlast"
              style={{
                position: "relative",
                zIndex: "1",
              }}
              className="iconmedia"
            />
            <p style={{ fontSize: "10px", color: "#E6E6E6" }}>
              Copy Right 2023 | Powered by Zeal Zoft
            </p>
          </div>
          <div>
            <img
              src={fb}
              alt="botlast"
              style={{
                position: "relative",
                zIndex: "1",
              }}
              className="iconmedia"
            />
            <img
              src={linkdin}
              alt="botlast"
              style={{
                position: "relative",
                zIndex: "1",
              }}
              className="iconmedia"
            />
            <img
              src={insta}
              alt="botlast"
              style={{
                position: "relative",
                zIndex: "1",
              }}
              className="iconmedia"
            />
            <img
              src={twitter}
              alt="botlast"
              style={{
                position: "relative",
                zIndex: "1",
              }}
              className="iconmedia"
            />
            <img
              src={youtube}
              alt="botlast"
              style={{
                position: "relative",
                zIndex: "1",
              }}
              className="iconmedia"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
