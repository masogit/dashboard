import React, {PropTypes} from 'react';
import { Box } from 'grommet';

const InfoBox = (props) => {
  const {icon, text, number, propgress, description, background} = props;
  return (
    <div className={`info-box bg-${background}`}>
      <span className='info-box-icon'>
        <i className={`fa fa-${icon}`}/>
      </span>
      <div className='info-box-content'>
        <Box tag='span' className='info-box-text'>{text}</Box>
        <Box tag='span' className='info-box-number'>{number}</Box>
        {propgress &&
          <Box className='progress'>
          <Box className='progress-bar' style={{ width: '70%' }} />
        </Box>
        }  
        <Box tag='span' className='progress-description'>{description}</Box>
      </div>
    </div>
  );
};

InfoBox.defaultProps = {
  icon: 'thumbs-o-up',
  text: 'LIKES',
  number: 41410,
  background: 'green',
  description: '70% Increase in 30 Days'
};

InfoBox.propTypes = {
  icon: PropTypes.string,
  text: PropTypes.string,
  description: PropTypes.string,
  number: PropTypes.number,
  background: PropTypes.string
};

export default InfoBox;
