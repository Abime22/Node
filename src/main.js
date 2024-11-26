import express from 'express';
import cors from 'cors';
import { fruitRouter } from './modules/fruit/fruit.routes.js';
import { carRouter } from './modules/car/car.routes.js'; 

const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());

app.use('/api/fruits', fruitRouter);
app.use('/api/cars', carRouter);

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
