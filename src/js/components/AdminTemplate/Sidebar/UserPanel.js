import React, { Component } from 'react';
import {  Box } from 'grommet';
import Status from 'grommet/components/icons/Status';

export default class UserPanel extends Component {
  render() {    
    const { icon, name, status = 'ok' } = this.props;
    return (
      <Box className='user-panel' direction='row' pad='small' flex={false}>
        <Box className='pull-left image'>
          <img src={`img/${icon || 'user2-160x160.jpg'}`} className='img-circle' />
        </Box>
        <Box className='pull-left info'>
          {name}
          <Box direction='row' align='center' justify='between'>
            <Status value={status} size='small' />
            {status}
          </Box>
        </Box>
      </Box>
    );
  }
}
