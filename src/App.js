import React, { Component } from "react";

import { Test } from "./pattern/componentLibrary";

const componentList = [
  {
    type: {
      name: "UI Elements",
      components: [
        { Test: <Test /> },
        { Test: <Test /> },
        { Test: <Test /> },
        { Test: <Test /> },
        { Test: <Test /> },
        { Test: <Test /> },
      ],
    },
  },
  {
    type: {
      name: "Forms",
      components: [
        { Test: <Test /> },
        { Test: <Test /> },
        { Test: <Test /> },
        { Test: <Test /> },
        { Test: <Test /> },
        { Test: <Test /> },
      ],
    },
  },
];

const foundationsList = [
  {
    type: {
      name: "Color",
      components: [
        { Test: <Test /> },
        { Test: <Test /> },
        { Test: <Test /> },
        { Test: <Test /> },
        { Test: <Test /> },
        { Test: <Test /> },
      ],
    },
  },
  {
    type: {
      name: "Data Visualization",
      components: [
        { Test: <Test /> },
        { Test: <Test /> },
        { Test: <Test /> },
        { Test: <Test /> },
        { Test: <Test /> },
        { Test: <Test /> },
      ],
    },
  },
  {
    type: {
      name: "Grid system",
      components: [
        { Test: <Test /> },
        { Test: <Test /> },
        { Test: <Test /> },
        { Test: <Test /> },
        { Test: <Test /> },
        { Test: <Test /> },
      ],
    },
  },
  {
    type: {
      name: "Typography",
      components: [
        { Test: <Test /> },
        { Test: <Test /> },
        { Test: <Test /> },
        { Test: <Test /> },
        { Test: <Test /> },
        { Test: <Test /> },
      ],
    },
  },
];

class App extends Component {
  state = {
    selectedComponent: <Test />,
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
            <div className="margin-left">
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
                      <h2>{ui.type.name}</h2>
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
