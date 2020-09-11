import React from "react";
import { CodeBlock, vs2015 } from "react-code-blocks";
import { Divider } from "./elements/elements";
import { Button } from "./forms/Button";
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
