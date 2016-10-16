import '../scss/index.scss';

import React from 'react';
import { Router, browserHistory } from 'react-router';
import ReactDOM from 'react-dom';
import routes from './routes';

let element = document.getElementById('content');
ReactDOM.render(<Router history={browserHistory} routes={routes} />, element);

document.body.classList.remove('loading');
