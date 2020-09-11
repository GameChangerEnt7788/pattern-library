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

export const PrimaryContent = (props) => {
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
      <h1>Grid spacing</h1>
      <div className="card" style={{ margin: "30px 0 30px 0" }}>
        <div className="gridGrid-panel">
          <div id="column1">
            <div className="primaryGrid-panel">
              <div
                style={{
                  background: "#CFCFCF",
                  height: "250px",
                  display: "flex",
                  padding: "1.5vw",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Hero
              </div>
              <div style={{ padding: "0 1.5vw 1.5vw 1.5vw" }}>
                <div
                  className="primaryGrid-subPanel"
                  style={{ background: "#4ADA63" }}
                >
                  <div>Block 1</div>
                  <div>Block 2</div>
                  <div>Block 2</div>
                </div>
              </div>
            </div>
          </div>
          <div id="column2">
            <div className="two-column" style={{ marginBottom: "30px" }}>
              <div>Padding:</div>
              <div>1.5vw</div>
              <div>Grid Row Gap:</div>
              <div>1.5vw</div>
            </div>

            <div>
              General grid and padding spacing of 1.5vw, with a primary hero
              panel stretching the full width of the screen on mobile, and the
              subpanel having a 1.5vw padding.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
