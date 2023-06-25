import HomeService from '../service/home';

class HomeController {
  private service: HomeService = new HomeService();

  hello = async (ctx: any) => {
    ctx.body = await this.service.hello();
  };
}

export default new HomeController();