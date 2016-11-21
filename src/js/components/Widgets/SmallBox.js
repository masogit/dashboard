import React, {PropTypes} from 'react';
import { Box } from 'grommet';

const SmallBox = (props) => {
  const {icon, number, description, background, onClick} = props;
  return (
    <div className={`small-box bg-${background}`}>
      <Box className='inner'>
        <h3>{number}</h3>
        <p>{description}</p>
      </Box>
      {icon && <Box className='icon'><i className={`fa fa-${icon}`} /></Box>}
      <Box tag='a' className='small-box-footer' onClick={onClick}>
        More info
        <i className='fa fa-arrow-circle-right' />
        </Box>
    </div>
  );
};

SmallBox.defaultProps = {
  icon: 'shopping-cart',
  number: 150,
  background: 'aqua',
  description: 'New Orders'
};

SmallBox.propTypes = {
  icon: PropTypes.string,
  description: PropTypes.string,
  number: PropTypes.number,
  background: PropTypes.string
};

export default SmallBox;
