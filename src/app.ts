import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { beersRouter } from './router/beers.router.js';
export const app = express();
app.disable('x-powered-by');

const corsOptions = {
  origin: '*',
};
app.use(morgan('dev'));
app.use(express.json());
app.use(cors(corsOptions));

// Modo más organizado de hacerlo
// Ejemplo para una ruta

app.use('/beers', beersRouter);

// Modo más simple de hacerlo
// Ejemplo para la ruta home

app.get('/:id', (req, resp) => {
  resp.send('Hola ' + req.params.id);
});
app.post('/', (req, resp) => {
  req.body.id = 12;
  resp.send(req.body);
});

app.patch('/:id');
app.delete('/:id');
