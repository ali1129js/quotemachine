/**
 * @Author: Ali
 * @Date:   2018-12-23T11:19:57+01:00
 * @Last modified by:   Ali
 * @Last modified time: 2018-12-30T10:27:05+01:00
 */

import React, { Component } from "react";
import "./App.css";
import QuoteMachine from "./QuoteMachine";

class App extends Component {
  render() {
    return (
      <div className="container">
        <header className="App-header">React Quote machine</header>
        <QuoteMachine />
      </div>
    );
  }
}

export default App;
