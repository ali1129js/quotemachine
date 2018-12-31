/**
 * @Author: Ali
 * @Date:   2018-12-24T12:03:11+01:00
 * @Last modified by:   Ali
 * @Last modified time: 2018-12-31T16:53:57+01:00
 */
import React, { Fragment } from "react";

const QuoteMachine = props => (
  <Fragment>
    <div className="">
      <div className="row">
        <div className="col">
          {props.newQuote.quoteText}
          <br />
          <strong> {props.newQuote.quoteAuthor} </strong>
          <br />
        </div>
      </div>
      <div className="col">
        <button
          className="btn btn-outline-primary btn-lg"
          onClick={props.getRandQuote}
        >
          Show a random quote
        </button>
        <button
          className="btn btn-outline-primary btn-lg"
          onClick={props.tweetQoute}
        >
          Tweet this Quote
        </button>
      </div>
    </div>
  </Fragment>
);

export default QuoteMachine;
/*
const URL2 = 'https://cors-anywhere.herokuapp.com/https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en'
const URL =
  "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";

  () => {
  this.props.newQuote(this.state.color);
*/
