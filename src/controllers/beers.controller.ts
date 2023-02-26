/* eslint-disable prefer-destructuring */
import { Response, Request } from 'express';
import { Beers, BeersFileRepo } from '../repository/beers.file.repo.js';

export class BeersController {
  // eslint-disable-next-line no-useless-constructor, no-unused-vars
  constructor(public repo: BeersFileRepo) {}

  getAll(req: Request, resp: Response) {
    this.repo.read().then((data) => {
      resp.json(data);
    });
  }

  get(req: Request, resp: Response) {
    this.repo.read().then((data) => {
      console.log(data);
      const id = req.params.id;
      const cerveza = data.find((item) => item.id === Number(id));
      resp.json(cerveza);
    });
  }

  post(req: Request, resp: Response) {
    console.log(req.body);
    this.repo.write(req.body).then((data) => console.log(data));
    resp.send('<p> Post! </p>');
  }

  async patch(req: Request, resp: Response) {
    const {
      params: { id },
    } = req;
    if (!id) {
      return;
    }

    const updateInfo = req.body as Partial<Beers>;
    const dataToUpdate = await this.repo.readId(Number(req.params.id));
    const updatedBeers = Object.assign(dataToUpdate, updateInfo);
    console.log(updatedBeers);
    await this.repo.update(updatedBeers);
    resp.send(`<p>Only updated a ' + ${id}</p>`);
  }

  async delete(req: Request, resp: Response) {
    await this.repo.delete(Number(req.params.id));
    resp.send(`<p>Deleted item ${req.params.id}`);
  }
}
