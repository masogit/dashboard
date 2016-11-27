import React, { Component } from 'react';
import { Box, Header, Headline, Icons, Anchor } from 'grommet';
import { Deck } from './index';
import { Link } from 'react-router';

const { Expand } = Icons.Base;
export default class Home extends Component {
  render() {
    return (
      <Box pad="small" flex={true}>
        <Header justify="between">
          <Headline size="small">Home page</Headline>
          <Anchor icon={<Expand />} label="Full Screen" tag={Link} to="/preview" />
        </Header>
        <Deck present={true} wrapper />
      </Box>
    );
  }
}
