(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,o){e.exports=o(46)},44:function(e,t,o){},46:function(e,t,o){"use strict";o.r(t);var n=o(0),a=o.n(n),r=o(10),u=o.n(r),i=(o(23),o(11)),c=o(12),l=o(15),s=o(13),m=o(16),d=o(2),h=o(14),w=o.n(h),p=(o(44),function(e){return a.a.createElement(n.Fragment,null,a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col-sm"},a.a.createElement("div",{className:"jumbotron jumbotron-fluid"},a.a.createElement("h5",{className:"display-5"},e.newQuote.quoteText),a.a.createElement("p",{className:"lead"}," ",e.newQuote.quoteAuthor),a.a.createElement("hr",{className:"my-4"}),a.a.createElement("button",{className:"btn btn-primary btn-lg m-3",onClick:e.getRandQuote},"Show a random quote"),a.a.createElement("button",{className:"btn btn-outline-primary btn-lg",onClick:e.tweetQoute},"Tweet this Quote"))))))}),b=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(s.a)(t).call(this))).tweetQoute=function(){var t=e.state.newQuote.quoteText,o=e.state.newQuote.quoteAuthor;window.open("https://twitter.com/intent/tweet?text="+encodeURIComponent(t)+" "+encodeURIComponent(o),"","left=0,top=0,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0")},e.state={newQuote:{quoteText:null,quoteAuthor:null,color:"white"}},e.getRandQuote=e.getRandQuote.bind(Object(d.a)(Object(d.a)(e))),e.tweetQoute=e.tweetQoute.bind(Object(d.a)(Object(d.a)(e))),e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.getRandQuote()}},{key:"getRandQuote",value:function(){var e=this;w.a.get("https://cors-anywhere.herokuapp.com/https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en").then(function(t){console.log(t.data),void 0===t.data.quoteText?e.setState({newQuote:{quoteText:"Corrupted format , click again please",quoteAuthor:null,color:"#"+Math.floor(16777215*Math.random()).toString(16)}}):e.setState({newQuote:{quoteText:t.data.quoteText,quoteAuthor:t.data.quoteAuthor,color:"#"+Math.floor(16777215*Math.random()).toString(16)}})})}},{key:"render",value:function(){return a.a.createElement("div",{className:"App",style:{position:"fixed",background:this.state.newQuote.color,transition:"all .7s ease-in",minHeight:"100%",minWidth:"100%"}},a.a.createElement("div",{className:"quotes",style:{margin:"30px"}},a.a.createElement(p,{newQuote:this.state.newQuote,getRandQuote:this.getRandQuote,tweetQoute:this.tweetQoute})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(a.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,2,1]]]);
//# sourceMappingURL=main.937a691c.chunk.js.map