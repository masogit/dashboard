import Frame from './containers/Frame';
import Home from './containers/Home';
import NoFound from './containers/NoFound';

export default {
  path: '/',
  component: Frame,
  indexRoute: { component: Home },
  childRoutes: [
      { path: 'home', component: Home },
      { path: '*', component: NoFound}
  ]
};
