import React, { useState } from "react";
import "../Job seeker/jobseekerlist.css";
import Jobseekerselectlist from "./Jobseekerselectlist";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Terms from "../assets/terms.svg";
import education from "../assets/Education.svg";
import locate from "../assets/Location.svg";
import suite from "../assets/Experience.svg";
import pack from "../assets/Package.svg";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import BasicTabs from "./Topnavi";

function valuetext(value) {
  return `${value}°C`;
}

export default function Jobseekerlist() {
  const [age, setAge] = useState("");
  // const [age, setAge] = useState("");
  const [isPressedexp, setIsPressedexp] = useState(false);
  const [isPressedtop, setIsPressedtop] = useState(false);
  const [isPressedjob, setIsPressedjob] = useState(false);
  const [isPressedduration, setIsPressedduration] = useState(false);
  const [isPressedwork, setIsPressedwork] = useState(false);
  const [isPressedpack, setIsPressedpack] = useState(false);
  const [isPressededucation, setIsPressededucation] = useState(false);
  const [isPressedtopcom, setIsPressedtopcom] = useState(false);

  const handlePress1 = () => {
    setIsPressedexp((prevIsPressedexp) => !prevIsPressedexp);
  };
  const handlePress2 = () => {
    setIsPressedtop((prevIsPressedexp) => !prevIsPressedexp);
  };
  const handlePress3 = () => {
    setIsPressedjob((prevIsPressedexp) => !prevIsPressedexp);
  };
  const handlePress4 = () => {
    setIsPressedduration((prevIsPressedexp) => !prevIsPressedexp);
  };
  const handlePress5 = () => {
    setIsPressedwork((prevIsPressedexp) => !prevIsPressedexp);
  };
  const handlePress6 = () => {
    setIsPressedpack((prevIsPressedexp) => !prevIsPressedexp);
  };
  const handlePress7 = () => {
    setIsPressededucation((prevIsPressedexp) => !prevIsPressedexp);
  };
  const handlePress8 = () => {
    setIsPressedtopcom((prevIsPressedexp) => !prevIsPressedexp);
  };
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className="main">
      <div style={{ height: "50vh", width: "100%" }}>
        <Jobseekerselectlist />
      </div>
      <div
        className="heading"
        style={{ backgroundColor: "#fff", height: "20vh", width: "100%" }}
      >
        Access a wide range of job openings.
      </div>
      <div
        style={{
          // backgroundColor: "blue",
          height: "150vh",
          width: "100%",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div
          style={{
            height: "100vh",
            width: "50%",
          }}
        >
          <div className="listmain">
            <div className="listitem">
              <div
                style={{
                  height: "30px",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-end",
                  alignItems: "center",

                  alignContent: "end",
                  width: "98%",
                }}
              >
                <FavoriteBorderIcon
                  style={{
                    width: "20px",
                    marginRight: "10px",
                    color: "#56909D",
                  }}
                />
                <div
                  style={{
                    fontFamily: "Roboto",
                    fontSize: "12px",
                    fontWeight: "400",
                    color: "#BDBCBC",
                  }}
                >
                  2 days ago
                </div>
              </div>
              <div
                style={{
                  backgroundColor: "white",
                  height: "50px",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "row",
                  width: "100%",
                }}
              >
                <img
                  src={Terms}
                  alt=""
                  style={{
                    width: "40px",
                    height: "40px",
                    marginLeft: "10px",
                    borderRadius: "50px",
                    backgroundColor: "#D9D9D9",
                  }}
                />
                <div
                  style={{
                    width: "100%",
                    marginLeft: "10px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "Roboto",
                      fontStyle: "normal",
                      fontWeight: "800",
                      fontSize: "18px",
                      textTransform: "uppercase",
                      // backgroundColor: "red",

                      width: "99%",
                      color: "#333333",
                    }}
                  >
                    UX UI designer
                  </div>
                  <div
                    style={{
                      fontFamily: "Roboto",
                      fontStyle: "normal",
                      fontWeight: "700",
                      fontSize: "11px",
                      width: "99%",
                      alignContent: "flex-start",
                      alignItems: "flex-start",
                      textTransform: "uppercase",
                      // backgroundColor: "green",
                      color: "#56909D",
                    }}
                  >
                    Zeal Zoft Pvt Ltd
                  </div>
                </div>
              </div>
              <div
                style={{
                  // backgroundColor: "blue",
                  height: "70px",
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "10px",
                    paddingLeft: "20px",
                    width: "45%",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      paddingBottom: "8px",
                    }}
                  >
                    <img
                      src={education}
                      alt=""
                      style={{ width: "22px", height: "22px" }}
                    />
                    <div
                      style={{
                        fontFamily: "Roboto",
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "12px",
                        paddingLeft: "10px",
                        justifyContent: "center",

                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      Any Graduate
                    </div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <img
                      src={suite}
                      alt=""
                      style={{ width: "22px", height: "22px" }}
                    />
                    <div
                      style={{
                        fontFamily: "Roboto",
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "12px",
                        justifyContent: "center",
                        paddingLeft: "10px",

                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      1-2 years
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    padding: "10px",
                    width: "60%",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      paddingBottom: "8px",
                    }}
                  >
                    <img
                      src={locate}
                      alt=""
                      style={{ width: "22px", height: "22px" }}
                    />
                    <div
                      style={{
                        fontFamily: "Roboto",
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "12px",
                        justifyContent: "center",
                        paddingLeft: "10px",

                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      Adyar, Chennai
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <img
                      src={pack}
                      alt=""
                      style={{ width: "22px", height: "22px" }}
                    />
                    <div
                      style={{
                        fontFamily: "Roboto",
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "12px",
                        justifyContent: "center",
                        paddingLeft: "10px",

                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      3-4 LPA
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  // backgroundColor: "purple",
                  height: "50px",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    fontFamily: "Roboto",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "15px",
                    marginLeft: "20px",
                    paddingTop: "15px",
                    color: "#56909D",
                  }}
                >
                  On-site | 2 Openings | Permanent
                </div>
              </div>
            </div>
            <div className="listitem">
              <div
                style={{
                  height: "30px",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-end",
                  alignItems: "center",

                  alignContent: "end",
                  width: "98%",
                }}
              >
                <FavoriteBorderIcon
                  style={{
                    width: "20px",
                    marginRight: "10px",
                    color: "#56909D",
                  }}
                />
                <div
                  style={{
                    fontFamily: "Roboto",
                    fontSize: "12px",
                    fontWeight: "400",
                    color: "#BDBCBC",
                  }}
                >
                  2 days ago
                </div>
              </div>
              <div
                style={{
                  backgroundColor: "white",
                  height: "50px",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "row",
                  width: "100%",
                }}
              >
                <img
                  src={Terms}
                  alt=""
                  style={{
                    width: "40px",
                    height: "40px",
                    marginLeft: "10px",
                    borderRadius: "50px",
                    backgroundColor: "#D9D9D9",
                  }}
                />
                <div
                  style={{
                    width: "100%",
                    marginLeft: "10px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "Roboto",
                      fontStyle: "normal",
                      fontWeight: "700",
                      fontSize: "18px",
                      textTransform: "uppercase",
                      // backgroundColor: "red",

                      width: "99%",
                      color: "#333333",
                    }}
                  >
                    UX UI designer
                  </div>
                  <div
                    style={{
                      fontFamily: "Roboto",
                      fontStyle: "normal",
                      fontWeight: "700",
                      fontSize: "11px",
                      width: "99%",
                      alignContent: "flex-start",
                      alignItems: "flex-start",
                      textTransform: "uppercase",
                      // backgroundColor: "green",
                      color: "#56909D",
                    }}
                  >
                    Zeal Zoft Pvt Ltd
                  </div>
                </div>
              </div>
              <div
                style={{
                  // backgroundColor: "blue",
                  height: "70px",
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "10px",
                    paddingLeft: "20px",
                    width: "45%",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      paddingBottom: "8px",
                    }}
                  >
                    <img
                      src={education}
                      alt=""
                      style={{ width: "22px", height: "22px" }}
                    />
                    <div
                      style={{
                        fontFamily: "Roboto",
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "12px",
                        paddingLeft: "10px",
                        justifyContent: "center",

                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      Any Graduate
                    </div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <img
                      src={suite}
                      alt=""
                      style={{ width: "22px", height: "22px" }}
                    />
                    <div
                      style={{
                        fontFamily: "Roboto",
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "12px",
                        justifyContent: "center",
                        paddingLeft: "10px",

                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      1-2 years
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    padding: "10px",
                    width: "60%",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      paddingBottom: "8px",
                    }}
                  >
                    <img
                      src={locate}
                      alt=""
                      style={{ width: "22px", height: "22px" }}
                    />
                    <div
                      style={{
                        fontFamily: "Roboto",
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "12px",
                        justifyContent: "center",
                        paddingLeft: "10px",

                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      Adyar, Chennai
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <img
                      src={pack}
                      alt=""
                      style={{ width: "22px", height: "22px" }}
                    />
                    <div
                      style={{
                        fontFamily: "Roboto",
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "12px",
                        justifyContent: "center",
                        paddingLeft: "10px",

                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      3-4 LPA
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  // backgroundColor: "purple",
                  height: "50px",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    fontFamily: "Roboto",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "15px",
                    marginLeft: "20px",
                    paddingTop: "15px",
                    color: "#56909D",
                  }}
                >
                  On-site | 2 Openings | Permanent
                </div>
              </div>
            </div>
            <div className="listitem">
              <div
                style={{
                  height: "30px",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-end",
                  alignItems: "center",

                  alignContent: "end",
                  width: "98%",
                }}
              >
                <FavoriteBorderIcon
                  style={{
                    width: "20px",
                    marginRight: "10px",
                    color: "#56909D",
                  }}
                />
                <div
                  style={{
                    fontFamily: "Roboto",
                    fontSize: "12px",
                    fontWeight: "400",
                    color: "#BDBCBC",
                  }}
                >
                  2 days ago
                </div>
              </div>
              <div
                style={{
                  backgroundColor: "white",
                  height: "50px",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "row",
                  width: "100%",
                }}
              >
                <img
                  src={Terms}
                  alt=""
                  style={{
                    width: "40px",
                    height: "40px",
                    marginLeft: "10px",
                    borderRadius: "50px",
                    backgroundColor: "#D9D9D9",
                  }}
                />
                <div
                  style={{
                    width: "100%",
                    marginLeft: "10px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "Roboto",
                      fontStyle: "normal",
                      fontWeight: "800",
                      fontSize: "18px",
                      textTransform: "uppercase",
                      // backgroundColor: "red",

                      width: "99%",
                      color: "#333333",
                    }}
                  >
                    UX UI designer
                  </div>
                  <div
                    style={{
                      fontFamily: "Roboto",
                      fontStyle: "normal",
                      fontWeight: "700",
                      fontSize: "11px",
                      width: "99%",
                      alignContent: "flex-start",
                      alignItems: "flex-start",
                      textTransform: "uppercase",
                      // backgroundColor: "green",
                      color: "#56909D",
                    }}
                  >
                    Zeal Zoft Pvt Ltd
                  </div>
                </div>
              </div>
              <div
                style={{
                  // backgroundColor: "blue",
                  height: "70px",
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "10px",
                    paddingLeft: "20px",
                    width: "45%",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      paddingBottom: "8px",
                    }}
                  >
                    <img
                      src={education}
                      alt=""
                      style={{ width: "22px", height: "22px" }}
                    />
                    <div
                      style={{
                        fontFamily: "Roboto",
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "12px",
                        paddingLeft: "10px",
                        justifyContent: "center",

                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      Any Graduate
                    </div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <img
                      src={suite}
                      alt=""
                      style={{ width: "22px", height: "22px" }}
                    />
                    <div
                      style={{
                        fontFamily: "Roboto",
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "12px",
                        justifyContent: "center",
                        paddingLeft: "10px",

                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      1-2 years
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    padding: "10px",
                    width: "60%",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      paddingBottom: "8px",
                    }}
                  >
                    <img
                      src={locate}
                      alt=""
                      style={{ width: "22px", height: "22px" }}
                    />
                    <div
                      style={{
                        fontFamily: "Roboto",
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "12px",
                        justifyContent: "center",
                        paddingLeft: "10px",

                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      Adyar, Chennai
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <img
                      src={pack}
                      alt=""
                      style={{ width: "22px", height: "22px" }}
                    />
                    <div
                      style={{
                        fontFamily: "Roboto",
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "12px",
                        justifyContent: "center",
                        paddingLeft: "10px",

                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      3-4 LPA
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  // backgroundColor: "purple",
                  height: "50px",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    fontFamily: "Roboto",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "15px",
                    marginLeft: "20px",
                    paddingTop: "15px",
                    color: "#56909D",
                  }}
                >
                  On-site | 2 Openings | Permanent
                </div>
              </div>
            </div>
            <div className="listitem">
              <div
                style={{
                  height: "30px",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-end",
                  alignItems: "center",

                  alignContent: "end",
                  width: "98%",
                }}
              >
                <FavoriteBorderIcon
                  style={{
                    width: "20px",
                    marginRight: "10px",
                    color: "#56909D",
                  }}
                />
                <div
                  style={{
                    fontFamily: "Roboto",
                    fontSize: "12px",
                    fontWeight: "400",
                    color: "#BDBCBC",
                  }}
                >
                  2 days ago
                </div>
              </div>
              <div
                style={{
                  backgroundColor: "white",
                  height: "50px",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "row",
                  width: "100%",
                }}
              >
                <img
                  src={Terms}
                  alt=""
                  style={{
                    width: "40px",
                    height: "40px",
                    marginLeft: "10px",
                    borderRadius: "50px",
                    backgroundColor: "#D9D9D9",
                  }}
                />
                <div
                  style={{
                    width: "100%",
                    marginLeft: "10px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "Roboto",
                      fontStyle: "normal",
                      fontWeight: "800",
                      fontSize: "18px",
                      textTransform: "uppercase",
                      // backgroundColor: "red",

                      width: "99%",
                      color: "#333333",
                    }}
                  >
                    UX UI designer
                  </div>
                  <div
                    style={{
                      fontFamily: "Roboto",
                      fontStyle: "normal",
                      fontWeight: "700",
                      fontSize: "11px",
                      width: "99%",
                      alignContent: "flex-start",
                      alignItems: "flex-start",
                      textTransform: "uppercase",
                      // backgroundColor: "green",
                      color: "#56909D",
                    }}
                  >
                    Zeal Zoft Pvt Ltd
                  </div>
                </div>
              </div>
              <div
                style={{
                  // backgroundColor: "blue",
                  height: "70px",
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "10px",
                    paddingLeft: "20px",
                    width: "45%",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      paddingBottom: "8px",
                    }}
                  >
                    <img
                      src={education}
                      alt=""
                      style={{ width: "22px", height: "22px" }}
                    />
                    <div
                      style={{
                        fontFamily: "Roboto",
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "12px",
                        paddingLeft: "10px",
                        justifyContent: "center",

                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      Any Graduate
                    </div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <img
                      src={suite}
                      alt=""
                      style={{ width: "22px", height: "22px" }}
                    />
                    <div
                      style={{
                        fontFamily: "Roboto",
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "12px",
                        justifyContent: "center",
                        paddingLeft: "10px",

                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      1-2 years
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    padding: "10px",
                    width: "60%",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      paddingBottom: "8px",
                    }}
                  >
                    <img
                      src={locate}
                      alt=""
                      style={{ width: "22px", height: "22px" }}
                    />
                    <div
                      style={{
                        fontFamily: "Roboto",
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "12px",
                        justifyContent: "center",
                        paddingLeft: "10px",

                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      Adyar, Chennai
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <img
                      src={pack}
                      alt=""
                      style={{ width: "22px", height: "22px" }}
                    />
                    <div
                      style={{
                        fontFamily: "Roboto",
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "12px",
                        justifyContent: "center",
                        paddingLeft: "10px",

                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      3-4 LPA
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  // backgroundColor: "purple",
                  height: "50px",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    fontFamily: "Roboto",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "15px",
                    marginLeft: "20px",
                    paddingTop: "15px",
                    color: "#56909D",
                  }}
                >
                  On-site | 2 Openings | Permanent
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            // backgroundColor: "purple",
            height: "100vh",
            // width: "100%",
            // display: "flex",
            // flexDirection: "column",
          }}
        >
          <div onClick={handlePress1}>
            Experience
            {isPressedexp ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </div>
          {/* <button class="dropbtn">Dropdown</button> */}
          {isPressedexp ? (
            <Box sx={{ width: 300 }}>
              {/* <Slider
                defaultValue={50}
                aria-label="Default"
                valueLabelDisplay="auto"
              /> */}
              <Slider
                defaultValue={50}
                aria-label="Default"
                valueLabelDisplay="auto"
              />
            </Box>
          ) : (
            ""
          )}
          <div className="dropslide" onClick={handlePress2}>
            Top Rated Location
            {isPressedtop ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </div>
          {/* <button class="dropbtn">Dropdown</button> */}
          {isPressedtop ? (
            <Box sx={{ width: 300 }}>
              <Slider
                defaultValue={50}
                aria-label="Default"
                valueLabelDisplay="auto"
              />
            </Box>
          ) : (
            ""
          )}
          <div onClick={handlePress3}>
            Job Positions
            {isPressedjob ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </div>
          {/* <button class="dropbtn">Dropdown</button> */}
          {isPressedjob ? (
            <Box sx={{ width: 300 }}>
              <Slider
                defaultValue={50}
                aria-label="Default"
                valueLabelDisplay="auto"
              />
            </Box>
          ) : (
            ""
          )}
          <div onClick={handlePress4}>
            Duration
            {isPressedduration ? (
              <KeyboardArrowUpIcon />
            ) : (
              <KeyboardArrowDownIcon />
            )}
          </div>
          {/* <button class="dropbtn">Dropdown</button> */}
          {isPressedduration ? (
            <Box sx={{ width: 300 }}>
              <Slider
                defaultValue={50}
                aria-label="Default"
                valueLabelDisplay="auto"
              />
            </Box>
          ) : (
            ""
          )}
          <div onClick={handlePress5}>
            Workspace
            {isPressedwork ? (
              <KeyboardArrowUpIcon />
            ) : (
              <KeyboardArrowDownIcon />
            )}
          </div>
          {/* <button class="dropbtn">Dropdown</button> */}
          {isPressedwork ? (
            <Box sx={{ width: 300 }}>
              <Slider
                defaultValue={50}
                aria-label="Default"
                valueLabelDisplay="auto"
              />
            </Box>
          ) : (
            ""
          )}
          <div onClick={handlePress6}>
            Package
            {isPressedpack ? (
              <KeyboardArrowUpIcon />
            ) : (
              <KeyboardArrowDownIcon />
            )}
          </div>
          {/* <button class="dropbtn">Dropdown</button> */}
          {isPressedpack ? (
            <Box sx={{ width: 300 }}>
              <Slider
                defaultValue={50}
                aria-label="Default"
                valueLabelDisplay="auto"
              />
            </Box>
          ) : (
            ""
          )}
          <div onClick={handlePress7}>
            Education
            {isPressededucation ? (
              <KeyboardArrowUpIcon />
            ) : (
              <KeyboardArrowDownIcon />
            )}
          </div>
          {/* <button class="dropbtn">Dropdown</button> */}
          {isPressededucation ? (
            <Box sx={{ width: 300 }}>
              <Slider
                defaultValue={50}
                aria-label="Default"
                valueLabelDisplay="auto"
              />
            </Box>
          ) : (
            ""
          )}
          <div onClick={handlePress8}>
            Top Companies
            {isPressedtopcom ? (
              <KeyboardArrowUpIcon />
            ) : (
              <KeyboardArrowDownIcon />
            )}
          </div>
          {/* <button class="dropbtn">Dropdown</button> */}
          {isPressedtopcom ? (
            <Box sx={{ width: 300 }}>
              <Slider
                defaultValue={50}
                aria-label="Default"
                valueLabelDisplay="auto"
              />
            </Box>
          ) : (
            ""
          )}
        </div>
      </div>
      <div style={{ height: "100vh", width: "100%" }}>
        <BasicTabs />
      </div>
      {/* <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          width: "100%",
        }}
      >
        <div className="mainhead">
          <FormControl variant="standard" sx={{ minWidth: 120, width: 200 }}>
            <InputLabel id="demo-simple-select-label">
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "-20px",
                }}
              >
                <img
                  src={Terms}
                  style={{ width: "20px", marginRight: "3px" }}
                />
                <h5>Terms</h5>
              </div>
            </InputLabel>
            <Select
              IconComponent={KeyboardArrowDownIcon}
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={age}
              onChange={handleChange}
              label="Age"
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="standard" sx={{ minWidth: 120, width: 200 }}>
            <InputLabel id="demo-simple-select-label">
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "-20px",
                }}
              >
                <img
                  src={position}
                  style={{ width: "20px", marginRight: "3px" }}
                />
                <h5>Job Title</h5>
              </div>
            </InputLabel>
            <Select
              IconComponent={KeyboardArrowDownIcon}
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={age}
              onChange={handleChange}
              label="Age"
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div> */}
      {/* <Jobseekerselectlist /> */}
    </div>
  );
}
