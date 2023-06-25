import homeController from './controller/home';

export default [
  {
    path: '/',
    method: 'get',
    action: homeController.hello
  }
];
