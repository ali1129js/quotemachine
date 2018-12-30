/**
 * @Author: Ali
 * @Date:   2018-12-24T12:03:11+01:00
 * @Last modified by:   Ali
 * @Last modified time: 2018-12-30T10:16:17+01:00
 */
import React, { Component } from "react";
import axios from "axios";

class QuoteMachine extends Component {
  constructor() {
    super();
    this.state = {
      quoteText: null,
      quoteAuthor: null,
      color: "white"
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
          quoteText: res.data.quoteText,
          quoteAuthor: res.data.quoteAuthor,
          color: "#" + Math.floor(Math.random() * 16777215).toString(16)
        });
      });
  }

  render() {
    const { quoteText, quoteAuthor, color } = this.state;
    return (
      <div className="" style={{ background: color }}>
        QuoteMachine
        <br />
        {quoteText}
        <br />
        <strong> {quoteAuthor} </strong>
        <br />
        <button onClick={this.getRandQuote}>Show a random quote</button>
      </div>
    );
  }
}
export default QuoteMachine;
/*
const URL2 = 'https://cors-anywhere.herokuapp.com/https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en'
const URL =
  "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
*/
