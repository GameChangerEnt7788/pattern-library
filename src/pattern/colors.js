import React from "react";
import { CodeBlock, vs2015 } from "react-code-blocks";

export const Pallette = (props) => {
  const colorPallette = [
    {
      name: "Peppercorn",
      color: "#241C15",
      description: "Primary text colour on light background",
      type: "dark",
    },
    {
      name: "Gray",
      color: "#808080",
      description: "Secondary text colour on light background",
      type: "dark",
    },

    {
      name: "Ghostwhite",
      color: "#F8F8FF",
      description: "Primary text colour on dark background",
      type: "light",
    },
    {
      name: "Alto",
      color: "#D8D8D8",
      description: "Light Gray for secondary buttons",
      type: "light",
    },
    {
      name: "Silver Chalice",
      color: "#A9A9A9",
      description: "Secondary text colour on dark background",
      type: "light",
    },
    {
      name: "Dandelion",
      color: "#FFD462",
      description: "Accent color on dark background",
      type: "light",
    },
    {
      name: "Torch Red",
      color: "#FF004A",
      description: "Selected Like ♥",
      type: "dark",
    },
    {
      name: "Green Gradient",
      gradient: ["#31D339", "#2C6D04"],
      description: "Earned scores in scorecard",
      type: "dark",
    },
    {
      name: "Guardsman Red",
      color: "#B70000",
      description: "Alert",
      type: "dark",
    },
  ];

  const code = `<Test
        name={"Next Gen Tech"}
        description={"Best tech ever"}
        amount={34}
        large={false}
   />`;
  return (
    <>
      <div>
        <h1>Pallette</h1>
      </div>
      <div className="card" style={{ margin: "30px 0 30px 0" }}>
        <div>
          <div>
            <div>
              <div></div>
              <div className="colorGrid">
                {colorPallette.map((val, i) => {
                  return (
                    <>
                      <div id="column1">
                        <div className="colorBoxContainer">
                          <div>
                            <h3>{val.name}</h3>
                          </div>
                          {val.gradient ? (
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "flex-end",
                              }}
                            >
                              <div>{val.gradient[0]}</div>
                              <div
                                style={{
                                  margin: "0 10px 0 10px",
                                  color: "#CCCCCC",
                                }}
                              >
                                →
                              </div>
                              <div>{val.gradient[1]}</div>
                            </div>
                          ) : (
                            val.color
                          )}

                          <p>
                            <i>{val.description}</i>
                          </p>
                        </div>
                      </div>
                      <div id="column2">
                        <div
                          className={`colorBox ${val.type}`}
                          style={{
                            width: "100px",
                            height: "100px",
                            background: `${
                              val.gradient
                                ? `linear-gradient(
                            -180deg,
                            ${val.gradient[0]} 0%,
                            ${val.gradient[1]} 100%
                          )`
                                : val.color
                            }`,
                          }}
                        >
                          {val.gradient ? (
                            <>
                              <div>{val.gradient[0]}</div>
                              <div
                                style={{
                                  margin: "10px 0px 10px 0px",
                                }}
                              >
                                ↓
                              </div>
                              <div>{val.gradient[1]}</div>
                            </>
                          ) : (
                            val.color
                          )}
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        {/*    <div>
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
        </div> */}
      </div>

      {/*     <div className="card" style={{ marginBottom: "30px" }}>
        <h3 style={{ textDecoration: "underline" }}>Code</h3>
        <CodeBlock
          text={code}
          language={"jsx"}
          showLineNumbers={false}
          wrapLines={false}
          theme={vs2015}
        />
      </div> */}
    </>
  );
};

export const Panels = (props) => {
  const panels = [
    {
      name: "Primary Background",
      class: "primaryBackground",
      description: "Main dark background behind all elements",
      type: "dark",
      code: `.primaryBackground {
        background-color: #000000;
        background-image: url("/images/bgTile.png"),
          linear-gradient(270deg, #000000 0%, #444444 51%, #000000 100%);
        background-repeat: repeat;
        background-size: 50px, cover, cover;
        background-position: top left, center center, center center;
      }`,
    },
    {
      name: "Hero Background",
      class: "heroBackground",
      description: "Hero background for login / signup",
      type: "dark",
      code: `.heroBackground {
         background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.6) 0%,
            rgba(0, 0, 0, 0.6) 100%
          ),
          url("/images/heroBack.jpg") no-repeat center center;
        background-repeat: none;
        background-size: cover;
      }`,
    },
    {
      name: "Black overlay",
      class: "blackOverlay",
      description: "50% black opacity, used for overlay panels and form fields",
      type: "dark",
      code: `.blackOverlay {
        background: rgba(0,0,0,0.50);
        }`,
    },
    {
      name: "Raised card",
      class: "raisedCard",
      description:
        "Light gray raised card for highlighted content, paired with bottom shadow component",
      type: "dark",
      code: `.raisedCard {
        background-color: #a7a7a7;
        background-image: url("/images/bgTile.png"),
          linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.67) 0%,
            rgba(136, 136, 136, 0.28) 100%
          );
        background-repeat: repeat, cover, cover;
        background-size: 270px;
        padding: 20px;
      }`,
    },
    {
      name: "Raised card dark",
      class: "raisedCardDark",
      description: "Darker gray raised card for modal headers",
      type: "dark",
      code: `.raisedCardDark {
        background-color: #241c15;
        background-image: url("/images/bgTile.png"),
          linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.47) 0%,
            rgba(136, 136, 136, 0.28) 100%
          );
        background-repeat: repeat, cover, cover;
        background-size: 270px;
        padding: 20px;
      }`,
    },
    {
      name: "Solid white panel",
      class: "solidWhitePanel",
      description:
        "Solid white panel for body copy, scores, settings, comments and core content areas",
      type: "dark",
      code: `.solidWhitePanel {
        background: #f8f8ff;
      }`,
    },
  ];

  return (
    <>
      <div>
        <h1>Panel Colors</h1>
      </div>
      <div className="card" style={{ margin: "30px 0 30px 0" }}>
        <div>
          <div>
            <div>
              <div></div>
              <div className="colorGrid-panel">
                {panels.map((val, i) => {
                  return (
                    <>
                      <div id="column1">
                        <div className="colorBoxContainer">
                          <div>
                            <h3>{val.name}</h3>
                          </div>

                          <p>
                            <i>{val.description}</i>
                          </p>
                        </div>
                      </div>
                      <div id="column2">
                        <div
                          className={`${val.class} colorBox ${val.type}`}
                          style={{
                            width: "150px",
                            height: `${val.height ? val.height : "200px"}`,
                          }}
                        >
                          {val.text ? val.text : null}
                        </div>
                      </div>
                      <div id="column3">
                        <CodeBlock
                          text={val.code}
                          language={"css"}
                          showLineNumbers={false}
                          wrapLines={true}
                          theme={vs2015}
                        />
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const Titles = (props) => {
  const titles = [
    {
      name: "Black title bar",
      class: "titleBar",
      description: "Black headings for all internal sections",
      type: "dark",
      text: "TITLES",
      height: "40px",
      code: `.titleBar {
        background-color: #4e4e4e;
        background-image: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.08) 50%,
            rgba(0, 0, 0, 0.03) 43%
          ),
          linear-gradient(180deg, #3b3b3b 0%, #000000 100%);
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5),
          inset 0 1px 3px 0 rgba(0, 0, 0, 0.5);
          font-family: 'Bebas Neue', cursive;
          font-size: 24px;
          text-transform: uppercase;
          color: #f8f8ff;
          padding: 6px 8px 3px 8px;
      }`,
    },
    {
      name: "Highlighted title bar",
      class: "titleBar-highlight",
      description: "When black title bar has highlighted nav sections",
      type: "dark",
      text: "TITLES",
      height: "40px",
      code: `.titleBar-highlight {
        background-color: #4e4e4e;
        background-image: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.08) 50%,
            rgba(0, 0, 0, 0.03) 43%
          ),
          linear-gradient(180deg, #CC9600 0%, #683300 100%);
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5),
          inset 0 1px 3px 0 rgba(0, 0, 0, 0.5);
          font-family: 'Bebas Neue', cursive;
          font-size: 24px;
          text-transform: uppercase;
          color: #f8f8ff;
          padding: 6px 8px 3px 8px;
      }`,
    },
    {
      name: "Title - WATCH",
      class: "title-watch",
      description: "Primary color title bar for Watch section",
      type: "dark",
      text: "WATCH",
      height: "40px",
      code: `.title-watch {
        background-image: linear-gradient(
            -45deg,
            rgba(0, 0, 0, 0.07) 60%,
            rgba(255, 255, 255, 0.08) 60%
          ),
          linear-gradient(180deg, rgba(190, 3, 75, 0.99) 2%, #000000 98%);
          font-family: 'Bebas Neue', cursive;
        font-size: 22px;
        letter-spacing: 1px;
        color: #f8f8ff;
      }`,
    },
    {
      name: "Title - SCORES",
      class: "title-scores",
      description: "Primary color title bar for Watch section",
      type: "dark",
      text: "SCORES",
      height: "40px",
      code: `.title-scores {
        background-image: linear-gradient(
            -45deg,
            rgba(0, 0, 0, 0.07) 60%,
            rgba(255, 255, 255, 0.08) 60%
          ),
          linear-gradient(180deg, #BE8703 2%, #000000 98%);
          font-family: 'Bebas Neue', cursive;
        font-size: 22px;
        letter-spacing: 1px;
        color: #f8f8ff;
      }`,
    },
    {
      name: "Title - IMMERSIVE PLAYGROUND",
      class: "title-immersive",
      description: "Primary color title bar for Watch section",
      type: "dark",
      text: "IMMERSIVE",
      height: "40px",
      code: `.title-immersive {
        background-image: linear-gradient(
            -45deg,
            rgba(0, 0, 0, 0.07) 60%,
            rgba(255, 255, 255, 0.08) 60%
          ),
          linear-gradient(180deg, #008C4E 2%, #000000 98%);
          font-family: 'Bebas Neue', cursive;
        font-size: 22px;
        letter-spacing: 1px;
        color: #f8f8ff;
      }`,
    },
    {
      name: "Title - NEXT GEN TECH",
      class: "title-nextgen",
      description: "Primary color title bar for Watch section",
      type: "dark",
      text: "NEXT GEN TECH",
      height: "40px",
      code: `.title-nextgen{
        background-image: linear-gradient(
            -45deg,
            rgba(0, 0, 0, 0.07) 60%,
            rgba(255, 255, 255, 0.08) 60%
          ),
          linear-gradient(180deg, #008EF9 2%, #000000 98%);
          font-family: 'Bebas Neue', cursive;
        font-size: 22px;
        letter-spacing: 1px;
        color: #f8f8ff;
      }`,
    },
  ];

  return (
    <>
      <div>
        <h1>Titles</h1>
      </div>
      <div className="card" style={{ margin: "30px 0 30px 0" }}>
        <div>
          <div>
            <div>
              <div></div>
              <div className="colorGrid-panel">
                {titles.map((val, i) => {
                  return (
                    <>
                      <div id="column1">
                        <div className="colorBoxContainer">
                          <div>
                            <h3>{val.name}</h3>
                          </div>

                          <p>
                            <i>{val.description}</i>
                          </p>
                        </div>
                      </div>
                      <div id="column2">
                        <div
                          className={`${val.class} colorBox ${val.type}`}
                          style={{
                            width: "150px",
                            height: `${val.height ? val.height : "200px"}`,
                          }}
                        >
                          {val.text ? val.text : null}
                        </div>
                      </div>
                      <div id="column3">
                        <CodeBlock
                          text={val.code}
                          language={"css"}
                          showLineNumbers={false}
                          wrapLines={true}
                          theme={vs2015}
                        />
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
