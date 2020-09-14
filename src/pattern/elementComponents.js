import React from "react";
import { CodeBlock, vs2015 } from "react-code-blocks";
import {
  Divider,
  ScorePanel,
  CollapsibleText,
  NavBar,
} from "./elements/elements";

import { faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const PatternDivider = (props) => {
  const patternListTable = [
    { param: "label", type: "String" },
    { param: "width", type: "Integer" },
    { param: "fullwidth", type: "Boolean" },
    { param: "color", type: "String (#hexcode)" },
  ];
  const code = `<Divider
  color="#F8F8FF"
  width={"90%"}
  label="SELECT LANGUAGE"
  />`;
  return (
    <>
      <div
        className="primaryBackground"
        style={{ width: "50%", height: "80px" }}
      >
        <div>
          <Divider color="#F8F8FF" width={"90%"} label="SELECT LANGUAGE" />
        </div>
      </div>

      <div className="card" style={{ margin: "30px 0 30px 0" }}>
        <h3 style={{ textDecoration: "underline" }}>
          {`<`}Divider{`/>`}
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

export const PatternScorePanel = (props) => {
  const patternListTable = [{ param: "score", type: "Integer" }];
  const code = `<ScorePanel score={224125} />`;
  return (
    <>
      <div
        className="solidWhitePanel"
        style={{
          width: "50%",
          height: "130px",
          display: "flex",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <div>
          <ScorePanel score={224125} />
        </div>
      </div>

      <div className="card" style={{ margin: "30px 0 30px 0" }}>
        <h3 style={{ textDecoration: "underline" }}>
          {`<`}Score Panel{`/>`}
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

export const PatternCollapsible = (props) => {
  const patternListTable = [
    { param: "open", type: "Boolean (starting state)" },
    {
      param: "speedInSeconds",
      type: "Integer (longer times for longer content)",
    },
    { param: "label", type: "String" },
    { param: "fullwidth", type: "Boolean" },
    { param: "content", type: "String or JSX" },
  ];
  const code = `<CollapsibleText
  open={false}
  speedInSeconds={0.3}
  label="Sample Collapsible Text"
  fullwidth
  content={
    <div className="raisedCard">
      <div style={{ display: "flex", color: "#241C15" }}>
        <div style={{ padding: "10px" }}>
          <img src="images/soccer_placeholder.jpg" width={120} />
        </div>
        <div style={{ padding: "10px" }}>
          <h4 style={{ margin: "0px" }}>USA Hockey cancels...</h4>
          <div>Jul 10</div>
          <p>
            USA Hockey has called off holding its world junior summer
            showcase, set to be held in Michigan in two weeks. With 44
            players invited, the event was part of USA…
          </p>
        </div>
      </div>
    </div>
  }
/>`;
  return (
    <>
      <div
        className="primaryBackground"
        style={{
          width: "50%",
          height: "auto",
          display: "flex",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <div>
          <CollapsibleText
            open={false}
            speedInSeconds={0.3}
            label="Sample Collapsible Text"
            fullwidth
            content={
              <div className="raisedCard">
                <div style={{ display: "flex", color: "#241C15" }}>
                  <div style={{ padding: "10px" }}>
                    <img src="images/soccer_placeholder.jpg" width={120} />
                  </div>
                  <div style={{ padding: "10px" }}>
                    <h4 style={{ margin: "0px" }}>USA Hockey cancels...</h4>
                    <div>Jul 10</div>
                    <p>
                      USA Hockey has called off holding its world junior summer
                      showcase, set to be held in Michigan in two weeks. With 44
                      players invited, the event was part of USA…
                    </p>
                  </div>
                </div>
              </div>
            }
          />
        </div>
      </div>

      <div className="card" style={{ margin: "30px 0 30px 0" }}>
        <h3 style={{ textDecoration: "underline" }}>
          {`<`}Collapsible Section{`/>`}
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

export const PatternNavBar = (props) => {
  const patternListTable = [
    {
      param: "button",
      type:
        "String - (NavButtonHome, NavButtonPlay, NavButtonImmerse, NavButtonNextGen, NavButtonScores, NavButtonRewards or NavButtonHome)",
    },
    {
      param: "on",
      type: "Boolean",
    },
    {
      param: "size",
      type: "Integer",
    },
    { param: "onClick", type: "Function" },
  ];
  const code = ` <NavButton
  button="NavButtonHome"
  on={false}
  onClick={() => console.log("clicked")}
/>`;
  return (
    <>
      <div
        className="raisedCard"
        style={{
          width: "50%",
          height: "auto",
          display: "flex",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <div>
          <NavBar gap={35} />
        </div>
      </div>

      <div className="card" style={{ margin: "30px 0 30px 0" }}>
        <h3 style={{ textDecoration: "underline" }}>
          {`<`}Nav Buttons{`/>`}
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
