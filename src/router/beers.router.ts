/* eslint-disable new-cap */
import { Router } from 'express';
import { BeersController } from '../controllers/beers.controller.js';
import { BeersFileRepo } from '../repository/beers.file.repo.js';

export const beersRouter = Router();
const repo = new BeersFileRepo();
const controller = new BeersController(repo);

beersRouter.get('/', controller.getAll.bind(controller));
beersRouter.get('/:id', controller.get.bind(controller));
beersRouter.post('/', controller.post.bind(controller));
beersRouter.patch('/:id', controller.patch.bind(controller));
beersRouter.delete('/:id', controller.delete.bind(controller));
