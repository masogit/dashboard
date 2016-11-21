import React, {PropTypes} from 'react';
import { Box } from 'grommet';

const Warpper = (props) => {
  const {children, status, name} = props;
  return (
    <Box className='ui-sortable' pad='small'>
      <Box className={`box box-${status}`}>
        <Box className='box-header ui-sortable-handle'>
          {name}
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
  status: PropTypes.oneOf(['success', 'info', 'primary', 'danger', 'warning', 'default'])
};

export default Warpper;
