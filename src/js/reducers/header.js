import { types } from './index';

const initialState = {
  logo: 'demo.png',
  title: 'CLOUD DEVICE',
  modules: [
    {title: 'HOME', router: '/home'},
    {title: 'DEVICE', router: '/device',
      menus: [
        {title: 'Overview', router: '/device'},
        {title: 'Status', router: '/device/status'},
        {title: 'History', router: '/device/history'},
        {title: 'Alarm', router: '/device/alarm'}
      ]
    },
    {title: 'WORKORDER', router: '/workorder'},
    {title: 'SETTINGS', router: '/settings',
      menus: {
        Device: [{title: 'DeviceA', router: '/settings/device/model/A'}, {title: 'DeviceB', router: 'settings/device/model/B'}],
        Customer: [{title: 'CustomerA', router: 'settings/customer/A'}, {title: 'CustomerB', router: 'settings/customer/B'}],
        Status: [{title: 'Normal', router: 'settings/status/normal'}, {title: 'Alarm', router: 'settings/status/alarm'}]
      }
    }
  ],
  user: {
    name: 'Admin',
    email: 'admin@abc.com'
  }
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.LOGIN:
      return { ...state, ...{user: {name: action.login}}};
    default:
      return state;
  }
}
