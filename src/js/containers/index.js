import NoFound from './NoFound';
import PageDesigner from './PageDesigner';
import Chess from '../chess';
import React, {Component} from 'react';

export {
  PageDesigner,
  NoFound,
  Chess
};

export default class Page extends Component {
  render() {
    return (
      <div>
        <a href="/chess">Chess</a>
        <div>
          <a href="/page">Page</a>
        </div>
      </div>
    );
  }
}
