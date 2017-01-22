/**
 * Created by huangling on 21/01/2017.
 */
import React, {Component} from 'react';

export default class Image extends Component {
  render() {
    return (
      <div className="style">
        <div className="contents">
          <img style={{
            cursor: 'move'
          }} src="https://avatars2.githubusercontent.com/u/5716683?v=3&s=40"/>
        </div>
      </div>
    );
  }
}
