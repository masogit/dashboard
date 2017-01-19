/**
 * Created by huangling on 19/01/2017.
 */
import React, {Component} from 'react';
import store, {types} from '../reducers';
import {browserHistory} from 'react-router';
import {Box} from 'grommet';
import {Header, Footer, Sidebar} from '../components';

export default class PageDesigner extends Component {
  login(fields) {
    if (fields.username) {
      browserHistory.push('/home');
      store.dispatch({type: types.LOGIN, login: fields.username});
    }
  }

  render() {
    const modules = [{
      title: 'text'
    }, {
      title: 'image'
    }, {
      title: 'background'
    }];
    return (
      <Box full={true}>
        <Header modules={modules} title='all the elements'/>
        <Box flex={true} direction="row">
          <Sidebar />
          <Box flex={true}>play ground</Box>
        </Box>
        <Footer />
      </Box>
    );
  }
}

