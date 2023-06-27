import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { TextField } from "@mui/material";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ minWidth: "500px" }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          justifyContent: "center",
          alignContent: "center",
          display: "flex",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Personal" {...a11yProps(0)} />
          <Tab label="Experience" {...a11yProps(1)} />
          <Tab label="Education" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <TextField
            label="Username"
            sx={{
              maxWidth: 777,
              "& .MuiOutlinedInput-root": {
                borderRadius: "20px", // Adjust the value as per your requirement
              },
              marginBottom: 5,
            }}
          />
          <TextField
            label="Mobile Number"
            sx={{
              width: 777,
              "& .MuiOutlinedInput-root": {
                borderRadius: "20px", // Adjust the value as per your requirement
              },
              marginBottom: 5,
            }}
          />
          <TextField
            label="Mail Id"
            sx={{
              width: 777,
              "& .MuiOutlinedInput-root": {
                borderRadius: "20px", // Adjust the value as per your requirement
              },
              marginBottom: 5,
            }}
          />
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TextField label="Mail Id" />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <TextField label="Mobile Number" />
      </TabPanel>
    </Box>
  );
}
