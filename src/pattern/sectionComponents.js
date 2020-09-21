import React from "react";
import { CodeBlock, vs2015 } from "react-code-blocks";
import { TabbedSections } from "./sections/sections";
import SlideShow from "./elements/SlideShow";
import { RatingsChart } from "./elements/elements";
/* import { Button } from "./forms/Button";
import SlideShow from "./elements/SlideShow";
import { ModalMain } from "./ModalMain";
import { faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; */

export const PatternTabbedSections = (props) => {
  const ratingsData = [68, 12, 10, 6, 4];
  const slideData = [
    {
      image: "images/produc1.jpg",
    },
    {
      image: "images/produc2.jpg",
    },
  ];
  const data = [
    { title: "Details", content: <SlideShow data={slideData} /> },
    {
      title: "Reviews",
      content: <RatingsChart data={ratingsData} fullwidth />,
    },
    {
      title: "Discussions",
      content:
        "Anything you want in here, whether it be JSX, plain text or a complex component",
    },
  ];

  const patternListTable = [
    {
      param: "data",
      type: "Object Array (See Sample)",
    },
    { param: "width", type: "Integer" },
    { param: "fullwidth", type: "Boolean" },
    { param: "gap", type: "Integer" },
  ];

  const code = `
  const data = [
    { title: "Details", content: <SlideShow data={slideData} /> },
    { title: "Reviews", content: "Text, JSX or Components" },
    { title: "Discussions", content: "Text, JSX or Components" },
  ];

  <TabbedSections
  data={data}
  fullwidth
  />`;
  return (
    <>
      <div
        className="primaryBackground"
        style={{
          width: "100%",
          height: "auto",
          padding: "30px",
          position: "relative",
        }}
      >
        <div>
          <TabbedSections data={data} fullwidth gap={35} />
        </div>
      </div>

      <div className="card" style={{ margin: "30px 0 30px 0" }}>
        <h3 style={{ textDecoration: "underline" }}>
          {`<`}TabbedSections{`/>`}
        </h3>
        <div /* style={patternListTable} */>
          {patternListTable.map((val, i) => {
            return (
              <>
                <div className="patternListStyle">
                  <span id="pattern-name">{val.param}</span>
                  <span id="pattern-parameter">{val.type}</span>
                </div>
              </>
            );
          })}
        </div>
      </div>

      <div className="card" style={{ marginBottom: "30px" }}>
        <h3 style={{ textDecoration: "underline" }}>Code</h3>
        <CodeBlock
          text={code}
          language={"jsx"}
          showLineNumbers={false}
          wrapLines={false}
          theme={vs2015}
        />
      </div>
    </>
  );
};
