import React, { Component } from 'react';
import { Anchor, Menu, Search, List, ListItem, Box } from 'grommet';
import { Link } from 'react-router';
import UserIcon from 'grommet/components/icons/base/User';
import { bindActionCreators } from 'redux';
import { deviceActions } from '../../../actions';
import { connect } from 'react-redux';

class CustomMenu extends Component {
  render() {
    const {modules, path, user} = this.props;
    return (
      <List align="center" responsive={false} className='nav navbar-nav'>
        <Search dropAlign={{ "right": "right" }} />
        {
          modules && modules.map((module, index) => {
            const {icon, status = 'success', number, router} = module;
            return (
              <ListItem className={path.indexOf(module.router) == 0 ? 'open' : ''} pad='none' separator='none'>
                <Anchor key={index} tag={Link} to={router} icon={icon && <i className={`fa fa-${icon}-o`}></i>}
                  label={<span className={'label label-' + status}>{number}</span>} />
              </ListItem>
            );
          })
        }
        <Box justify='end'>
          <Menu icon={<UserIcon />} label={user.name} className='user-menu'>
            <Anchor label="Logout" tag={Link} to={'/login'}/>
          </Menu>
        </Box>
      </List>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    modules: state.header.modules,
    user: state.header.user
  };
};

let mapDispatchProps = (dispatch) => ({
  actions: bindActionCreators(deviceActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchProps)(CustomMenu);

