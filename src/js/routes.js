import Login from './containers/Login';
import Frame from './containers/Frame';
import Home from './containers/Home';
import Module from './containers/Module';
import NoFound from './containers/NoFound';

export default [{
  path: '/login',
  component: Login
}, {
  path: '/',
  component: Frame,
  indexRoute: { component: Home },
  childRoutes: [
    { path: 'home', component: Home },
    { path: 'module', component: Module }
  ]
},{
  path: '*',
  component: NoFound
}];
