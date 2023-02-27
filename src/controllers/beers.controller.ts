import { Response, Request, NextFunction } from 'express';
import { Repo } from '../repository/repo.interface.js';
import { Beer } from '../entities/beers';

export class BeersController {
  // eslint-disable-next-line no-useless-constructor, no-unused-vars
  constructor(public repo: Repo<Beer>) {}

  async getAll(_req: Request, resp: Response, next: NextFunction) {
    try {
      const data = await this.repo.query();
      resp.json({
        results: data,
      });
    } catch (error) {
      next(error);
    }
  }

  async get(req: Request, resp: Response, next: NextFunction) {
    try {
      const data = await this.repo.queryId(req.params.id);
      resp.json({
        results: [data],
      });
    } catch (error) {
      next(error);
    }
  }

  async post(req: Request, resp: Response, next: NextFunction) {
    try {
      const data = await this.repo.create(req.body);
      resp.json({
        results: [data],
      });
    } catch (error) {
      next(error);
    }
  }

  async patch(req: Request, resp: Response, next: NextFunction) {
    try {
      req.body.id = req.params.id ? req.params.id : req.body.id;
      const data = await this.repo.update(req.body);
      resp.json({
        results: [data],
      });
    } catch (error) {
      next(error);
    }
  }

  async delete(req: Request, resp: Response, next: NextFunction) {
    try {
      this.repo.destroy(req.params.id);
      resp.json({
        results: [],
      });
    } catch (error) {
      next(error);
    }
  }
}
