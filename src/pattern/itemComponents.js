import React from "react";
import { CodeBlock, vs2015 } from "react-code-blocks";
import { RootItem } from "./items/items";
import { Button } from "./forms/Button";
import SlideShow from "./elements/SlideShow";
import { ModalMain } from "./ModalMain";
import { faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const PatternRootItem = (props) => {
  const patternListTable = [
    { param: "data", type: "Object (see code example)" },
    { param: "fullwidth", type: "Boolean" },
    { param: "mode", type: "String ('dark' or 'light')" },
    { param: "width", type: "Integer" },
  ];
  const data = {
    image: "images/produc1.jpg",
    title: "The Biggest Fan",
    subtitle: "“Season 1 - Episode 4”",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore…",
    comments: 36332,
    likes: 34534,
    views: 2524,
    price: 43,
    reviews: 34,
    reviewPercent: 89,
    share: false,
  };

  const code = `
  const data = {
    image: "images/produc1.jpg", // false for none
    title: "The Biggest Fan", // false for none
    subtitle: "“Season 1 - Episode 4”", // false for none
    description: "Lorem ipsum dolor sit...", // false for none
    comments: 36332, // false for none
    likes: 34534, // false for none
    views: 2524, // false for none
    price: 43, // false for none
    reviews: 34, // false for none
    reviewPercent: 89, // if reviews != false
    share: false,  // false for none
  };

  <RootItem
  data={data}
  mode="dark"
  fullwidth
  />`;
  return (
    <>
      <div
        className="primaryBackground"
        style={{
          width: "100%",
          height: "auto",

          justifyContent: "center",
          position: "relative",
        }}
      >
        <div>
          <RootItem data={data} mode="dark" fullwidth />
        </div>
      </div>
      <div
        className="solidWhitePanel"
        style={{
          width: "100%",
          height: "auto",
          padding: "20px",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <div>
          <RootItem data={data} mode="light" fullwidth />
        </div>
      </div>
      <div className="card" style={{ margin: "30px 0 30px 0" }}>
        <h3 style={{ textDecoration: "underline" }}>
          {`<`}RootItem{`/>`}
        </h3>
        <div>
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
