import { Router } from 'express';
import CrawlController from '../controllers/crawl.controller';
import Route from '../interfaces/routes.interface';

class CrawlRoute implements Route {
  public path = '/crawl';
  public router = Router();
  public crawlController = new CrawlController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.crawlController.getData);
    this.router.post(`${this.path}`, this.crawlController.createData);
  }
}

export default CrawlRoute;
