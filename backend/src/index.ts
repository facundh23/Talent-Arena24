import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
dotenv.config();

import deviceRoute from './routes/device';
import trackingRoute from './routes/tracking';
import bodyParser from 'body-parser';
import db from './connection';
import deviceTypeRoute from './routes/device-type';
import notifyRoute from './routes/notify';

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/', (req: Request, res: Response) => {
  res.json({ test: 'test' });
});

app.use('/device', deviceRoute);
app.use('/device-type', deviceTypeRoute);
app.use('/notify', notifyRoute);



app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

db.sequelize
  .sync()
  .then(() => {
    console.log('Syncasdsaeststs ed db.');
  })
  .catch((err) => {
    console.log('Failed to sync db: ' + err);
  });
