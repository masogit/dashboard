import { TYPE } from '../constants';

const initialState = {
  logo: 'shortcut-icon.png',
  title: 'DASHBOARD PLATFORM',
  showSidebar: true,
  menus: [

    { root: 'DATA VISUALIZATION' },
    { title: 'HOME', icon: 'dashboard', active: true, router: "/home" },
    { title: 'DASHBOARD', icon: 'dashboard', router: "/decks" },
    { title: 'Widgets', router: '/widgets', icon: 'heartbeat', status: [{ text: 4, color: 'blue' }] },
    { title: 'Designer', router: '/deck', icon: 'history', status: [{ text: 'new', color: 'green' }] },
    { title: 'Fullscreen', router: '/preview', icon: 'warning' },
    { title: 'Library', router: '/device/alarm', icon: 'envelope', status: [{ text: '5', color: 'red' }, { text: '3', color: 'green' }, { text: 4, color: 'yellow' }] },

    { root: 'DEVICE' },
    { title: 'Overview', router: '/device', icon: 'circle-o text-green' },
    { title: 'Status', router: '/device/status', icon: 'circle-o text-red' },
    { title: 'History', router: '/device/history', icon: 'circle-o text-yellow' },
    { title: 'Alarm', router: '/device/alarm', icon: 'circle-o text-blue' },

    { root: 'INCIDENT' },
    { title: 'Overview', router: '/device', icon: 'circle-o text-green' },
    { title: 'Status', router: '/device/status', icon: 'circle-o text-red' },
    { title: 'History', router: '/device/history', icon: 'circle-o text-yellow' },
    { title: 'Alarm', router: '/device/alarm', icon: 'circle-o text-blue' }

  ],
  modules: [
    { title: 'LIBRARY', router: '/home', icon: 'envelope', number: '4' },
    { title: 'COMPOSE', router: '/deck', icon: 'bell', number: '10', status: 'warning' },
    { title: 'PERFORM', router: '/preview', icon: 'flag', number: '9', status: 'danger' }
  ],
  user: {
    name: 'Admin',
    email: 'admin@abc.com'
  }
};

const handlers = {
  [TYPE.LOGIN]: (state, action) => ({ user: { name: action.login } }),
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

    return { 'modules': modules };
  },
  [TYPE.TOGGLE_SIDEBAR]: state => {
    return { showSidebar: !state.showSidebar };
  }
};

export default function (state = initialState, action) {
  let handler = handlers[action.type];
  if (!handler) return state;
  return {...state, ...handler(state, action) };
};
