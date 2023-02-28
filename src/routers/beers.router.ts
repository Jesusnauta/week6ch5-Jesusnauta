import { Router } from 'express';
import { BeersController } from '../controllers/beers.controller.js';
import { BeersFileRepo } from '../repository/beers.file.repo.js';
import { BeersMongoRepo } from '../repository/beers.mongo.repo.js';

// eslint-disable-next-line new-cap
export const beersRouter = Router();
// File repo previo const repo = new BeersFileRepo();
const repo = new BeersMongoRepo();
const controller = new BeersController(repo);

beersRouter.get('/', controller.getAll.bind(controller));
beersRouter.get('/:id', controller.get.bind(controller));
beersRouter.post('/', controller.post.bind(controller));
beersRouter.patch('/:id', controller.patch.bind(controller));
beersRouter.delete('/:id', controller.destroy.bind(controller));
