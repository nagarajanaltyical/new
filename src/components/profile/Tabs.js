import React from "react";
import "../profile/Tabs.css";

const Tabs = ({ active, onChange, children }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignContent: "center",
          alignItems: "center",
          //   justifyItems: "stretch",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "95%",
            backgroundColor: "#fff",
            alignContent: "center",
            borderRadius: 10,
            alignItems: "center",
            //   justifyItems: "stretch",
            justifyContent: "space-around",
          }}
        >
          {children.map((c, index) => (
            <a
              href={"javascript: void(0)"}
              onClick={() => onChange(index)}
              className={active === index ? "activeTab" : ""}
              style={{
                // width: 500,
                width: 100,
                // backgroundColor: "red",
                justifyItems: "center",
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                height: 40,
              }}
            >
              {c.props.title}
            </a>
          ))}
        </div>
      </div>
      <div>{children[active]}</div>
    </>
  );
};

export default Tabs;
