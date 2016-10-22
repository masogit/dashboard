/**
 * Created by huling on 10/22/2016.
 */
import React, { Component } from 'react';
import { Box, Header, Heading, Tiles, Tile, Icons} from 'grommet';
const {SocialTwitter, SocialFacebookOption, SocialLinkedinOption, SocialSkype} = Icons.Base;

export default class BottomRight extends Component {
  componentWillMount() {
    this.state = {
      cards: [
        {
          message: 'Try now, health check is 100%',
          name: '@System',
          time: '12m'
        },
        {
          message: 'The device keeps disconnecting from the system, please HELP!',
          name: '@JoanBecker',
          time: '1h'
        }
      ]
    };
  }

  render() {
    const {title} = this.props;
    const {cards} = this.state;
    return (
      <Box pad='small'>
        <Header justify='between'>
          <Heading tag='h3' strong={true}>{title}</Heading>
          <Box direction='row'>
            <SocialTwitter/>
            <SocialFacebookOption/>
            <SocialLinkedinOption/>
            <SocialSkype/>
          </Box>
        </Header>
        <Tiles>{
          cards.map((card, index) => (
            <Tile key={index} wide={true} align='stretch' separator={index == cards.length -1 ? 'none' : 'bottom'} pad={{vertical: 'medium'}}>
              <label>{`${card.name} * ${card.time}`}</label>
              <label>{card.message}</label>
            </Tile>
          ))
        }
        </Tiles>
      </Box>
    );
  }
}
