import { types } from './index';

const initialState = {
  logo: 'demo.png',
  title: 'Demo',
  modules: [
    {title: 'Home', router: '/home'},
    {title: 'Module1', router: '/module'},
    {title: 'Module2', router: '/module'},
    {title: 'Help', router: '/module'}
  ],
  activeIndex: 0,
  user: {
    name: 'Admin',
    email: 'admin@abc.com'
  },
  menus: [
    {title: 'General', router: '/home'},
    {title: 'Assets', router: '/module'},
    {title: 'Equipment', router: '/module'},
    {title: 'Compliance', router: '/module'}
  ]
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
