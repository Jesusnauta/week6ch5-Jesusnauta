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

app.use('/beers', beersRouter);

app.get('/', (req, res) => {
  res.send("<h1>Bienvenidos a Beers Coder's</h1>");
});
