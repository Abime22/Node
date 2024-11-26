import express from 'express';
import fruitController from '../fruit/fruit.controller.js';

const fruitRouter = express.Router();

fruitRouter.get('/', fruitController.getAll);
fruitRouter.get('/:id', fruitController.getOneById);
fruitRouter.post('/', fruitController.create);
fruitRouter.put('/:id', fruitController.update);
fruitRouter.patch('/:id', fruitController.patch);
fruitRouter.delete('/:id', fruitController.delete);

export { fruitRouter };
