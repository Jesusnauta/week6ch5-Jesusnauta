import { Response, Request } from 'express';
import { BeersFileRepo } from '../repository/beers.file.repo.js';

export class BeersController {
<<<<<<< HEAD
  constructor(public repo: BeersFileRepo) {
    this.repo = repo;
  }
=======
  // eslint-disable-next-line no-useless-constructor, no-unused-vars
  constructor(public repo: BeersFileRepo) {}
>>>>>>> a985150 (✅ Add components files)

  getAll(_req: Request, resp: Response) {
    this.repo.read().then((data) => {
      resp.json(data);
    });
  }

  get(req: Request, resp: Response) {
<<<<<<< HEAD
    this.repo.read().then((data) => {
      const { id } = req.params;
      const infoId = data.find((item) => item.id === Number(id));
      resp.json(infoId);
    });
  }

  post(req: Request, resp: Response) {
    this.repo.write(req.body).then((_data) => {
      resp.send('Add');
    });
  }

  async patch(req: Request, resp: Response) {
    const id = Number(req.params.id);
    const prevThing: any = await this.repo.readById(id);
    const newThing = req.body;
    const updateThing = Object.assign(prevThing, newThing);
    await this.repo.update(updateThing);
    resp.send('Update');
  }

  delete(req: Request, resp: Response) {
    const { id } = req.params;
    this.repo.delete(Number(id)).then((_data) => {
      resp.send('Delete');
    });
  }
=======
    resp.send('This is a beer ' + req.params.id);
  }

  post(_req: Request, _resp: Response) {}

  patch(_req: Request, _resp: Response) {}

  delete(_req: Request, _resp: Response) {}
>>>>>>> a985150 (✅ Add components files)
}
