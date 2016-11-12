import { Deck, Customer, Device, DeviceModel, DeviceAlarm, DeviceHistory, DeviceStatus,
         Frame, Home, Login, Settings, WorkOrder, NoFound, Status, Preview } from './containers';

export default [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/preview',
    component: Preview
  },
  {
    path: '/',
    component: Frame,
    indexRoute: { component: Home },
    childRoutes: [
      { path: 'deck', component: Deck },
      { path: 'home', component: Home },
      { path: 'device', component: Device },
      { path: 'device/alarm', component: DeviceAlarm },
      { path: 'device/history', component: DeviceHistory },
      { path: 'device/status', component: DeviceStatus },
      { path: 'workorder', component: WorkOrder },
      { path: 'settings', component: Settings },
      { path: 'settings/customer/:name', component: Customer },
      { path: 'settings/device/:model', component: DeviceModel },
      { path: 'settings/status/:param', component: Status }
    ]
  },
  {
    path: '*',
    component: NoFound
  }
];
