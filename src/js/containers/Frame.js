import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Box } from 'grommet';
import { Header, Footer, Sidebar } from '../components';
import { types } from '../reducers';

class Frame extends Component {
  render () {
    const { modules, active, setActive, user, title, menus } = this.props;
    return (
      <Box full={true}>
        <Header modules={modules} active={active} setActive={setActive} user={user} title={title}/>
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
    active: state.header.activeIndex,
    user: state.header.user,
    title: state.header.title,
    menus: state.header.menus
  };
};

let mapDispatchProps = (dispatch) => {
  return {
    setActive: (index) => dispatch({type: types.ACTIVE, index: index})
  };
};

export default connect(mapStateToProps, mapDispatchProps)(Frame);

