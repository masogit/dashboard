import '../scss/index.scss';

import React from 'react';
import { Provider } from 'react-redux';
import store from './reducers';
import { Router, browserHistory } from 'react-router';
import ReactDOM from 'react-dom';
import routes from './routes';

let element = document.getElementById('content');
ReactDOM.render(<Provider store={store}>
                  <Router history={browserHistory} routes={routes} />
                </Provider>, element);

document.body.classList.remove('loading');
