import {PageDesigner, Chess, NoFound} from './containers';

export default [{
  path: '/',
  component: PageDesigner
}, {
  path: '/chess',
  component: Chess
}, {
  path: '*',
  component: NoFound
}
];
