import homeController from '../controllers/home';

export default [
  {
    path: '/',
    method: 'get',
    action: homeController.hello
  }
];
