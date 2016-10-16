import Frame from './pages/Frame';
import Home from './pages/Home';
import NoFound from './pages/NoFound';

export default {
  path: '/',
  component: Frame,
  indexRoute: { component: Home },
  childRoutes: [
      { path: 'home', component: Home },
      { path: '*', component: NoFound}
  ]
};
