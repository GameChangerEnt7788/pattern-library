import React, { Component } from "react";

import { Test } from "./pattern/componentLibrary";

const componentList = [{ Test: <Test /> }];

class App extends Component {
  state = {
    selectedPattern: "PatternPopularThread",
    selectedComponent: <Test />,
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
              <h1>Components</h1>
              <h2>Cards</h2>
              <ul className="pattern-list">
                {componentList.map((val, i) => {
                  return (
                    <li
                      onClick={() =>
                        this.setState({
                          selectedComponent: Object.values(val)[0],
                        })
                      }
                    >
                      {console.log(Object.values(val)[0])}
                      {Object.keys(val)[0]}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="column-maincontent">
              {/* /////// CENTER COLUMN \\\\\\\ */}
              {this.state.selectedComponent}
            </div>
          </div>

          <div className="footer">Footer</div>
        </div>
      </div>
    );
  }
}

export default App;
