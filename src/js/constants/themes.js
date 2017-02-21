import { fade } from 'material-ui/utils/colorManipulator';
import * as Colors from 'material-ui/styles/colors';
import { spacing, getMuiTheme } from 'material-ui/styles';

const rawBaseTheme = {
  ...spacing,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: Colors.cyan500,
    primary2Color: Colors.cyan700,
    primary3Color: Colors.lightBlack,
    accent1Color: Colors.pinkA200,
    accent2Color: Colors.grey100,
    accent3Color: Colors.grey500,
    textColor: Colors.darkBlack,
    alternateTextColor: Colors.white,
    canvasColor: Colors.white,
    borderColor: Colors.grey300,
    disabledColor: fade(Colors.darkBlack, 0.3)
  }
};

const blackTheme = {
  ...spacing,
  fontFamily: 'Arial, sans-serif',
  palette: {
    primary1Color: Colors.cyan500,
    primary2Color: Colors.cyan700,
    primary3Color: Colors.lightBlack,
    accent1Color: Colors.pinkA200,
    accent2Color: Colors.grey100,
    accent3Color: Colors.grey500,
    textColor: Colors.red,
    alternateTextColor: Colors.red,
    canvasColor: Colors.white,
    borderColor: Colors.grey300,
    disabledColor: fade(Colors.darkBlack, 0.3)
  }
};

const themes = {
  rawBaseTheme,
  blackTheme
};

function theme(str = 'rawBaseTheme') {
  getMuiTheme(themes[str]);
}
//Theme must be wrapped in funciton getMuiTheme
export default theme;
