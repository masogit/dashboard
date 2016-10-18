const initialState = {
  logo: 'demo.png',
  title: 'Demo',
  modules: [{title: 'Home', router: '/home'}, {title: 'Module', router: '/module'}],
  activeIndex: 0,
  user: {
    name: 'Admin',
    email: 'admin@abc.com'
  },
  menus: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'module_active':
      return { ...state, ...{activeIndex: action.index} };
    default:
      return state;
  }
}

