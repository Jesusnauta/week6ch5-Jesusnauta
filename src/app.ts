import express, { NextFunction, Request, Response } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { beersRouter } from './routers/beers.router.js';
export const app = express();
app.disable('x-powered-by');

const corsOptions = {
  origin: '*',
};
app.use(morgan('dev'));
app.use(express.json());
app.use(cors(corsOptions));

app.use((_req, _resp, next) => {
  console.log('Soy un middleware');
  next();
});

// Modo más organizado de hacerlo
// Ejemplo para una ruta

app.use('/things', beersRouter);

// Modo más simple de hacerlo
// Ejemplo para la ruta home

app.get('/', (_req, resp) => {
  resp.json({
    name: 'Pepe',
    age: 22,
  });
});
app.get('/:id', (req, resp) => {
  resp.send('Hola ' + req.params.id);
});
app.post('/', (req, resp) => {
  req.body.id = 12;
  resp.send(req.body);
});
app.patch('/:id');
app.delete('/:id');

app.use((_error: Error, _req: Request, resp: Response, _next: NextFunction) => {
  console.log('Soy el middleware de errores');
  resp.json({
    error: [],
  });
});
