/**
 * Created by huangling on 19/01/2017.
 */
import React, {Component} from 'react';
import Text from '../components/singleItem/Text';
import Image from '../components/singleItem/Image';
import BoardSquare from '../components/BoardSquare';

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
    return (
      <div>
        <header>
          <div onClick={() => this.onAddItem('Text')}>
            Text
          </div>
          <div onClick={() => this.onAddItem('Image')}>
            Image
          </div>
        </header>
        <section>
          <BoardSquare boxes={this.state.boxes} newBox={this.state.newBox}/>
        </section>
      </div>
    );
  }
}




