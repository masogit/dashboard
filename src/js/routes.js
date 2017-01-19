import {Device, Frame, Home, Login, Module, NoFound} from './containers';
import PageDesigner from './page';

export default [{
  path: '/',
  component: Login
}, {
  path: '/',
  component: Frame,
  indexRoute: {component: Home},
  childRoutes: [
    {path: 'home', component: Home},
    {path: 'module', component: Module},
    {path: 'device', component: Device}
  ]
}, {
  path: 'page',
  component: PageDesigner
}, {
  path: '*',
  component: NoFound
}
];
