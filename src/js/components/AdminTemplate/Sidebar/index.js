import React, { Component } from 'react';
import { Anchor, Sidebar, Label, List, ListItem, Box, SearchInput } from 'grommet';
import { Link } from 'react-router';
import UserPanel from './UserPanel';
import { connect } from 'react-redux';

const clearActive = (menus) => {
  menus.map(menu => {
    menu.active = false;
    if (menu.menus) {
      clearActive(menu.menus);
    }
  });
};

const activeParent = (menus, target, parents = []) => {
  let foundTarget = false;
  menus.map(menu => {
    if (foundTarget) {
      return;
    }

    if (menu == target) {
      parents.map(menu => menu.active = true);
      foundTarget = true;
    } else if (menu.menus) {
      parents.push(menu);
      activeParent(menu.menus, target, parents);
      parents.pop();
    }
  });
};

class SideBar extends Component {
  componentWillMount() {
    this.state = {
      menus: this.props.menus
    };
    this.updateSearchInput = this.updateSearchInput.bind(this);
    this.searchInputUpdated = false;
  }

  componentDidMount() {
    if (this.searchInput) {
      this.updateSearchInput();
    }
  }

  componentDidUpdate() {
    if (this.searchInput) {
      this.updateSearchInput();
    }
  }

  updateSearchInput() {
    if (this.searchInputUpdated) {
      return;
    }

    this.searchInput.inputRef.type = 'text';
    this.searchInput.inputRef.class += 'form-control';
  }

  renderTreeView(menus, {root = false, active = false}) {
    const classes = root ? ['sidebar-menu'] : ['treeview-menu'];
    if (active) {
      classes.push('active');
    }

    const showList = (menu) => {
      const currentStatus = menu.active;
      clearActive(this.state.menus);
      if (!currentStatus) {
        activeParent(this.state.menus, menu);
      }  
      menu.active = !currentStatus;
      this.setState({ menus: this.state.menus });
    };

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
                  <Anchor tag={Link} onClick={() => showList(menu)} >
                    <i className={`fa fa-${menu.icon || 'circle-o'}`} />
                    <span>{menu.title}</span>
                    <Box className='pull-right-container' direction='row'>
                      {menu.status && menu.status.map((item, index) => (
                        <small key={index} className={`label pull-right bg-${item.color}`}>{item.text}</small>
                      ))}
                      {menu.menus && <Box tag='i' className="fa fa-angle-left pull-right" />}
                    </Box>
                  </Anchor>
                  {menu.menus && this.renderTreeView(menu.menus, { active: menu.active })}
                </ListItem>
              );
            }
          })
        }
      </List>
    );
  }

  render() {
    const { logo, title, user, showSidebar } = this.props;
    const menus = this.state.menus;
      
    if (!showSidebar || !menus) {
      return null;
    }

    let isArray = menus instanceof Array;
       
    return (
      <Sidebar size='small' className='main-sidebar main-header'>
        <Box tag='a' className='logo' flex={false}>
          <span className='logo-mini'>
            <img src={`img/${logo}`} width='30px' />
          </span>
          <Label margin='small' className='logo-lg'>{title}</Label>
        </Box>
        <UserPanel name={user.name} />
        <SearchInput ref={node => this.searchInput = node} className='sidebar-form no-shrink' placeHolder='Search...' />
        {!isArray && this.renderMenu(menus)}
        {isArray && this.renderTreeView(menus, { root: true })}
      </Sidebar>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    showSidebar: state.header.showSidebar
  };
};

export default connect(mapStateToProps)(SideBar);
