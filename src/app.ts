import express from 'express';
import { Signale } from 'signale';

import { connectToPostgreSQL } from './database/postgresql';


const app = express();
const signale = new Signale();
const port = 3000;

app.use(express.json());






//connectToPostgreSQL();

app.listen(port, () => {
  signale.success(`Servidor escuchando en el puerto ${port}`)
});