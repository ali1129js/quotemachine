/**
 * @Author: Ali
 * @Date:   2018-12-23T11:19:57+01:00
 * @Last modified by:   Ali
 * @Last modified time: 2018-12-30T16:01:43+01:00
 */

import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import QuoteMachine from "./QuoteMachine";

class App extends Component {
  constructor() {
    super();
    this.state = {
      newQuote: {
        quoteText: null,
        quoteAuthor: null,
        color: "white"
      }
    };
    this.getRandQuote = this.getRandQuote.bind(this);
  }
  componentDidMount() {
    this.getRandQuote();
  }
  getRandQuote() {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en"
      )
      .then(res => {
        console.log(res.data);
        this.setState({
          newQuote: {
            quoteText: res.data.quoteText,
            quoteAuthor: res.data.quoteAuthor,
            color: "#" + Math.floor(Math.random() * 16777215).toString(16)
          }
        });
      });
  }
  render() {
    return (
      <div
        className="container"
        style={{ background: this.state.newQuote.color }}
      >
        <header className="App-header">React Quote machine</header>
        <QuoteMachine
          newQuote={this.state.newQuote}
          getRandQuote={this.getRandQuote}
        />
      </div>
    );
  }
}

export default App;
