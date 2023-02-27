import fs from 'fs/promises';
import { Repo } from './repo.interface';
import { Beer } from '../entities/beers';

const file = './data/data.json';

export class BeersFileRepo implements Repo<Beer> {
  write(newBeer: Beer) {
    throw new Error('Method not implemented.');
  }

  async query(): Promise<Beer[]> {
    const initialData: string = await fs.readFile(file, { encoding: 'utf-8' });
    return JSON.parse(initialData);
  }

  async queryId(id: string): Promise<Beer> {
    const initialData: string = await fs.readFile(file, { encoding: 'utf-8' });
    const data: Beer[] = JSON.parse(initialData);
    const finalData = data.find((item) => item.name === id);
    if (!finalData) throw new Error('Id not found');
    return finalData;
  }

  async create(info: Partial<Beer>): Promise<Beer> {
    // Future if (!validateInfo(info)) throw new Error('Not valid data');
    const initialData: string = await fs.readFile(file, { encoding: 'utf-8' });
    const data: Beer[] = JSON.parse(initialData);
    info.name = String(Math.floor(Math.random() * 1000_000));
    const finalData = [...data, info];
    await fs.writeFile(file, JSON.stringify(finalData), 'utf-8');
    return info as Beer;
  }

  async update(info: Partial<Beer>): Promise<Beer> {
    if (!info.id) throw new Error('Not valid data');
    const initialData: string = await fs.readFile(file, { encoding: 'utf-8' });
    const data: Beer[] = JSON.parse(initialData);
    let updatedItem: Beer = {} as Beer;
    const finalData = data.map((item) => {
      if (item.id === info.id) {
        updatedItem = { ...item, ...info };
        return updatedItem;
      }

      return item;
    });

    if (!updatedItem.id) throw new Error('Id not found');
    await fs.writeFile(file, JSON.stringify(finalData), 'utf-8');
    return updatedItem as Beer;
  }

  async destroy(id: string): Promise<void> {
    const initialData: string = await fs.readFile(file, {
      encoding: 'utf-8',
    });
    const data: Beer[] = JSON.parse(initialData);
    const index = data.findIndex((item) => item.name === id);
    if (index < 0) throw new Error('Id not found');
    data.slice(index, 1);
    await fs.writeFile(file, JSON.stringify(data), 'utf-8');
  }
}
