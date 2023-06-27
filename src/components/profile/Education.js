import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import { TextField } from "@mui/material";
import "../profile/education.css";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers-pro";

export default function Education() {
  //   const handleChange2 = (e) => {
  //     var files = e.target.files;
  //     var filesArray = [].slice.call(files);
  //     filesArray.forEach((e) => {
  //       console.log(e.name);
  //       console.log(e.size);
  //       console.log(e.type);
  //       console.log(e.lastModifiedDate);
  //     });
  //   };
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="edumain">
        <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
          <Controller
            control={control}
            name="Higher Educational Level"
            render={({ field }) => (
              <TextField
                {...field}
                placeholder="Higher Educational Level"
                sx={{
                  marginBottom: 2,

                  "& .MuiOutlinedInput-root": {
                    borderRadius: "20px", // Adjust the value as per your requirement
                  },
                }}
              />
            )}
          />
          <Controller
            control={control}
            name="Institute Name"
            render={({ field }) => (
              <TextField
                {...field}
                placeholder="Institute Name"
                sx={{
                  marginBottom: 2,

                  "& .MuiOutlinedInput-root": {
                    borderRadius: "20px", // Adjust the value as per your requirement
                  },
                }}
              />
            )}
          />
          <Controller
            control={control}
            name="Marks / CGPA"
            render={({ field }) => (
              <TextField
                {...field}
                placeholder="Marks / CGPA"
                sx={{
                  marginBottom: 2,

                  "& .MuiOutlinedInput-root": {
                    borderRadius: "20px", // Adjust the value as per your requirement
                  },
                }}
              />
            )}
          />
          <Controller
            control={control}
            name="start date"
            render={({ field }) => (
              <LocalizationProvider {...field} dateAdapter={AdapterDayjs}>
                <DatePicker
                  {...field}
                  sx={{
                    marginBottom: 2,

                    "& .MuiOutlinedInput-root": {
                      borderRadius: "20px", // Adjust the value as per your requirement
                    },
                  }}
                  renderInput={(props) => <TextField {...props} />}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </LocalizationProvider>
            )}
          />
          <Controller
            control={control}
            name="end date"
            render={({ field }) => (
              <LocalizationProvider {...field} dateAdapter={AdapterDayjs}>
                <DatePicker
                  {...field}
                  sx={{
                    marginBottom: 2,

                    "& .MuiOutlinedInput-root": {
                      borderRadius: "20px", // Adjust the value as per your requirement
                    },
                  }}
                />
              </LocalizationProvider>
            )}
          />

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <input className="input-field" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
}
