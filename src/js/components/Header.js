import React, { Component } from 'react';
import { Anchor, Header, Title, Menu, Search } from 'grommet';
import { Link } from 'react-router';

export default class HeaderArea extends Component {
  render() {
    const {modules, active, setActive, user, title} = this.props;
    return (
      <Header justify="between" separator='bottom'>
        <Title> {title} </Title>
        <Menu direction="row" align="center" responsive={false}>
          {
            modules && modules.map((module, index) => {
              return (
                <Anchor key={index} tag={Link} to={module.router}
                        label={module.title} className={index == active ? 'active' : ''}
                        onClick={() => setActive(index)} />
              );
            })
          }
          <Search dropAlign={{ "right": "right" }} />
        </Menu>
      </Header>
    );
  }
}
