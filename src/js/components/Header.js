import React, { Component } from 'react';
import { Anchor, Header, Title, Menu, Search } from 'grommet';
import { Link } from 'react-router';
import UserIcon from 'grommet/components/icons/base/User';

export default class HeaderArea extends Component {
  render() {
    const {modules, path, user, title} = this.props;
    return (
      <Header justify="between" separator='bottom'>
        <Title> <img src='img/mobile-app-icon.png' width='30px'/> {title} </Title>
        <Menu direction="row" align="center" responsive={false}>
          {
            modules && modules.map((module, index) => {
              return (
                <Anchor key={index} tag={Link} to={module.router}
                        label={module.title} className={path.indexOf(module.router) == 0 ? 'active' : ''} />
              );
            })
          }
          <Search dropAlign={{ "right": "right" }} />
          <Menu icon={<UserIcon />} label={user.name}>
            <Anchor label="Logout" tag={Link} to={'/login'}/>
          </Menu>
        </Menu>
      </Header>
    );
  }
}
