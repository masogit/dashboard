/**
 * Created by huangling on 19/01/2017.
 */
import React, {Component} from 'react';
import Text from '../components/singleItem/Text';
import Image from '../components/singleItem/Image';
import BoardSquare from '../components/BoardSquare';
import {Button, Modal} from 'antd';
import * as ReactDOM from 'react-dom';

const Widgets = {
  Image,
  Text
};

let previewHtml = '';

export default class Page extends Component {
  componentWillMount() {
    this.state = {
      boxes: [{top: 20, left: 80, title: 'Drag me around'},
        {top: 180, left: 20, title: 'Drag me too'}
      ],
      newBox: null
    };
    this.onAddItem = this.onAddItem.bind(this);
    this.onPreview = this.onPreview.bind(this);
  }

  onAddItem(type) {
    const Comp = Widgets[type];
    this.setState({newBox: {top: 20, left: 80, title: <Comp />}});
  }

  onSave() {
    const board = ReactDOM.findDOMNode(this.board);
    previewHtml = board.innerHTML;
  }

  onPreview() {
    if (!previewHtml) {
      this.onSave();
    }

    this.setState({preview: true});
  }

  renderPreview() {
    return (
      <div className="layer">
        <Modal
          visible
          title="Preview"
          onOk={() => this.setState({preview: false})}
          footer={[
            <Button key="back" type="ghost" size="large" onClick={() => this.setState({preview: false})}>Return</Button>
          ]}>
          <div dangerouslySetInnerHTML={{__html: previewHtml}}>

          </div>
        </Modal>
      </div>
    );
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
            <BoardSquare ref={node => this.board = node} boxes={this.state.boxes} newBox={this.state.newBox}/>
          </section>
          <aside className="sidebar-right">
            <Button onClick={() => this.onSave()}>Save</Button>
            <Button onClick={() => this.onPreview()}>Preview</Button>
          </aside>

          {this.state.preview && this.renderPreview()}
        </div>
      </div>
    );
  }
}




