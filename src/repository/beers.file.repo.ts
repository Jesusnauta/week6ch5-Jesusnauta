import fs from 'fs/promises';

<<<<<<< HEAD
<<<<<<< HEAD
const file = 'data/data.json';

import { Beers } from '../models/beers.js';
=======
const file = './data/data.json';
>>>>>>> a985150 (✅ Add components files)
=======
const file = 'data/data.json';

import { Beers } from '../models/beers.js';
>>>>>>> 5f5505b42295417f00223b455404703f700ceada

export class BeersFileRepo {
  read() {
    return fs
      .readFile(file, { encoding: 'utf-8' })
<<<<<<< HEAD
<<<<<<< HEAD
      .then((data) => JSON.parse(data) as Beers[]);
  }

  async readById(id: Beers['id']) {
    const info = await fs.readFile(file, { encoding: 'utf-8' });
    const infoParse: Beers[] = JSON.parse(info);
    return infoParse.find((item) => item.id === id);
  }

  async write(info: Beers) {
    const infoAdd = await fs.readFile(file, { encoding: 'utf-8' });
    const dataInfoAdd: Beers[] = JSON.parse(infoAdd);
    const totalData = JSON.stringify([...dataInfoAdd, info]);
    await fs.writeFile(file, totalData, { encoding: 'utf-8' });
  }

  async update(info: Beers) {
    const infoUpdate = await fs.readFile(file, { encoding: 'utf-8' });
    const dataInfoUpdate: Beers[] = JSON.parse(infoUpdate);
    const updateData = dataInfoUpdate.map((item) =>
      item.id === info.id ? info : item
    );
    const finalData = JSON.stringify(updateData);
    await fs.writeFile(file, finalData, { encoding: 'utf-8' });
  }

  async delete(id: Beers['id']) {
    const infoDelete = await fs.readFile(file, { encoding: 'utf-8' });
    const dataInfoDelete: Beers[] = JSON.parse(infoDelete);
    const restData = dataInfoDelete.filter((item) => item.id !== id);
    const restFinalData = JSON.stringify(restData);
    await fs.writeFile(file, restFinalData, { encoding: 'utf-8' });
  }
=======
      .then((data) => JSON.parse(data) as any[]);
  }

  write() {}
  update() {}
  delete() {}
>>>>>>> a985150 (✅ Add components files)
=======
      .then((data) => JSON.parse(data) as Beers[]);
  }

  async readById(id: Beers['id']) {
    const info = await fs.readFile(file, { encoding: 'utf-8' });
    const infoParse: Beers[] = JSON.parse(info);
    return infoParse.find((item) => item.id === id);
  }

  async write(info: Beers) {
    const infoAdd = await fs.readFile(file, { encoding: 'utf-8' });
    const dataInfoAdd: Beers[] = JSON.parse(infoAdd);
    const totalData = JSON.stringify([...dataInfoAdd, info]);
    await fs.writeFile(file, totalData, { encoding: 'utf-8' });
  }

  async update(info: Beers) {
    const infoUpdate = await fs.readFile(file, { encoding: 'utf-8' });
    const dataInfoUpdate: Beers[] = JSON.parse(infoUpdate);
    const updateData = dataInfoUpdate.map((item) =>
      item.id === info.id ? info : item
    );
    const finalData = JSON.stringify(updateData);
    await fs.writeFile(file, finalData, { encoding: 'utf-8' });
  }

  async delete(id: Beers['id']) {
    const infoDelete = await fs.readFile(file, { encoding: 'utf-8' });
    const dataInfoDelete: Beers[] = JSON.parse(infoDelete);
    const restData = dataInfoDelete.filter((item) => item.id !== id);
    const restFinalData = JSON.stringify(restData);
    await fs.writeFile(file, restFinalData, { encoding: 'utf-8' });
  }
>>>>>>> 5f5505b42295417f00223b455404703f700ceada
}
