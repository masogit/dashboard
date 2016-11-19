import { TYPE } from '../constants';

const initialState = {
  logo: 'shortcut-icon.png',
  title: 'Dashboard',
  modules: [
    {
      title: 'LIBRARY', router: '/home', icon: 'envelope', number:'4',
      menus: [
        { title: 'Overview', router: '/device', icon: 'dashboard',  menus: [
          { title: 'dashboard1', router: '/dashboard1', icon: 'circle' },
          { title: 'dashboard2', router: '/dashboard2', icon: 'circle' }
        ] },
        { title: 'Status', router: '/device/status', icon: 'heartbeat' },
        { title: 'History', router: '/device/history', icon: 'history' },
        { title: 'Alarm', router: '/device/alarm', icon: 'warning' }
      ]
    },
    {title: 'COMPOSE', router: '/deck', icon: 'bell', number:'10', status:'warning'},
    {title: 'PERFORM', router: '/preview', icon: 'flag', number:'9', status: 'danger'}
  ],
  user: {
    name: 'Admin',
    email: 'admin@abc.com'
  }
};

const handlers = {
  [TYPE.LOGIN]: (state, action) => ({user: {name: action.login}}),
  [TYPE.INIT_DEVICE_TYPE]: (state, action) => {
    let deviceTypes = action.deviceTypesMenus;
    let modules = state.modules;
    let menuDevice = modules.filter((module) => {
      return module.title === 'SETTINGS';
    })[0].menus.Device;

    deviceTypes.forEach((type) => {
      menuDevice.push({
        title: type, router: '/settings/device/' + type
      });
    });

    return {'modules': modules};
  }
};

export default function (state = initialState, action) {
  let handler = handlers[action.type];
  if (!handler) return state;
  return {...state, ...handler(state, action)};
};
