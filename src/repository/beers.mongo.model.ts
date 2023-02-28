import { model, Schema, SchemaTypes } from 'mongoose';
import { Beer } from '../entities/beers';

const beerSchema = new Schema<Beer>({
  // No incluimos los id pero mongoose nos devuelve datos con los id

  name: {
    type: String,
    required: true,
    unique: true,
  },

  price: {
    type: Number,
    required: true,
    min: 0,
  },
});

export const BeerModel = model('Beer', beerSchema, 'beers');
