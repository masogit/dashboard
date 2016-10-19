import React, { Component } from 'react';
import { Anchor, Box, Accordion, AccordionPanel, List, ListItem } from 'grommet';
import { Link } from 'react-router';

export default class Sidebar extends Component {
  render() {
    const { menus } = this.props;
    const groups = Object.keys(menus);
    return (
      <Box separator="right" style={{ width: '250px' }} pad="small">
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
      </Box>
    );
  }
}
