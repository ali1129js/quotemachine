/**
 * @Author: Ali
 * @Date:   2018-12-23T11:20:14+01:00
 * @Last modified by:   Ali
 * @Last modified time: 2019-01-17T16:48:50+01:00
 */

import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
