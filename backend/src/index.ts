import express, { Express } from 'express';
import { dbConnect } from './config/dbconfig';

const app: Express = express();
const port = process.env.PORT;

/* Initializing Server */

/* Middlewares */

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* Database Connection */
dbConnect();

/* Open Port - Init Server */
app.listen(port, () => {
  console.log(`Server is Running at port ${port}`);
});
