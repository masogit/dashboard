import { types } from './index';

const initialState = {
  logo: 'demo.png',
  title: 'CLOUD DEVICE',
  modules: [
    {title: 'HOME', router: '/dashboard/home'},
    {title: 'DEVICE', router: '/dashboard/device',
      menus: [
        {title: 'Overview', router: '/dashboard/device'},
        {title: 'Status', router: '/dashboard/device/status'},
        {title: 'History', router: '/dashboard/device/history'},
        {title: 'Alarm', router: '/dashboard/device/alarm'}
      ]
    },
    {title: 'WORKORDER', router: '/dashboard/workorder'},
    {title: 'SETTINGS', router: '/dashboard/settings',
      menus: {
        Device: [{title: 'Model A', router: '/dashboard/settings/device/A'}, {title: 'Model B', router: '/dashboard/settings/device/B'}],
        Customer: [{title: 'Customer A', router: '/dashboard/settings/customer/A'}, {title: 'Customer B', router: '/dashboard/settings/customer/B'}],
        Status: [{title: 'Normal', router: '/dashboard/settings/status/normal'}, {title: 'Alarm', router: '/dashboard/settings/status/alarm'}]
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
