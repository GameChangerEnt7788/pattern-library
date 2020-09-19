import React, { useState, useEffect } from "react";
import gsap from "gsap";
import { BottomShadow } from "../elements/elements";
export const TabbedSections = (props) => {
  // const [element, buttonGlow] = useState(false);

  const [section, sectionSelect] = useState(0);

  return (
    <div style={{ width: props.fullwidth ? "100%" : props.width }}>
      <div
        className="tabbedHeader"
        style={{ gridTemplateColumns: `repeat(${props.data.length}, 1fr)` }}
      >
        {props.data.map((val, i) => {
          return (
            <div
              className={`${
                section === i ? "titleBar-highlight" : "titleBar cursor"
              }`}
              onClick={() => sectionSelect(i)}
              style={{
                textAlign: "center",
                pointerEvents: section === i ? "none" : "all",
              }}
            >
              {val.title}
            </div>
          );
        })}
      </div>
      {props.data.map((val, i) => {
        return (
          <>
            {section === i ? (
              <div
                className="solidWhitePanel"
                style={{ width: "100%", padding: "20px" }}
              >
                {val.content}
              </div>
            ) : null}
          </>
        );
      })}
      <div>
        <BottomShadow height={props.gap} fullwidth />
      </div>
    </div>
  );
};
