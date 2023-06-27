import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import { TextField } from "@mui/material";
import "../profile/personalprofile.css";
export default function Personalprofilejobprovider() {
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

    // Handle the file change logic here
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
      <div className="personalmain">
        <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
          <Controller
            control={control}
            name="firstname"
            render={({ field }) => (
              <TextField
                {...field}
                placeholder="Username"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "20px",
                    // Adjust the value as per your requirement
                  },
                  marginBottom: 2,
                  // Default width for small screens
                  // "@media (min-width:500px)": {
                  //   width: "100%", // Width for screens equal to or larger than 600px
                  // },
                  // "@media (min-width:960px)": {
                  //   width: "30%", // Width for screens equal to or larger than 960px
                  // },
                }}
              />
            )}
          />

          <Controller
            control={control}
            name="Mobile Number"
            render={({ field }) => (
              <TextField
                {...field}
                placeholder="Mobile Number"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "20px",
                    // Adjust the value as per your requirement
                  },
                  marginBottom: 2,
                }}
              />
            )}
          />

          <Controller
            control={control}
            name="mail Id"
            render={({ field }) => (
              <TextField
                {...field}
                placeholder="Mail Id"
                InputLabelProps={{
                  shrink: true,
                }}
                sx={{
                  // background: "red",

                  "& .MuiOutlinedInput-root": {
                    borderRadius: "20px",
                  },
                  marginBottom: 2,
                }}
              />
            )}
          />

          <Controller
            name="select"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                placeholder="Gender"
                styles={{
                  marginBottom: 2,

                  control: (provided, state) => ({
                    ...provided,
                    // border: state.isFocused
                    //   ? "20px solid #aaa"
                    //   : "1px solid #ccc",
                    borderRadius: "20px",
                  }),
                  // option: (provided, state) => ({
                  //   ...provided,
                  //   width: "30%",
                  // }),
                  menu: (provided) => ({
                    ...provided,
                    // maxWidth: 777,
                  }),
                  placeholder: (provided) => ({
                    ...provided,
                    color: "#333", // specify the desired color here
                    fontStyle: "italic", // specify the desired font style here
                    // marginLeft: "30px",
                    textAlign: "left",
                  }),
                }}
                options={[
                  { value: "male", label: "male" },
                  { value: "female", label: "female" },
                  { value: "other", label: "other" },
                ]}
              />
            )}
          />
          <Controller
            control={control}
            name="Gender"
            render={({ field }) => (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignContent: "center",
                }}
              >
                <div>Add Resume</div>

                <label htmlFor="fileInput" className="file-label">
                  {selectedFile ? selectedFile.name : "Choose File"}
                </label>
                <input
                  {...field}
                  type="file"
                  id="fileInput"
                  className="fileInput"
                  onChange={handleFileChange}
                  accept="application/pdf,application/vnd.ms-excel"
                />
              </div>
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
