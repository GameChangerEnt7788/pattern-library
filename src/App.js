import React, { Component } from "react";

import { Test } from "./pattern/componentLibrary";
import { FormInput, PrimaryButton } from "./pattern/formComponents";
import { PatternDivider } from "./pattern/elementComponents";
import { Pallette, Panels, Titles } from "./pattern/colors";
import { Fonts, Scale } from "./pattern/type";
import {
  PrimaryContent /* SecondaryTiles, SecondaryProminent,FlushGrid, Scores */,
} from "./pattern/grid";
const componentList = [
  {
    type: {
      name: "UI Elements",
      components: [{ Divider: <PatternDivider /> }],
    },
  },
  {
    type: {
      name: "Forms",
      components: [
        { FormInput: <FormInput /> },
        { PrimaryButton: <PrimaryButton /> },
      ],
    },
  },
];

const foundationsList = [
  {
    type: {
      name: "UI Colors",
      components: [
        { Pallette: <Pallette /> },
        { Panels: <Panels /> },
        { Titles: <Titles /> },
      ],
    },
  },

  {
    type: {
      name: "Grid system",
      components: [
        { PrimaryContent: <PrimaryContent /> },
        /*         { SecondaryTiles: <SecondaryTiles /> },
        { SecondaryProminent: <SecondaryProminent /> },
        { FlushGrid: <FlushGrid /> },
        { Scores: <Scores /> }, */
      ],
    },
  },
  {
    type: {
      name: "Typography",
      components: [{ Fonts: <Fonts /> } /* , { Scale: <Scale /> } */],
    },
  },
];

class App extends Component {
  state = {
    selectedComponent: <PatternDivider />,
    page: "components",
  };
  sendSearch = () => {
    alert("searched");
  };
  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <div></div>
        <div className="pageHolderInside">
          <div className="column-two mainPage">
            <div
              className="margin-left primaryBackground"
              style={{ color: "#A9A9A9" }}
            >
              {/* /////// LEFT CONTENT \\\\\\\ */}
              <div>
                <img src="images/logo.png" style={{ width: "80%" }} />
              </div>
              <div className="uiNav">
                <span
                  className={
                    this.state.page === "foundations" ? "navOn" : "navOff"
                  }
                  onClick={() => this.setState({ page: "foundations" })}
                >
                  Foundations
                </span>
                <span>|</span>
                <span
                  className={
                    this.state.page === "components" ? "navOn" : "navOff"
                  }
                  onClick={() => this.setState({ page: "components" })}
                >
                  Components
                </span>
              </div>

              <>
                {(this.state.page === "components"
                  ? componentList
                  : foundationsList
                ).map((ui, i) => {
                  return (
                    <>
                      {console.log(ui)}
                      <h4 style={{ color: "#F8F8FF" }}>{ui.type.name}</h4>
                      <ul className="pattern-list">
                        {ui.type.components.map((component, i) => {
                          return (
                            <li
                              onClick={() =>
                                this.setState({
                                  selectedComponent: Object.values(
                                    component
                                  )[0],
                                })
                              }
                            >
                              {console.log(Object.values(component)[0])}
                              {Object.keys(component)[0]}
                            </li>
                          );
                        })}
                      </ul>
                    </>
                  );
                })}
              </>
            </div>
            <div className="column-maincontent">
              {/* /////// CENTER COLUMN \\\\\\\ */}
              {this.state.selectedComponent}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
