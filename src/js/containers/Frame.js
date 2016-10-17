import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Box } from 'grommet';
import Header from '../components/Header';
import Footer from '../components/Footer';

class Frame extends Component {
  render () {
    const { modules, active, setActive } = this.props;
    return (
      <Box full={true}>
        <Header modules={modules} active={active} setActive={setActive}/>
        <Box flex={true} direction="row">
          <Box separator="right" style={{width: '200px'}}>Sidebar</Box>
          <Box>{this.props.children}</Box>
        </Box>
        <Footer />
      </Box>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    modules: state.header.modules,
    active: state.header.activeIndex
  };
};

let mapDispatchProps = (dispatch) => {
  return {
    setActive: (index) => dispatch({type: 'module_active', index: index})
  };
};

export default connect(mapStateToProps, mapDispatchProps)(Frame);

