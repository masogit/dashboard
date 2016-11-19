import React, { Component } from 'react';
import { Anchor, Sidebar, Label, List, ListItem, Box, SearchInput } from 'grommet';
import { Link } from 'react-router';
import UserPanel from './UserPanel';

export default class SideBar extends Component {
  componentDidMount() {
    this.searchInput.inputRef.type = 'text';
    this.searchInput.inputRef.class += 'form-control';
  }

  renderTreeView(menus, {activeIndex = 0, root = false, active = false}) {
    const classes = root ? ['sidebar-menu'] : ['treeview-menu'];
    if (active) {
      classes.push('active');
    }

    return (
      <List className={classes.join(' ')}>
        {
          menus.map((menu, index) => {
            if (menu.root) {
              return <ListItem key={index} className='header' separator='none'>{menu.root}</ListItem>;
            } else {
              return (
                <ListItem key={index} className={'treeview' + (menu.active ? ' active' : '')}
                  separator='none' direction='column' align='stretch'
                  pad={root ? 'small' : 'none'}>
                  <Anchor tag={Link} >
                    <i className={`fa fa-${menu.icon || 'circle-o'}`} />
                    <span>{menu.title}</span>
                    <Box className='pull-right-container' direction='row'>
                      {menu.menus && <i className="fa fa-angle-left pull-right" />}
                      {menu.status && menu.status.map((item, index) => (
                        <small key={index} className={`label pull-right bg-${item.color}`}>{item.text}</small>
                      ))}
                    </Box>
                  </Anchor>                
                  {menu.menus && this.renderTreeView(menu.menus, {active: menu.active})}
                </ListItem>
              );
            }
          })
        }
      </List>
    );
  }

  render() {    
    const { menus , logo, title, user } = this.props;
    let isArray = menus instanceof Array;
    if (menus)
      return (
        <Sidebar size='small' className='main-sidebar main-header'>          
          <Box tag='a' className='logo'>
            <span className='logo-mini'>
              <img src={`img/${logo}`} width='30px' />
            </span>
            <Label margin='small' className='logo-lg'>{title}</Label>
          </Box>
          <UserPanel name={user.name} />
          <SearchInput ref={node => this.searchInput = node} className='sidebar-form' placeHolder='Search...'/>
          {!isArray && this.renderMenu(menus)}
          {isArray && this.renderTreeView(menus, { root: true })}
        </Sidebar>
      );
    else
      return null;
  }
}
