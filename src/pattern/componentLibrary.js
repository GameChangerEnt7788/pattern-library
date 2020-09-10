import React from "react";
import { CodeBlock, vs2015 } from "react-code-blocks";

const patternListStyle = {
  display: "grid",
  gridTemplateColumns: "30vw 30vw",
  borderBottom: "solid 1px rgba(102, 102, 102, 0.1)",
  paddingBottom: "15px",
  paddingTop: "25px",
  alignItems: "flex-end",
};

export const Test = (props) => {
  const patternListTable = [
    { param: "Name", type: "String" },
    { param: "Description", type: "String" },
    { param: "Amount", type: "Integer" },
    { param: "Large", type: "Boolean" },
  ];
  const code = `<Test
        name={"Next Gen Tech"}
        description={"Best tech ever"}
        amount={34}
        large={false}
   />`;
  return (
    <>
      <div>Test Component</div>
      <div className="card" style={{ margin: "30px 0 30px 0" }}>
        <h3 style={{ textDecoration: "underline" }}>
          {`<`}Test{`/>`}
        </h3>
        <div /* style={patternListTable} */>
          {patternListTable.map((val, i) => {
            return (
              <>
                <div style={patternListStyle}>
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
