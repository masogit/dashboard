import { types } from './index';

const initialState = {
  logo: 'demo.png',
  title: 'Demo',
  modules: [
    {title: 'HOME', router: '/home'},
    {title: 'DEVICES', router: '/device'},
    {title: 'ADMINISTRATION', router: '/module'}
  ],
  activeIndex: 0,
  user: {
    name: 'Admin',
    email: 'admin@abc.com'
  },
  menus: {
    Users: [{title: 'General', router: '/home'}],
    'Device Groups': [{title: 'Device', router: '/device'}, {title: 'User', router: '/user'}],
    Settings: [{title: 'Equipment', router: '/module'}],
    Reservations: [{title: 'Compliance', router: '/module'}],
    Licenses: [{title: 'Compliance', router: '/module'}]
  }
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.ACTIVE:
      return { ...state, ...{activeIndex: action.index} };
    case types.LOGIN:
      return { ...state, ...{user: {name: action.login}}};
    default:
      return state;
  }
}
