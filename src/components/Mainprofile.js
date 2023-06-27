import * as React from "react";

import { useState } from "react";
import "../components/Mainpeofile.css";
import Tabs from "./profile/Tabs";
import Tab from "./profile/Tab";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers-pro";
import { makeStyles } from "@material-ui/core/styles";
import { useForm, Controller } from "react-hook-form";
import { Translate } from "@material-ui/icons";
import Personalprofile from "./profile/personalprofile";
import Education from "./profile/Education";
import Experience from "./profile/Experience";

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     "aria-controls": `simple-tabpanel-${index}`,
//   };
// }
// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   indicator: {
//     backgroundColor: "#126678",
//     height: "5px",
//     borderRadius: "20px", // Customize the color here
//   },
// }));
export default function Mainprofile() {
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

  const [value, setValue] = React.useState(0);

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };
  //   const [selectedDate, setSelectedDate] = useState(null);

  //   const handleDateChange = (date) => {
  //     setSelectedDate(date);
  //   };

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  const onSubmit1 = (data) => {
    console.log(data);
  };

  // const classes = useStyles();

  // const websiteCheck = async (value) => {
  //   let str = value;
  //   let urlCheck = str.indexOf("http://") === 0 || str.indexOf("https://") === 0;
  //   if (!urlCheck) {
  //     console.log("Protocol doesn't exist!");
  //     str = "http://" + str;
  //   } else {
  //     console.log("Protocol exists!");
  //   }

  //   return new Promise((resolve) => {
  //     urlExists(str, function (err, exists) {
  //       if (!exists) {
  //         console.log("Not available: ", str, exists);
  //       } else {
  //         console.log("Available: ", str, exists);
  //       }

  //       resolve(exists || "Not Available");
  //     });
  //   });
  // };

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
            display: "flex",
            justifyItems: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div
            className="add_profile"

            // style={{ fontSize: "30px", fontWeight: "500", lineHeight: "46px" }}
          >
            Add Your Profile
          </div>
          <AccountCircleIcon sx={{ fontSize: 100, color: "#126678" }} />
        </div>
        <div>
          <Tabs active={active} onChange={handleChange}>
            <Tab title={<div className="titlestyle">Personal</div>}>
              <Personalprofile />
            </Tab>
            <Tab title={<div className="titlestyle">Education</div>}>
              <Education />
            </Tab>
            <Tab title={<div className="titlestyle"> Experience</div>}>
              <Experience />
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
