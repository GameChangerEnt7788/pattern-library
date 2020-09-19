import React, { useState, useRef, useEffect } from "react";

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
export const useOutsideAlerter = (ref, menuClose) => {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        menuClose();
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
      return true;
    };
  }, [ref]);
};

export const Select = (props) => {
  const wrapperRef = useRef(null);

  const [on, selected] = useState(false);
  const [placeholder, setPlaceholderHook] = useState(props.placeholder);

  const onOpen = () => {
    //  props.onClick && props.onClick();
    selected(!on);
  };
  const setPlaceholder = (item) => {
    setPlaceholderHook(item);
    selected(!on);
    props.onChange(item);
  };
  const menuClose = () => {
    //  props.onClick && props.onClick();
    selected(false);
  };
  useOutsideAlerter(wrapperRef, menuClose);

  return (
    <div
      ref={wrapperRef}
      style={{
        position: "relative",
        width: props.fullwidth ? "100%" : props.width,
      }}
    >
      <div
        className="inputField-light"
        style={{
          height: props.height,
          /*     marginTop: props.gap, */
          marginBottom: props.gap,
        }}
      >
        <div className="xIcon">
          <img
            style={{ height: props.height / 2 }}
            src="images/selectIcon.svg"
          />
        </div>

        <div
          onClick={() => onOpen()}
          className="selectBox cursor"
          style={{
            fontSize: props.height / 2.3,
            borderRadius: on ? `13px 13px 0px 0px` : `13px 13px 13px 13px`,
          }}
        >
          {placeholder}
        </div>
      </div>
      <div
        className="selectOptions"
        style={{
          marginTop: on ? props.height : 10,
          height: on ? "auto" : 0,
          maxHeight: "150px",
        }}
      >
        {props.listOptions.map((val, i) => {
          return <div onClick={() => setPlaceholder(val.item)}>{val.item}</div>;
        })}
      </div>
    </div>
  );
};
