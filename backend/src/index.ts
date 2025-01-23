import express, { Express, Request, Response, NextFunction } from 'express';

const app: Express = express();
const port = 8000;

//initializing the server
app.get('/', (req: Request, res: Response, next: NextFunction) => {});

app.listen(port, () => {
  console.log(`Server is Running at port ${port}`);
});
