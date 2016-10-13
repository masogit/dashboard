import '../scss/index.scss';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { App, Box } from 'grommet';

class Main extends Component {
  render () {
    return (
      <App centered={false}>
        <Box>TEST MY FRAMEWORK</Box>
      </App>
    );
  }
};

let element = document.getElementById('content');
ReactDOM.render(React.createElement(Main), element);

document.body.classList.remove('loading');
