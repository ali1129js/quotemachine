/**
 * @Author: Ali
 * @Date:   2018-12-24T12:03:11+01:00
 * @Last modified by:   Ali
 * @Last modified time: 2019-01-03T16:42:31+01:00
 */
import React, { Fragment } from "react";

const QuoteMachine = props => (
  <Fragment>
    <div className="container">
      <div className="row">
        <div className="col-sm">
          <div className="jumbotron jumbotron-fluid">
            <h5 className="display-5">{props.newQuote.quoteText}</h5>
            <p className="lead"> {props.newQuote.quoteAuthor}</p>
            <hr className="my-4" />
            <button
              className="btn btn-primary btn-lg m-3"
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
