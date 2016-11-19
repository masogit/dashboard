import React, { Component } from 'react';
import { Anchor, Sidebar, Label, Accordion, AccordionPanel, List, ListItem, Box } from 'grommet';
import { Link } from 'react-router';
import UserPanel from './UserPanel';

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
    // <Header justify="between" >
    //         <Title> <img src={`img/${logo}`} width='30px' /> {title} </Title>
    // </Header>
    
    const { menus , logo, title, user } = this.props;
    let isArray = menus instanceof Array;
    if (menus)
      return (
        <Sidebar size='small' className='main-sidebar main-header'>          
          <Box tag='a' className='logo'>
            <span className='logo-mini'>
              <img src={`img/${logo}`} width='30px' />
            </span>
            <Label truncate={true} margin='small' className='logo-lg'>{title}</Label>
          </Box>
          <UserPanel name={user.name}/>
          {!isArray && this.renderAccordion(menus)}
          {isArray && this.renderMenu(menus)}
        </Sidebar>
      );
    else
      return null;
  }
}
