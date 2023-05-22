import React, { useState } from "react";
import "../Job seeker/jobseekerlist.css";
import Jobseekerselectlist from "./Jobseekerselectlist";

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
          backgroundColor: "blue",
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
                  backgroundColor: "red",
                  height: "50px",
                  width: "100px",
                }}
              ></div>
            </div>
          </div>
        </div>
        <div
          style={{ backgroundColor: "purple", height: "100vh", width: "100%" }}
        ></div>
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
