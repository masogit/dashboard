import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Box } from 'grommet';
import { bindActionCreators } from 'redux';
import { AdminTemplate, Footer } from '../components';
const { Header, Sidebar  } = AdminTemplate;
import { deviceActions } from '../actions';

class Frame extends Component {

  componentDidMount() {
    // this.props.actions.loadDeviceTypes();
  }

  render () {
    const { modules, user, title, location, color='blue' } = this.props;
    let module = modules.filter((module) => {
      return location.pathname.indexOf(module.router) === 0;
    })[0];

    let menus = module && module.menus ? module.menus : null;

    return (
        <Box full={true} className={'skin-' + color} direction='row'>
          <Sidebar menus={menus} title={title} user={user} />
          <Box flex={true}>
            <Box className='main-header' >
                <Header modules={modules} path={location.pathname} user={user}  />
            </Box>
            <Box flex={true}>{this.props.children}</Box>
            <Footer />
          </Box>
      </Box>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    modules: state.header.modules,
    user: state.header.user,
    title: state.header.title,
    logo: state.header.logo
  };
};

let mapDispatchProps = (dispatch) => ({
  actions: bindActionCreators(deviceActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchProps)(Frame);

