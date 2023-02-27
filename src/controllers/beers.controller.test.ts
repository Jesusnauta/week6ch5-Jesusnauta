import { Response, Request, NextFunction } from 'express';

import { BeersFileRepo } from '../repository/beers.file.repo';
import { BeersController } from './beers.controller';

describe('Given BeersController', () => {
  const repo: BeersFileRepo = {
    create: jest.fn(),
    query: jest.fn(),
    queryId: jest.fn(),
    update: jest.fn(),
    destroy: jest.fn(),
  };

  const req = {
    body: {},
    params: { id: '' },
  } as unknown as Request;
  const resp = {
    json: jest.fn(),
  } as unknown as Response;
  const next = jest.fn();

  const controller = new BeersController(repo);

  describe('getAll', () => {
    test('Then it should ... if there ara NOT errors', async () => {
      await controller.getAll(req, resp, next);
      expect(repo.query).toHaveBeenCalled();
      expect(resp.json).toHaveBeenCalled();
    });

    test('Then it should ... if there are errors', async () => {
      (repo.query as jest.Mock).mockRejectedValue(new Error());
      await controller.getAll(req, resp, next);
      expect(repo.query).toHaveBeenCalled();
      expect(next).toHaveBeenCalled();
    });
  });

  describe('get', () => {
    test('Then it should ... if there are NOT errors', async () => {
      await controller.get(req, resp, next);
      expect(repo.queryId).toHaveBeenCalled();
      expect(resp.json).toHaveBeenCalled();
    });
    test('Then it should ... if there are errors', async () => {
      (repo.queryId as jest.Mock).mockRejectedValue(new Error());
      await controller.get(req, resp, next);
      expect(repo.queryId).toHaveBeenCalled();
      expect(next).toHaveBeenCalled();
    });
  });

  describe('post', () => {
    test('Then it should show a new instance', async () => {
      await controller.post(req, resp, next);
      expect(repo.create).toBeInstanceOf(next);
      expect(resp.json).toBeInstanceOf(next);
    });
    test('Then it should show a new instance', async () => {
      (repo.create as jest.Mock).mockRejectedValue(new Error());
      await controller.post(req, resp, next);
      expect(repo.create).toHaveBeenCalled();
      expect(next).toHaveBeenCalled();
    });
  });
});
