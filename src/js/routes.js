import { Device, DeviceModel, Frame, Home, Login, Settings, WorkOrder, NoFound } from './containers';

export default [{
  path: '/login',
  component: Login
}, {
  path: '/',
  component: Frame,
  indexRoute: { component: Home },
  childRoutes: [
    { path: '/home', component: Home },
    { path: '/device', component: Device },
    { path: '/workorder', component: WorkOrder },
    { path: '/settings', component: Settings },
    { path: '/settings/device/model/:model', component: DeviceModel }
  ]
},{
  path: '*',
  component: NoFound
}];
