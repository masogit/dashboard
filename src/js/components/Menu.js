import React from 'react';
import { List, ListItem } from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ContentSend from 'material-ui/svg-icons/content/send';
import Subheader from 'material-ui/Subheader';
const svgIcons = require('material-ui/svg-icons');

export default class Menu extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false
    };
    this.handleNestedListToggle = this.handleNestedListToggle.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle(event) {
    this.setState({
      open: !this.state.open
    });
  };

  handleNestedListToggle(item) {
    this.setState({
      open: item.state.open
    });
  };

  renderListItem(items) {
    return items.map((item) => {
      const props = {
        primaryText: item.key
      };

      if (item.icon) {
        const Icon = svgIcons[item.icon];
        props.leftIcon = <Icon />;
      };
      

      return <ListItem {...props} />;
    });
  }

  render() {
    const { menu } = this.props;

    return (
        <List>
          <Subheader>
            Welcome
          </Subheader>
          { this.renderListItem(menu) }
        </List>
    );
  }
}
