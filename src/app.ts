import bodyParser from 'body-parser';
import express from 'express';

const app = express();

app.use(bodyParser.json());

app.listen(3333, () => console.log('App listening in "http://localhost:3333"'));

export default app;
