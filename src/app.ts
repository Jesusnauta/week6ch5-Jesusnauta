import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { beersRouter } from './router/beers.router.js';
<<<<<<< HEAD

=======
>>>>>>> a985150 (✅ Add components files)
export const app = express();
app.disable('x-powered-by');

const corsOptions = {
  origin: '*',
};

app.use(morgan('dev'));
app.use(express.json());
app.use(cors(corsOptions));

<<<<<<< HEAD
app.use('/beers', beersRouter);

app.get('/', (req, res) => {
  res.send("<h1>Bienvenidos a Beers Coder's</h1>");
});
=======
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
>>>>>>> a985150 (✅ Add components files)
