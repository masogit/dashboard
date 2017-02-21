import React, { Component } from "react";
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import { Box, Sidebar } from 'grommet';
import { Menu } from '../components';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from '../constants/themes';

class App extends Component {
  render() {
    const { menu } = this.props;
    return (
        <MuiThemeProvider muiTheme={theme('blackTheme')}>
            <Box flex>
                <AppBar title="GE Healthcare APM" />
                <Box>
                    <Sidebar separator="right" size="small">
                        <Menu menu={menu}/>
                    </Sidebar>
                    <Box>body</Box>
                </Box>
            </Box>
        </MuiThemeProvider>
    );
  }
}

// App.propTypes = {
//   todos: PropTypes.array.isRequired,
//   actions: PropTypes.object.isRequired
// };

function mapStateToProps(state) {
  return {
    menu: state.menu
  };
}

// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators(TodoActions, dispatch)
//   };
// }

export default connect(
  mapStateToProps
)(App);
