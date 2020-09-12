import React, { useState, useEffect } from "react";
import gsap from "gsap";
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

export const ScorePanel = (props) => {
  const [open, setOpen] = useState(props.open);
  const [disabled, buttonDisable] = useState(false);

  const numString = props.score ? props.score.toLocaleString() : "000";
  const numArray = numString.split("");

  const disableButton = () => {
    buttonDisable(false);
  };

  return (
    <div style={{}}>
      <div className="scorePanelContainer">
        <div className="scorePanel">
          <div className="scoreHolder">
            {numArray.map((val, i) => {
              return (
                <>
                  <span style={{ margin: "5px" }}>
                    <img src={`/images/score/${val}.svg`} />
                  </span>
                </>
              );
            })}
          </div>
          <img src="/images/score/panel.svg" />
        </div>
      </div>
      <div style={{ height: props.gap }}></div>
    </div>
  );
};

export const CollapsibleText = (props) => {
  const [open, setOpen] = useState(props.open);
  const [disabled, buttonDisable] = useState(false);
  /*   TweenLite.to(document.getElementById("textBox"), 0.5, {
    scaleY: 0,
    ease: Power4.easeOut,
  });
 */

  const disableButton = () => {
    buttonDisable(false);
  };

  const onSubmit = () => {
    console.log(open);
    buttonDisable(true);

    setOpen(!open);

    gsap.fromTo(
      document.getElementById("textBox"),

      {
        duration: props.speedInSeconds,
        css: { height: open ? "auto" : 0 },
        delay: 0,
        // ease: Power4.easeOut,
      },
      {
        css: { height: open ? 0 : "auto" },
        delay: 0,
        onComplete: disableButton,
        // ease: Power4.easeOut,
      }
    );

    gsap.to(document.getElementById("chevron"), {
      duration: props.speedInSeconds,
      rotation: open ? 0 : -180,
      transformOrigin: "center 55%",
      delay: 0,
      //ease: Power4.easeOut,
    });
  };

  return (
    <div style={{}}>
      <div
        className="collapsibleHeader"
        style={{
          marginBottom: "0px",
          padding: "10px",

          display: "flex",
          width: props.fullwidth ? "100%" : props.width,

          justifyContent: "space-between",
          alignItems: "center",
        }}
        disabled={disabled}
        onClick={() => onSubmit()}
      >
        {props.label}
        <div
          id="chevron"
          style={{
            marginRight: "10px",
            transform: props.open && `rotate(-180deg)`,
            transformOrigin: "center 55%",
          }}
        >
          <img src="images/chevronUp.svg" style={{ width: "20px" }} />
        </div>
      </div>

      <div
        id="textBox"
        style={{
          height: props.open ? "auto" : 0,
          overflowY: "hidden",
          display: "block",
        }}
      >
        <div
          style={{
            height: "100%",
            padding: "3px",
          }}
        >
          {props.content}
        </div>
      </div>
      <div style={{ height: props.gap }}></div>
    </div>
  );
};
