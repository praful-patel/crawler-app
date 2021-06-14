import { NextFunction, Request, Response } from 'express';
import { Crawl } from '../interfaces/crawl.interface';
import CrawlService from '../services/crawl.service';

class CrawlController {
  public crawlService = new CrawlService();

  public getData = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllData: Crawl[] = await this.crawlService.findAllData();
      res.status(200).json({ data: findAllData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public createData = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const createData: Crawl = await this.crawlService.createData();
      res.status(201).json({ data: createData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };
}

export default CrawlController;
