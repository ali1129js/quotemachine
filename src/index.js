/**
 * @Author: Ali
 * @Date:   2018-12-23T11:20:14+01:00
 * @Last modified by:   Ali
 * @Last modified time: 2018-12-30T10:29:36+01:00
 */

import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
