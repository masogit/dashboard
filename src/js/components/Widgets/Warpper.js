import React, {PropTypes} from 'react';
import { Box, Heading } from 'grommet';

const Warpper = (props) => {
  const {children, status, name, background, icon, tools} = props;
  const classes = ['box'];
  if (status) {
    classes.push(`box-${status}`);
  }
  
  if (background) {
    classes.push(`bg-${background}-gradient`);
  }

  return (
    <Box className='ui-sortable' pad='small'>
      <Box className={classes.join(' ')}>
        <Box className='box-header ui-sortable-handle' pad={{horizontal: 'small'}}>
          {icon && <i className={`fa fa-${icon}`}/>}
          <Box className='box-header'>
            <Heading tag='h3' strong={true}>{name}</Heading>
          </Box>
          {tools && <Box className='box-tools pull-right'>{tools}</Box>}
        </Box>
        {children}
      </Box>
    </Box>
  );
};

Warpper.defaultProps = {
  status: 'default'
};

Warpper.propTypes = {
  name: PropTypes.string.required,
  status: PropTypes.oneOf(['success', 'info', 'primary', 'danger', 'warning', 'default']),
  background: PropTypes.oneOf(['blue', 'light-blue', 'teal', 'aqua', 'yellow',
    'purple', 'green', 'red', 'black', 'maroon'])
};

export default Warpper;
