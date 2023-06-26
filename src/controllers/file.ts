import multer from '@koa/multer'
import path from 'path'

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve(__dirname, '../../uploads'))
  },
  filename: function (req, file, cb) {
    // aaa.jpg => aaa-123456789.jpg
    const fileExtension = (file.originalname as any).split('.').pop().toLowerCase()
    const fileName = (file.originalname as any).split('.' + fileExtension)[0]
    cb(null, fileName + '-' + new Date().getTime() + '.' + fileExtension)
  }
})

const upload = multer({ storage: storage })

class FileController {
  index = async (ctx: any) => {
    ctx.body = 'Upload File ready!';
  };
  multiple = (ctx: any) => {
    ctx.body = {
      code: 0,
      data: {},
      message: 'Upload multiple files success!'
    };
  };
  single = (ctx: any) => {
    console.log('ctx.file', ctx.file);
    ctx.body = {
      code: 0,
      data: {
        link: ctx.file.path
      },
      message: 'Upload single file success!'
    }
  };
  singleMiddlewares = upload.single('file');
  multipleMiddlewares = upload.array('files');
}

export default new FileController();