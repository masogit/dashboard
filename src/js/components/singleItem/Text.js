/**
 * Created by huangling on 21/01/2017.
 */
import React, {Component} from 'react';

export default class Text extends Component {
  render() {
    return (
      <div className="style">
        <div className="contents">
          <input style={{
            cursor: 'move'
          }} defaultValue='Please type anything'/>
        </div>
      </div>
    );
  }
}
