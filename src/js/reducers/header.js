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
        Device: [],
        Customer: [{title: 'Customer A', router: '/settings/customer/A'}, {title: 'Customer B', router: '/settings/customer/B'}],
        Status: [{title: 'Normal', router: '/settings/status/normal'}, {title: 'Alarm', router: '/settings/status/alarm'}]
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
    case types.INIT_DEVICE_TYPE: {
      let deviceTypes = action.deviceTypes;
      // let deviceTypes = action.deviceTypes;
      let modules = state.modules;
      let menuDevice = modules.filter((module) => {
        return module.title === 'SETTINGS';
      })[0].menus.Device;

      deviceTypes.forEach((type) => {
        menuDevice.push({
          title: type, router: '/settings/device/' + type
        });
      });

      return { ...state, ...{'modules': modules}};
    }
    default:
      return state;
  }
}
