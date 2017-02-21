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

  handleToggle() {
    this.setState({
      open: !this.state.open
    });
  };

  handleNestedListToggle(item) {
    this.setState({
      open: item.state.open
    });
  };

  render() {

    console.log(svgIcons);
    let Icon = svgIcons["ActionGrade"];
    return (
        <List>
          <Subheader>
            Welcome
          </Subheader>
          <ListItem primaryText="Sent mail" leftIcon={<Icon />} />
          <ListItem primaryText="Drafts" leftIcon={<ContentDrafts />} />
          <ListItem
              primaryText="Inbox"
              leftIcon={<ContentInbox />}
              initiallyOpen={false}
              primaryTogglesNestedList={true}
              onNestedListToggle={this.handleToggle}
              nestedItems={[
                <ListItem
                  key={1}
                  primaryText="Starred"
                  leftIcon={<ActionGrade />}/>,
                <ListItem
                  key={2}
                  primaryText="Sent Mail"
                  leftIcon={<ContentSend />}
                  disabled={true}
                  nestedItems={[
                    <ListItem key={1} primaryText="Drafts" leftIcon={<ContentDrafts />} />]}/>,
                <ListItem
                  key={3}
                  primaryText="Inbox"
                  leftIcon={<ContentInbox />}
                  open={this.state.open}
                  onNestedListToggle={this.handleNestedListToggle}
                  nestedItems={[
                    <ListItem key={1} primaryText="Drafts" leftIcon={<ContentDrafts />} />]}
              />
              ]}
          />
        </List>
    );
  }
}
