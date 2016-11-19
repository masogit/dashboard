import { TYPE } from '../constants';

const initialState = {
  logo: 'shortcut-icon.png',
  title: 'Dashboard',
  showSidebar: true,
  modules: [
    {
      title: 'LIBRARY', router: '/home', icon: 'envelope', number: '4',
      menus: [
        {root: 'MAIN NAVIGATION'},
        { title: 'Overview', router: '/device', icon: 'dashboard', active: true,  menus: [
          { title: 'dashboard1', router: '/dashboard1', icon: 'circle' },
          {
            title: 'dashboard2', router: '/dashboard2', icon: 'circle', active: true,
            menus: [
              { title: 'd2', router: '/dashboard1', active: true },
              { title: 'd3', router: '/dashboard2' }
            ]
          }
        ] },
        { title: 'Status', router: '/device/status', icon: 'heartbeat', status: [{text: 4, color: 'blue'}] },
        { title: 'History', router: '/device/history', icon: 'history', status: [{text: 'new', color: 'green'}] },
        {
          title: 'Alarm', router: '/device/alarm', icon: 'warning', menus: [
            { title: 'a1', router: '/dashboard1' },
            { title: 'a2', router: '/dashboard2' }
          ]
        },
        { title: 'Mailbox', router: '/device/alarm', icon: 'envelope', status: [{ text: '5', color: 'red' }, { text: '3', color: 'green' }, { text: 4, color: 'yellow' }] },
        { root: 'LABELS' },
        { title: 'important', router: '/device/status', icon: 'circle-o text-red' },
        { title: 'Warning', router: '/device/status', icon: 'circle-o text-yellow' },
        { title: 'Information', router: '/device/status', icon: 'circle-o text-blue' }
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
  },
  [TYPE.TOGGLE_SIDEBAR]: state => {
    return { showSidebar: !state.showSidebar };
  }
};

export default function (state = initialState, action) {
  let handler = handlers[action.type];
  if (!handler) return state;
  return {...state, ...handler(state, action)};
};
