import React, { useState } from "react";
import Box from "@mui/material/Box";
import "../Job seeker/Jobseekerselectlist.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { makeStyles } from "@material-ui/core";
import "../Job seeker/Jobseekerselectlist.css";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Terms from "../assets/terms.svg";
import position from "../assets/position.svg";

export default function Jobseekerselectlist() {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className="main">
      <div
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
              <MenuItem value={10}>Short Term</MenuItem>
              <MenuItem value={20}>Long Term</MenuItem>
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
      </div>
    </div>
  );
}
