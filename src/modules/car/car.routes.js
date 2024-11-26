import express from 'express';
import carController from '../car/car.controller.js';

const carRouter = express.Router();

carRouter.get('/', carController.getAll);
carRouter.get('/:id', carController.getOneById);
carRouter.post('/', carController.create);
carRouter.put('/:id', carController.update);
carRouter.patch('/:id', carController.patch);
carRouter.delete('/:id', carController.delete);

export { carRouter };
