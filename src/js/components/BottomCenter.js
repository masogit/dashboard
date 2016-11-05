/**
 * Created by huling on 10/22/2016.
 */
import React, { Component } from 'react';
import { Box, Heading, Header, Tiles, Tile, Timestamp} from 'grommet';

export default class BottomCenter extends Component {
  componentWillMount() {
    this.state = {
      cards: [
        {
          title: 'NOTIFICATION',
          message: 'Alert for application sent',
          type: 'Non Critical Problem',
          time: new Date('2016/12/10 12:48:32')
        },
        {
          title: 'PRODUCTION',
          message: 'Error rate >= 25%',
          type: 'Critical Problem',
          time: new Date('2016/12/10 10:40:32')
        }
      ]
    };
  }

  render() {
    const {title} = this.props;
    const {cards} = this.state;
    return (
      <Box pad='small'>
        <Header>
          <Heading tag='h3' strong={true}>{title}</Heading>
        </Header>
        <Tiles fill={true}>{
          cards.map((card, index) => (
            <Tile key={index} wide={true} align='stretch' separator={index == cards.length -1 ? 'none' : 'bottom'} pad={{vertical: 'small'}}>
              <Heading tag='h4' strong={true}>{card.title}</Heading>
              <label>{card.message}</label>
              <Box justify='between' direction='row'>
                <label>{card.type}</label>
                <Timestamp value={card.time} fields="time"/>
              </Box>
            </Tile>
          ))
        }
        </Tiles>
      </Box>
    );
  }
}
