/**
 * @Author: Ali
 * @Date:   2018-12-23T11:19:57+01:00
 * @Last modified by:   Ali
 * @Last modified time: 2019-01-03T17:02:54+01:00
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
    this.tweetQoute = this.tweetQoute.bind(this);
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
        if (res.data.quoteText === undefined) {
          this.setState({
            newQuote: {
              quoteText: "Corrupted format , click again please",
              quoteAuthor: null,
              color: "#" + Math.floor(Math.random() * 16777215).toString(16)
            }
          });
        } else {
          this.setState({
            newQuote: {
              quoteText: res.data.quoteText,
              quoteAuthor: res.data.quoteAuthor,
              color: "#" + Math.floor(Math.random() * 16777215).toString(16)
            }
          });
        }
      });
  }
  tweetQoute = () => {
    const text = this.state.newQuote.quoteText;
    const quoteAuthor = this.state.newQuote.quoteAuthor;

    window.open(
      "https://twitter.com/intent/tweet?text=" +
        encodeURIComponent(text) +
        " " +
        encodeURIComponent(quoteAuthor),
      "",
      "left=0,top=0,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0"
    );
  };
  render() {
    return (
      <div
        className="App"
        style={{
          position: "fixed",
          background: this.state.newQuote.color,
          transition: "all .7s ease-in",
          minHeight: "100%",
          minWidth: "100%"
        }}
      >
        <div
          className="quotes"
          style={{
            margin: "30px"
          }}
        >
          <QuoteMachine
            newQuote={this.state.newQuote}
            getRandQuote={this.getRandQuote}
            tweetQoute={this.tweetQoute}
          />
        </div>
      </div>
    );
  }
}

export default App;
