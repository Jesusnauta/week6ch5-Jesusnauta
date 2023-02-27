import { BeersFileRepo } from './beers.file.repo';
import fs from 'fs/promises';
import { Beer } from '../entities/beers';
jest.mock('fs/promises');

describe('Given BeersFileRepo', () => {
  // Arrange
  const repo = new BeersFileRepo();
  test('Then it could be instantiated', () => {
    expect(repo).toBeInstanceOf(BeersFileRepo);
  });

  describe('When I use query', () => {
    test('Then should return the data', async () => {
      // Arrange
      (fs.readFile as jest.Mock).mockResolvedValue('[]');
      // Act
      const result = await repo.query();
      // Assert
      expect(fs.readFile).toHaveBeenCalled();
      expect(result).toEqual([]);
    });
  });
  console.log('sonar2');
  describe('When I use queryID', () => {
    test('Then it should return an object if it has a valid id', async () => {
      (fs.readFile as jest.Mock).mockResolvedValue('[{"id": "1"}]');
      const id = '1';
      const result = await repo.queryId(id);
      expect(fs.readFile).toHaveBeenCalled();
      expect(result).toEqual({ id: '1' });
    });
    test('Then it should throw an error if it has a NO valid id', () => {
      (fs.readFile as jest.Mock).mockResolvedValue('[{"id": "2"}]');
      const id = '1';
      expect(async () => repo.queryId(id)).rejects.toThrow();
      expect(fs.readFile).toHaveBeenCalled();
    });
  });

  describe('When I use create', () => {
    test('Then it should return an object if it has a valid id', async () => {
      (fs.readFile as jest.Mock).mockResolvedValue('[]');
      const newBeer: Beer = {
        id: '6',
        name: 'Zulia',
        price: 4.8,
      };
      const result = await repo.write(newBeer);
      expect(result).toEqual(newBeer);
    });
  });

  describe('When I use update', () => {
    test('Then it should return a updated object if it has a valid id', async () => {
      (fs.readFile as jest.Mock).mockResolvedValue(
        '[{"id": "1", "name": "Heineken"}]'
      );

      const result = await repo.update({ id: '1', name: 'Heineken' });
      expect(fs.readFile).toHaveBeenCalled();
      expect(result).toEqual({ id: '1', name: 'Heineken' });
    });
  });

  describe('When I use destroy', () => {
    beforeEach(async () => {
      (fs.readFile as jest.Mock).mockResolvedValue('[{"id": "2"}]');
    });

    test('Then if it has an object to delete, the readFile function should be called', async () => {
      await repo.destroy('2');
      expect(fs.readFile).toHaveBeenCalled();
    });

    test('Then if it has an object with NO ID, it should throw an Error', async () => {
      expect(async () => repo.destroy('3')).rejects.toThrow();
    });
  });
});
