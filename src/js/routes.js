import {
  Deck, Decks, Customer, Device, DeviceModel, DeviceAlarm, DeviceHistory, DeviceStatus,
  Frame, Home, Login, Settings, WorkOrder, NoFound, Status, Preview, Widgets
} from './containers';

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
      { path: 'decks', component: Decks },
      { path: 'home', component: Home },
      { path: 'widgets', component: Widgets },
      { path: 'widgets/:name', component: Widgets },
      { path: 'device', component: Device },
      { path: 'device/types', component: DeviceModel },
      { path: 'device/types/:model', component: DeviceModel },
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
