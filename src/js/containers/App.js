import React, { Component } from "react";
import AppBar from 'material-ui/AppBar';
import { Box, Sidebar } from 'grommet';
import { NestedList } from '../components';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from '../constants/themes';

export default class App extends Component {
  render() {
    // const { todos, actions } = this.props;
    return (
        <MuiThemeProvider muiTheme={theme('blackTheme')}>
            <Box flex>
                <AppBar title="GE Healthcare APM" />
                <Box>
                    <Sidebar separator="right" size="small">
                        <NestedList />
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

// function mapStateToProps(state) {
//   return {
//     todos: state.todos
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators(TodoActions, dispatch)
//   };
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(App);
