import React, { Component } from 'react';
import { Anchor, Menu, Search, List, ListItem, Box } from 'grommet';
import { Link } from 'react-router';

export default class CustomMenu extends Component {
  render() {
    const {modules, path, user} = this.props;
    return (
      <List className='nav navbar-nav'>
        <Search dropAlign={{ "right": "right" }} />
        {
          modules && modules.map((module, index) => {
            const {icon, status = 'success', number, router} = module;
            return (
              <ListItem key={index} className={path.indexOf(module.router) == 0 ? 'open' : ''} pad='none' separator='none'>
                <Anchor tag={Link} to={router} icon={icon && <i className={`fa fa-${icon}-o`}/>}
                  label={<span className={'label label-' + status}>{number}</span>} />
              </ListItem>
            );
          })
        }
        <Box justify='end' className='user-menu'>
          <Menu icon={<img src={`img/${user.icon || 'user2-160x160.jpg'}`} className='user-image' />} label={user.name}>
            <Anchor label="Logout" tag={Link} to={'/login'}/>
          </Menu>
        </Box>
      </List>
    );
  }
}

