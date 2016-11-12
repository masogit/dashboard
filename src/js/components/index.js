import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';
import Table from './Table';
import TopCenter from './TopCenter';
import TopLeft from './TopLeft';
import TopRight from './TopRight';
import MiddleCenter from './MiddleCenter';
import MiddleLeft from './MiddleLeft';
import MiddleRight from './MiddleRight';
import BottomCenter from './BottomCenter';
import BottomLeft from './BottomLeft';
import BottomRight from './BottomRight';
import BoxPropsMenu from './BoxPropsMenu';
import Map from './Map_chart';
import Grid from './Grid_chart';

const Widgets = {
  TopCenter,
  TopLeft,
  TopRight,
  MiddleCenter,
  MiddleLeft,
  MiddleRight,
  BottomCenter,
  BottomLeft,
  BottomRight,
  Grid,
  Map
};

const WidgetNames = Object.keys(Widgets);

export {
  BoxPropsMenu,
  Footer,
  Header,
  Sidebar,
  Table,
  Widgets,
  WidgetNames
};
