import React, { Component } from 'react';
import { App, Box, LoginForm } from 'grommet';
import store, { types } from '../reducers';
import { browserHistory } from 'react-router';

export default class Login extends Component {
  login(fields) {
    if (fields.username) {
      browserHistory.push('/dashboard/home');
      store.dispatch({type: types.LOGIN, login: fields.username});
    }
  }

  render() {
    return (
        <App>
          <Box full={true} align="center" justify="center">
            <LoginForm
            align="center"
            title="Grommet Demo"
            usernameType='text'
            onSubmit={this.login}
            defaultValues={{
              username: '',
              rememberMe: true
            }}/>
          </Box>
        </App>
    );
  }
}
