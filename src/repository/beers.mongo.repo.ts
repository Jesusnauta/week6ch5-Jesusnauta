import { Beer } from '../entities/beers';
import { HTTPError } from '../errors/errors.js';
import { Repo } from './repo.interface';
import { BeerModel } from './beers.mongo.model.js';
import createDebug from 'debug';
const debug = createDebug('W6:repo');

export class BeersMongoRepo implements Repo<Beer> {
  constructor() {
    debug('Instantiate');
  }

  async query(): Promise<Beer[]> {
    debug('query');
    const data = await BeerModel.find();
    return data;
  }

  async queryId(id: string): Promise<Beer> {
    debug('queryId');
    const data = await BeerModel.findById(id);
    if (!data) throw new HTTPError(404, 'Not found', 'ID not found in queryID');
    return data;
  }

  async create(info: Partial<Beer>): Promise<Beer> {
    debug('create');
    const data = await BeerModel.create(info);
    return data;
  }

  async update(info: Partial<Beer>): Promise<Beer> {
    debug('update');
    const data = await BeerModel.findByIdAndUpdate(info.id, info, {
      new: true,
    }); // Mejor que update, findbyidandupdate
    if (!data) throw new HTTPError(404, 'Not found', 'ID not found in update');
    return data;
  }

  async destroy(id: string): Promise<void> {
    debug('destroy');
    const data = await BeerModel.findByIdAndDelete(id);
    if (!data)
      throw new HTTPError(
        404,
        'Not found',
        'Delete not possible: id not found'
      );
  }
}
