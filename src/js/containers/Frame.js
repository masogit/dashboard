import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Box } from 'grommet';
import { bindActionCreators } from 'redux';
import { Header, Footer, Sidebar } from '../components';
import { deviceActions } from '../actions';

class Frame extends Component {

  componentDidMount() {
    // this.props.actions.loadDeviceTypes();
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

let mapDispatchProps = (dispatch) => ({
  actions: bindActionCreators(deviceActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchProps)(Frame);

