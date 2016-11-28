import React, { Component } from 'react';
import { App, Box, LoginForm } from 'grommet';
import store from '../reducers';
import { TYPE } from '../constants';
import { browserHistory } from 'react-router';

export default class Login extends Component {
  login(fields) {
    if (fields.username) {
      browserHistory.push('/home');
      store.dispatch({ type: TYPE.LOGIN, login: fields.username });
    }
  }

  render() {
    return (
      <App>
        <Box full={true} align="center" justify="center">
          <LoginForm
            align="center"
            title="Dashboard Platform"
            usernameType='text'
            onSubmit={this.login}
            defaultValues={{
              username: '',
              rememberMe: true
            }} />
        </Box>
      </App>
    );
  }
}

