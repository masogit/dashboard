import React, { Component } from 'react';
import { Anchor, Box } from 'grommet';
import { Link } from 'react-router';

export default class Sidebar extends Component {
  render() {
    const { menus } = this.props;
    return (
      <Box separator="right" style={{width: '200px'}} align="center">
        {
          menus && menus.map((menu, index) => {
            return <Anchor key={index} tag={Link} to={menu.router} label={menu.title} />;
          })
        }
      </Box>
    );
  }
}
