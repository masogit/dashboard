import React, { Component } from 'react';
import { Anchor, Sidebar, Label, List, ListItem, Box, SearchInput } from 'grommet';
import { Link } from 'react-router';
import UserPanel from './UserPanel';

export default class SideBar extends Component {
  componentDidMount() {
    this.searchInput.inputRef.type = 'text';
    this.searchInput.inputRef.class += 'form-control';
  }

  renderTreeView(menus, activeIndex = 0, root = false) {
    return (
      <List className={root ? 'sidebar-menu' : 'treeview-menu'}>
        {root && <ListItem className='header' separator='none'>MAIN NAVIGATION</ListItem>}
        {
          menus.map((menu, index) => {
            const listItem = (
              <ListItem key={index} className={'treeview' + (activeIndex == index ? ' active' : '')}
                separator='none' direction='column' align='stretch'
                pad={root ? 'small' : 'none'}>
                <Anchor tag={Link} icon={<i className={`fa fa-${menu.icon || 'circle'}`} />}
                  label={menu.title} to={menu.router} />
                <Box className='pull-right-container'>
                  {menu.menus && <i className="fa fa-angle-left pull-right"/>}
                </Box>
                {menu.menus && this.renderTreeView(menu.menus)}
              </ListItem>
            );          
            return listItem;
          })
        }
      </List>
    );
  }

  render() {
    // <Header justify="between" >
    //         <Title> <img src={`img/${logo}`} width='30px' /> {title} </Title>
    // </Header>
    
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
          {isArray && this.renderTreeView(menus, 0, true)}
        </Sidebar>
      );
    else
      return null;
  }
}
