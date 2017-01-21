import Home, {PageDesigner, Chess, NoFound} from './containers';

export default [{
  path: '/',
  component: Home
}, {
  path: '/chess',
  component: Chess
}, {
  path: '/page',
  component: PageDesigner
}, {
  path: '*',
  component: NoFound
}
];
