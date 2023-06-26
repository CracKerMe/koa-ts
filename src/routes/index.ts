import homeController from '../controllers/home';
import fileController from '../controllers/file';

export default [
  {
    path: '/',
    method: 'get',
    action: homeController.hello
  },
  {
    path: '/upload/single',
    method: 'post',
    action: fileController.single,
    middlewares: [fileController.singleMiddlewares]
  },
  {
    path: '/upload/multiple',
    method: 'post',
    action: fileController.multiple,
    middlewares: [fileController.multipleMiddlewares]
  }
];
