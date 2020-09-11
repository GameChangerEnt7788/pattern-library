import React, { useState, useEffect } from "react";

export const Button = (props) => {
  return (
    <div
      style={{
        position: "relative",
        /*         marginTop: props.gap, */
        marginBottom: props.gap,
      }}
    >
      <button
        disabled={props.disabled || props.submitting}
        onClick={props.onClick}
        className="primaryButton"
        style={{
          padding:
            props.size === "lg"
              ? "8px 60px 8px 60px"
              : props.size === "med"
              ? "8px 40px 8px 40px"
              : props.size === "sm"
              ? "1px 20px 1px 20px"
              : "auto",
          textTransform: "uppercase",
          borderRadius: props.borderRadius,
          cursor: props.disabled || props.submitting ? "" : "pointer",
          background: props.error ? "#FFF0F0" : "#ecedf1",
          borderColor: props.error && "rgba(255, 4, 4, 0.5)",
          fontSize:
            props.size === "lg"
              ? "13px"
              : props.size === "med"
              ? "11px"
              : props.size === "sm"
              ? "9px"
              : "auto",
          background:
            props.theme === "glass"
              ? "rgba(255,255, 255, 0.15)"
              : props.bgImage
              ? `url("${props.bgImage}") no-repeat center center transparent`
              : `linear-gradient(
            -45deg,
            rgba(0, 0, 0, 0.07) 60%,
            rgba(255, 255, 255, 0.08) 60%
          ),linear-gradient(
            180deg,
            ${
              props.disabled || props.submitting || !props.gradient
                ? "#666666"
                : props.gradient[0]
            } 0%,
            ${
              props.disabled || props.submitting || !props.gradient
                ? "#CCCCCC"
                : props.gradient[1]
            } 100%
          )`,
          backdropFilter: props.theme === "glass" && `blur(5px)`,
          color: props.disabled || props.submitting ? "#555555" : props.color,
          width: props.fullwidth ? "100%" : "auto",
          height:
            props.size === "lg"
              ? "45px"
              : props.size === "med"
              ? "37px"
              : props.size === "sm"
              ? "30px"
              : "auto",
        }}
      >
        {props.icon && <span id="buttonIcon">{props.icon}</span>}
        {props.submitting ? props.submitting : props.label}
      </button>
    </div>
  );
};

export const TextButton = (props) => {
  return (
    <div
      style={{
        fontSize: "14px",
        fontWeight: 900,
        marginBottom: props.gap,
        display: "inline-block",
      }}
      className="TextButton"
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <span style={{ marginRight: "7px" }}>
          {props.locked ? (
            <></>
          ) : /*   <FontAwesomeIcon size="s" color="#EBAE58" icon={faLock} /> */
          null}
        </span>
        {props.label}
        <span style={{ marginLeft: "7px" }}>{props.icon}</span>
      </div>
    </div>
  );
};

export const SelectButton = (props) => {
  const [on, setCount] = useState(props.checked);

  const onSubmit = () => {
    setCount(!on);
    props.onClick();
    console.log(on);
  };

  return (
    <div
      style={{
        position: "relative",
        /*         marginTop: props.gap, */
        marginBottom: props.gap,
      }}
    >
      <button
        onClick={() => onSubmit()}
        disabled={props.disabled || props.submitting}
        //  onClick={props.onClick}
        // className="testInput"
        style={{
          padding: props.padding,
          display: "flex",
          alignItems: "center",
          borderRadius: props.borderRadius,
          cursor: props.disabled || props.submitting ? "" : "pointer",
          background: props.error ? "#FFF0F0" : "#ecedf1",
          borderColor: props.error && "rgba(255, 4, 4, 0.5)",
          background: props.bgImage
            ? `url("${props.bgImage}") no-repeat center center transparent`
            : `linear-gradient(
              180deg,
              ${
                props.disabled || props.submitting || !props.gradient
                  ? "#666666"
                  : props.gradient[0]
              } 0%,
              ${
                props.disabled || props.submitting || !props.gradient
                  ? "#CCCCCC"
                  : props.gradient[1]
              } 100%
            )`,
          color: props.disabled || props.submitting ? "#555555" : props.color,
          width: props.fullwidth ? "100%" : "auto",
        }}
      >
        <div
          style={{
            background: "#FFFFFF",
            position: "absolute",
            width: "22px",
            height: "22px",
            boxShadow: "inset 1px 1px 3px 0 rgba(0,0,0,0.6)",
            borderRadius: "100%",
            paddingBottom: "-1px",
            left: "10px",
            color: "black",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {on ? (
            <div
              style={{
                borderRadius: "100%",
                padding: "6px",
                margin: 0,
                backgroundImage: `radial-gradient(100% 100%, #A6A6A6 0%, #000000 60%)`,
                /*  background: `radial-gradient(#e66465, #9198e5)`, */
              }}
            ></div>
          ) : null}
        </div>

        {props.submitting ? props.submitting : props.label}
      </button>
    </div>
  );
};
/*
export const ChevronBackButton = (props) => {
  return (
    <>
      <div
        style={{
          fontSize: "14px",
          fontWeight: 900,

          display: "flex",
        }}
        className="TextButton"
      >
        <Chevron color="#0155B0" size={20} />
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <span style={{ marginRight: "7px" }}>
            {props.locked ? (
              <FontAwesomeIcon size="s" color="#EBAE58" icon={faLock} />
            ) : null}
          </span>
          {props.label}
          <span style={{ marginLeft: "7px" }}>{props.icon}</span>
        </div>
      </div>
      <div style={{ height: props.gap }}></div>
    </>
  );
};
 */
