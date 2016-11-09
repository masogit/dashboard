import { TYPE } from '../constants';

const initialState = {
  logo: 'demo.png',
  title: 'CLOUD DEVICE',
  modules: [
    {title: 'HOME', router: '/home'},
    {title: 'DECK', router: '/deck'}
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
