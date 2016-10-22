import React, { Component } from 'react';
import GoogleMap from 'google-map-react';
import { connect } from 'react-redux';
import { Anchor, Box, Header, Menu, Search } from 'grommet';
import { Table } from '../components';

class Device extends Component {
  render() {
    const { records, labels } = this.props;
    return (
      <Box pad="small">
        <Header pad={{horizontal: 'large'}} justify="between">
          <Menu inline={true} direction="row">
            <Anchor href="#" className="active" label="Location" />
            <Anchor href="#" label="Model" />
            <Anchor href="#" label="Customer" />
          </Menu>
          <Search />
        </Header>
        <GoogleMap
          center={{lat: 59.938043, lng: 30.337157}} zoom={9} minZoom={4}
          bootstrapURLKeys={{
            key: 'AIzaSyBeNcGEweF_9m1IlCkQjTN3JLqE7RsV5UY',
            language: 'en'
          }} />
        <Table data={records} fields={labels} />
      </Box>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    records: state.device.records,
    labels: state.device.labels
  };
};

export default connect(mapStateToProps)(Device);
