/**
 * Created by huangling on 19/01/2017.
 */
import React, {Component} from 'react';
import Text from '../components/singleItem/Text';
import Image from '../components/singleItem/Image';
import BoardSquare from '../components/BoardSquare';
import {Button} from 'antd';

const Widgets = {
  Image,
  Text
};

export default class Page extends Component {
  componentWillMount() {
    this.state = {
      boxes: [{top: 20, left: 80, title: 'Drag me around'},
        {top: 180, left: 20, title: 'Drag me too'}
      ],
      newBox: null
    };
    this.onAddItem = this.onAddItem.bind(this);
  }

  onAddItem(type) {
    const Comp = Widgets[type];
    this.setState({newBox: {top: 20, left: 80, title: <Comp />}});
  }

  render() {
    const headerItem = [
      {title: 'Text'}, {title: 'Image'}
    ];

    return (
      <div>
        <header className="header">
          {
            headerItem.map((item, index) => (
              <Button className="item"
                      onClick={() => this.onAddItem(item.title)}>
                {item.title}
              </Button>)
            )
          }
        </header>
        <div className="main-container">
          <section className="content">
            <BoardSquare boxes={this.state.boxes} newBox={this.state.newBox}/>
          </section>
          <aside className="sidebar-right">
            <Button onClick={() => this.onSave()}>Save</Button>
          </aside>
        </div>
      </div>
    );
  }
}




