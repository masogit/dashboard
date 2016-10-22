import React, { Component } from 'react';
import { Anchor, Sidebar, Header, Title, Accordion, AccordionPanel, List, ListItem } from 'grommet';
import { Link } from 'react-router';

export default class SideBar extends Component {
  render() {
    const { menus } = this.props;
    const groups = Object.keys(menus);
    if (groups.length == 0) {
      return null;
    }
    return (
      <Sidebar full={false} pad="small" separator="right">
        <Header justify="between">
          <Title>
            SideBar
          </Title>
        </Header>
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
      </Sidebar>
    );
  }
}
