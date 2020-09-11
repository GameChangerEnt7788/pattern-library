import React from "react";
const xValidated = (
  <div className="xValidated">
    <img src="/images/check.svg" />
  </div>
);
const xError = (
  <div className="xError">
    <img src="/images/error.svg" />
  </div>
);
export const Input = (props) => {
  return (
    <div
      className={
        props.theme === "dark" ? "inputField-dark" : "inputField-light"
      }
      style={{
        width: props.fullwidth ? "100%" : props.width,
        height: props.height,
        /*     marginTop: props.gap, */
        marginBottom: props.gap,

        height: "100%",
      }}
    >
      <div className="errorIcon">
        {props.error ? xError : null}
        {!props.error && props.validated ? xValidated : null}
      </div>
      {props.icon ? (
        <div className="xIcon" style={{ height: props.height }}>
          {props.icon}
        </div>
      ) : null}
      <input
        placeholder={props.placeholder}
        name={props.name}
        type={props.type}
        handleChange={props.handleChange}
        autoComplete={props.autoComplete}
        style={{
          color: props.error ? "#B70000" : props.color,
          height: props.height,
          /* background: props.error && "#FFF0F0", */
          borderColor: `${props.error && "rgba(255, 4, 4, 0.5)"}`,
        }}
      />

      {props.submitButton ? (
        <div
          className={
            props.buttonType === "post"
              ? "postButton cursor"
              : "submitButton cursor"
          }
          onClick={props.submitButton}
        >
          <img src={props.submitImg} />
        </div>
      ) : null}
    </div>
  );
};
