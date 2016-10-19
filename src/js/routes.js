import { Device, Frame, Home, Login, Module, NoFound } from './containers';

export default [{
  path: '/login',
  component: Login
}, {
  path: '/',
  component: Frame,
  indexRoute: { component: Home },
  childRoutes: [
    { path: 'home', component: Home },
    { path: 'module', component: Module },
    { path: 'device', component: Device }
  ]
},{
  path: '*',
  component: NoFound
}];
