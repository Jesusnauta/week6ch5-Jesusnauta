<<<<<<< HEAD
<<<<<<< HEAD
/* eslint-disable new-cap */
=======
>>>>>>> a985150 (✅ Add components files)
=======
/* eslint-disable new-cap */
>>>>>>> 5f5505b42295417f00223b455404703f700ceada
import { Router } from 'express';
import { BeersController } from '../controllers/beers.controller.js';
import { BeersFileRepo } from '../repository/beers.file.repo.js';

<<<<<<< HEAD
<<<<<<< HEAD
=======
// eslint-disable-next-line new-cap
>>>>>>> a985150 (✅ Add components files)
=======
>>>>>>> 5f5505b42295417f00223b455404703f700ceada
export const beersRouter = Router();
const repo = new BeersFileRepo();
const controller = new BeersController(repo);

beersRouter.get('/', controller.getAll.bind(controller));
beersRouter.get('/:id', controller.get.bind(controller));
beersRouter.post('/', controller.post.bind(controller));
beersRouter.patch('/:id', controller.patch.bind(controller));
beersRouter.delete('/:id', controller.delete.bind(controller));
