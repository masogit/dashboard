import React, { Component } from 'react';
import { Anchor, Sidebar, Header, Title, Accordion, AccordionPanel, List, ListItem } from 'grommet';
import { Link } from 'react-router';

export default class SideBar extends Component {

  renderAccordion(menus) {
    const groups = Object.keys(menus);
    if (groups.length == 0) {
      return null;
    }
    return (
      <Accordion animate={false}>
        {
          groups.map((group, index) => {
            return (
              <AccordionPanel key={index} heading={group}>
                <List>
                  {
                    menus[group] && menus[group].map((menu, index) => {
                      return (
                        <ListItem key={index}>
                          <Anchor tag={Link} label={menu.title} to={menu.router} />
                        </ListItem>
                      );
                    })
                  }
                </List>
              </AccordionPanel>
            );
          })
        }
      </Accordion>
    );
  }

  renderMenu(menus) {
    return (
      <List>
        {
          menus.map((menu, index) => {
            return (
              <ListItem key={index}>
                <Anchor tag={Link} label={menu.title} to={menu.router} />
              </ListItem>
            );
          })
        }
      </List>
    );
  }
  render() {
    const { menus } = this.props;
    let isArray = menus instanceof Array;
    if (menus)
      return (
        <Sidebar full={false} pad="small" separator="right">
          <Header justify="between">
            <Title>
              SideBar
            </Title>
          </Header>
          {!isArray && this.renderAccordion(menus)}
          {isArray && this.renderMenu(menus)}
        </Sidebar>
      );
    else
      return null;
  }
}
