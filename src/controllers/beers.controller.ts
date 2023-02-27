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
    this.repo.read().then((data: any[]) => {
      console.log(data);
      const { id } = req.params;
      const specificData = data.find(
        (item: { id: number }) => item.id === Number(id)
      );

      resp.json(specificData);
    });
  }

  post(req: Request, resp: Response) {
    console.log(req.body);
    this.repo.write(req.body).then((data: any) => console.log(data));
    resp.send(`<p> Post </p>`);
  }

  async patch(req: Request, resp: Response) {
    const id = Number(req.params.id);
    if (!id) {
      return;
    }

    const prevBeer: any = await this.repo.readId(id);
    console.log(prevBeer);
    const newBeer = req.body;
    const updateBeer = Object.assign(prevBeer, newBeer);
    await this.repo.update(updateBeer);
    resp.send('Updated');
  }

  async delete(req: Request, resp: Response) {
    await this.repo.delete(Number(req.params.id));
    resp.send(`<p>Deleted  ${req.params.id}`);
  }
}
