import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { beersRouter } from './router/beers.router.js';
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> a985150 (✅ Add components files)
=======

>>>>>>> 5f5505b42295417f00223b455404703f700ceada
export const app = express();
app.disable('x-powered-by');

const corsOptions = {
  origin: '*',
};

app.use(morgan('dev'));
app.use(express.json());
app.use(cors(corsOptions));

<<<<<<< HEAD
<<<<<<< HEAD
app.use('/beers', beersRouter);

app.get('/', (req, res) => {
  res.send("<h1>Bienvenidos a Beers Coder's</h1>");
});
=======
// Modo más organizado de hacerlo
// Ejemplo para una ruta

=======
>>>>>>> 5f5505b42295417f00223b455404703f700ceada
app.use('/beers', beersRouter);

app.get('/', (req, res) => {
  res.send("<h1>Bienvenidos a Beers Coder's</h1>");
});
<<<<<<< HEAD
app.post('/', (req, resp) => {
  req.body.id = 12;
  resp.send(req.body);
});

app.patch('/:id');
app.delete('/:id');
>>>>>>> a985150 (✅ Add components files)
=======
>>>>>>> 5f5505b42295417f00223b455404703f700ceada
