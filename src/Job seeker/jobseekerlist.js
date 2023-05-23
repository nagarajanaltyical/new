import React, { useState } from "react";
import "../Job seeker/jobseekerlist.css";
import Jobseekerselectlist from "./Jobseekerselectlist";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Terms from "../assets/terms.svg";
import education from "../assets/Education.svg";
import locate from "../assets/Location.svg";
import suite from "../assets/Experience.svg";
import pack from "../assets/Package.svg";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function valuetext(value) {
  return `${value}°C`;
}

export default function Jobseekerlist() {
  const [age, setAge] = useState("");

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
            width: "100%",
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
          style={{ backgroundColor: "purple", height: "100vh", width: "100%" }}
        >
          <div class="dropdown">
            <button class="dropbtn">Dropdown</button>
            <div class="dropdown-content">
              <Box sx={{ width: 300 }}>
                <Slider
                  aria-label="Small steps"
                  defaultValue={0.00000005}
                  getAriaValueText={valuetext}
                  step={0.00000001}
                  marks
                  min={-0.00000005}
                  max={0.0000001}
                  valueLabelDisplay="auto"
                />
              </Box>
              {/* <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a> */}
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ backgroundColor: "green", height: "50vh", width: "100%" }}
      ></div>
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
