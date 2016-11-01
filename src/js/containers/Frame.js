import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Box } from 'grommet';
import { Header, Footer, Sidebar } from '../components';
import { types } from '../reducers';

class Frame extends Component {

  componentDidMount() {
    this.props.initDeviceTypes();
  }

  render () {
    const { modules, user, title, location } = this.props;
    let module = modules.filter((module) => {
      return location.pathname.indexOf(module.router) === 0;
    })[0];

    let menus = module && module.menus ? module.menus : null;

    return (
      <Box full={true}>
        <Header modules={modules} path={location.pathname} user={user} title={title}/>
        <Box flex={true} direction="row">
          <Sidebar menus={menus} />
          <Box flex={true}>{this.props.children}</Box>
        </Box>
        <Footer />
      </Box>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    modules: state.header.modules,
    user: state.header.user,
    title: state.header.title
  };
};

let mapDispatchProps = (dispatch) => {
  return {
    setActive: (index) => dispatch({type: types.ACTIVE, index: index}),
    initDeviceTypes: () => dispatch({ type: types.INIT_DEVICE_TYPE })
  };
};

export default connect(mapStateToProps, mapDispatchProps)(Frame);

