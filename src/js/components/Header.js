import React, { Component } from 'react';
import { Anchor, Header } from 'grommet';

export default class HeaderArea extends Component {
  render() {
    const {modules, active, setActive} = this.props;
    return (
        <Header separator="bottom">
          {
            modules && modules.map((module, index) => {
              return <Anchor key={index} label={module.title} primary={index==active} onClick={() => setActive(index)}/>;
            })
          }
        </Header>
    );
  }
}
