/**
 * @Author: Ali
 * @Date:   2018-12-23T11:20:14+01:00
 * @Last modified by:   Ali
 * @Last modified time: 2018-12-23T11:20:14+01:00
 */

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
