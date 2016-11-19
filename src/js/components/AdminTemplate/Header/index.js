import React, { Component, PropTypes } from 'react';
import { Anchor, Header, Menu, Box } from 'grommet';
import CustomMenu from './CustomMenu';
import { systemActions } from '../../../actions';
import { connect } from 'react-redux';

Anchor.propTypes.tag = PropTypes.oneOfType([PropTypes.string, PropTypes.func]);

class HeaderArea extends Component {
  render() {
    return (
      <Header justify="end" separator='bottom' className='main-header'>
        <Menu className='navbar navbar-static-top' inline flex >
          <Box direction='row' justify='between' align='end'>
            <Anchor className='sidebar-toggle' role='button' onClick={this.props.toggle}>
              <span className='sr-only'>Toggle navigation</span>
            </Anchor>
            <Box className='navbar-custom-menu' direction='row'>
              <CustomMenu {...this.props} />
            </Box>
          </Box>
        </Menu>
      </Header>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    showSidebar: state.header.showSidebar
  };
};

let mapDispatchProps = (dispatch) => ({
  toggle: dispatch(systemActions.toggleSidebar)
});

export default connect(mapStateToProps, mapDispatchProps)(HeaderArea);
