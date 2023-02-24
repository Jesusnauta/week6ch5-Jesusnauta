import { Response, Request } from 'express';
import { BeersFileRepo } from '../repository/beers.file.repo.js';

export class BeersController {
  // eslint-disable-next-line no-useless-constructor, no-unused-vars
  constructor(public repo: BeersFileRepo) {}

  getAll(_req: Request, resp: Response) {
    this.repo.read().then((data) => {
      resp.json(data);
    });
  }

  get(req: Request, resp: Response) {
    resp.send('This is a beer ' + req.params.id);
  }

  post(_req: Request, _resp: Response) {}

  patch(_req: Request, _resp: Response) {}

  delete(_req: Request, _resp: Response) {}
}
