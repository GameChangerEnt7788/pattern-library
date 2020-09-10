import React from "react";

import { text_truncate } from "../methods/tools";

export const PopularThread = (props) => {
  return (
    <div>
      <div
        className="card"
        style={{
          height: "200px",
          width: props.fullwidth ? "100%" : props.width,
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 0,
            display: "flex",
            padding: "0px 15px 0px 15px",
            boxSizing: "border-box",
            webkitBoxSizing: "border-box",
            MozBoxSizing: "border-box",
            top: 0,
            width: "100%",
            height: "100%",
            background: `linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.4) 60%,
      rgba(0, 0, 0, 0.9) 100%
    ),
    url("${props.image}") no-repeat center center`,

            backgroundSize: "cover",
            borderRadius: `13px`,
            color: "white",
            flexDirection: "column",
            justifyContent: `flex-end`,
          }}
        >
          <div style={{ position: "absolute", top: "10px", right: "10px" }}>
            <img src="images/chevron.svg" />
          </div>
          <div
            style={{ position: "absolute", top: "10px", left: "10px" }}
            /*onClick={ link to user profile }*/
          >
            <img
              style={{ borderRadius: "100%", border: "solid 2px #FFFFFF" }}
              src={props.profileThumbnail}
            />
          </div>
          <p style={{ fontSize: "12px", lineHeight: 1.5, opacity: 1 }}>
            {text_truncate(props.description, 55)}
          </p>
        </div>
      </div>

      <div style={{ height: props.gap }}></div>
      {props.line ? (
        <>
          <div style={{ borderBottom: "solid 1px #D8D8D8" }}></div>
          <div style={{ height: props.gap }}></div>
        </>
      ) : null}
    </div>
  );
};
