import React from "react";
export const Divider = (props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <div
        className="dividerGrid"
        style={{ width: props.fullwidth ? "100%" : props.width }}
      >
        <div>
          <hr
            style={{
              border: `.1px solid ${props.color}`,
              borderTop: "0px",
              opacity: "0.4",
            }}
          />
        </div>
        <div style={{ color: props.color }}>{props.label}</div>
        <div>
          <hr
            style={{
              border: `.1px solid ${props.color}`,
              borderTop: "0px",
              opacity: "0.4",
            }}
          />
        </div>
      </div>
    </div>
  );
};
