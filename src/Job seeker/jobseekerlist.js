import React, { useState } from "react";
import "../Job seeker/jobseekerlist.css";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { makeStyles } from "@material-ui/core";

import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Terms from "../assets/terms.svg";
import position from "../assets/position.svg";
import Jobseekerselectlist from "./Jobseekerselectlist";

export default function Jobseekerlist() {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className="main">
      <div style={{ backgroundColor: "red", height: "150vh", width: "100%" }}>
        .
      </div>
      <div
        style={{ backgroundColor: "blue", height: "150vh", width: "100%" }}
      ></div>
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
