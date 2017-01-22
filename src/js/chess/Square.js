/**
 * Created by huangling on 20/01/2017.
 */
import React, {Component, PropTypes} from 'react';

export default class Square extends Component {
  render() {
    const {black, children} = this.props;
    const fill = black ? 'black' : 'white';
    const stroke = black ? 'white' : 'black';

    return (
      <div style={{
        backgroundColor: fill,
        color: stroke,
        width: '100%',
        height: '100%'
      }}>
        {children}
      </div>
    );
  }
}

Square.propTypes = {
  black: PropTypes.bool
};
