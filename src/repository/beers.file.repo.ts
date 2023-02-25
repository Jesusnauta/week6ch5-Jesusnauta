/* eslint-disable lines-between-class-members */
import fs from 'fs/promises';

const file = './data/data.json';

export type Beers = {
  id: number;
  name: string;
  price: number;
};

export interface BeersRepoStructure {
  read(): Promise<Beers[]>;
  // eslint-disable-next-line no-unused-vars
  write(info: Beers): Promise<string | object>;
}

export class BeersFileRepo {
  read() {
    return fs
      .readFile(file, { encoding: 'utf-8' })
      .then((data) => JSON.parse(data) as Beers[]);
  }

  async readId(id: Beers['id']) {
    const data = await fs.readFile(file, 'utf-8');
    const parsedData: Beers[] = JSON.parse(data);
    return parsedData.filter((thing) => thing.id === id)[0];
  }

  async write(info: Beers) {
    const data = await fs.readFile(file, { encoding: 'utf-8' });
    const parsedData: Beers[] = JSON.parse(data);
    const finalData = JSON.stringify([...parsedData, info]);
    await fs.writeFile(file, finalData, { encoding: 'utf-8' });
    return 'Lets go! (write)';
  }
  async update(info: Beers) {
    const data = await fs.readFile(file, { encoding: 'utf-8' });
    const parsedData: Beers[] = JSON.parse(data);
    const updatedData = JSON.stringify(
      parsedData.map((item) => (item.id === info.id ? info : item))
    );
    await fs.writeFile(file, updatedData, 'utf-8');
  }
  async delete(id: Beers['id']) {
    const data = await fs.readFile(file, 'utf-8');
    const parsedData: Beers[] = JSON.parse(data);
    const finalData = JSON.stringify(
      parsedData.filter((item) => item.id !== id)
    );
    await fs.writeFile(file, finalData, 'utf-8');
  }
}
