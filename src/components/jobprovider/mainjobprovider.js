import React from "react";

import { useState } from "react";
// import "../components/Mainpeofile.css";
// import Tabs from "./profile/Tabs";
// import Tab from "./profile/Tab";
import "../jobprovider/mainjobprovider.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers-pro";
import { makeStyles } from "@material-ui/core/styles";
import { useForm, Controller } from "react-hook-form";
import { Translate } from "@material-ui/icons";
import Companyprofilejobprovider from "./companyjob";
import Personalprofilejobprovider from "./personaljob";
// import Personalprofile from "./profile/personalprofile";
// import Education from "./profile/Education";
// import Experience from "./profile/Experience";

export default function Mainjobprovider() {
  const [short, setishort] = useState(true);

  let handleChange2 = (e) => {
    var files = e.target.files;
    var filesArray = [].slice.call(files);
    filesArray.forEach((e) => {
      console.log(e.name);
      console.log(e.size);
      console.log(e.type);
      console.log(e.lastModifiedDate);
    });
  };

  const [active, setActive] = useState(0);

  const handleChange = (newActive) => setActive(newActive);

  return (
    <div
      style={{
        marginTop: 100,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "#eefbff",
          width: "70%",
          height: "130vh",
          borderRadius: "44px",
        }}
      >
        <div
          style={{
            background: "#fff",
            width: "788px",
            height: "50px",
            borderRadius: "20px",
            boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div
            onClick={() => setishort(true)}
            className="togglepersonal"
            style={{
              backgroundColor: short === true ? "#56909D" : "transparent",
              width: "394px",
              height: "50px",
              borderRadius: "20px",
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
              // boxShadow:
              //   short === true ? "0px" : "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
            }}
          >
            Business Account
          </div>
          <div
            onClick={() => setishort(false)}
            style={{
              backgroundColor: short === false ? "#56909D" : "transparent",
              width: "394px",
              height: "50px",
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
              borderRadius: "20px",
            }}
          >
            Personal Account
          </div>
        </div>
        <div>
          {short ? (
            <Companyprofilejobprovider />
          ) : (
            <Personalprofilejobprovider />
          )}
        </div>
      </div>
    </div>
  );
}
