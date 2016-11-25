import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deckActions } from '../actions';
import { Box, Header, Headline, Columns, Card, Anchor, Icons } from 'grommet';

const { Add, Edit } = Icons.Base;

class Decks extends Component {

  componentWillMount() {
    this.props.actions.getDecks();
  }

  render() {
    return (
      <Box pad="small">
        <Header justify="between">
          <Headline size="small">All Decks</Headline>
          <Anchor icon={<Add />} label="Add" />
        </Header>
        <Box pad="large">
          <Columns justify="start" pad="large">
            <Card label="Label" heading="Deck_1" description="Distribution of China Map" colorIndex="light-1" textSize="small"
              link={<Anchor href="#" icon={<Edit />} label="Edit" />} />
          </Columns>
        </Box>
      </Box>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    decks: state.deck.all
  };
};

let mapDispatchProps = (dispatch) => ({
  actions: bindActionCreators(deckActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchProps)(Decks);
