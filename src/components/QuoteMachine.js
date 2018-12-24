/**
 * @Author: Ali
 * @Date:   2018-12-24T12:03:11+01:00
 * @Last modified by:   Ali
 * @Last modified time: 2018-12-24T15:34:04+01:00
 */
import React, { Component } from 'react'

const URL = 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1'

class QuoteMachine extends Component {
  constructor(){
    super()
  this.getRandQuote = this.getRandQuote.bind(this)
  }
  getRandQuote(){
    fetch(URL)
    .then(res => res.json())
    .then(data => {
      console.log(data[0])
    })
  }
  render(){
    return (
      <div className="">
        QuoteMachine
        <button onClick={this.getRandQuote}>
          Show a random quote
        </button>
      </div>
    )
  }
}
export default QuoteMachine
/*
const URL2 = 'https://cors-anywhere.herokuapp.com/https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en'

*/
