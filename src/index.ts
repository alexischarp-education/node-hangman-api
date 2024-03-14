import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import type { Locale } from './types';
import { getWord } from './service';

const app = express();
const port = Number(process.env.port) || 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/', (req, res) => {
  const locale: Locale = req.body.locale;
  res.send(getWord(locale));
});

app.listen(port, '0.0.0.0', () => {
  console.log(`HangmanAPI up and running on port ${port}`);
});
