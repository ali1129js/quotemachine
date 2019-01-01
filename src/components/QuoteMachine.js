/**
 * @Author: Ali
 * @Date:   2018-12-24T12:03:11+01:00
 * @Last modified by:   Ali
 * @Last modified time: 2019-01-01T18:17:24+01:00
 */
import React, { Fragment } from "react";

const QuoteMachine = props => (
  <Fragment>
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="jumbotron jumbotron-fluid">
            <h1 className="display-4">{props.newQuote.quoteText}</h1>
            <p className="lead"> {props.newQuote.quoteAuthor}</p>
            <hr className="my-4" />
            <button
              className="btn btn-outline-primary btn-lg  mr-md-5"
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
