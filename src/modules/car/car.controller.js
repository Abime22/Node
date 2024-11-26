import carService from '../car/car.service.js';
import { ResData } from '../../lib/resData.js';


class CarController {
  async getAll(req, res) {
    try {
      const cars = await carService.getAll();
      const response = new ResData(200, 'Cars fetched successfully', cars);
      res.json(response);
    } catch (err) {
      const response = new ResData(500, 'Failed to fetch cars', null);
      res.status(500).json(response);
    }
  }

  async getOneById(req, res) {
    const id = parseInt(req.params.id, 10);
    try {
      const car = await carService.getOneById(id);
      if (!car) {
        const response = new ResData(404, 'Car not found', null);
        return res.status(404).json(response);
      }
      const response = new ResData(200, 'Car fetched successfully', car);
      res.json(response);
    } catch (err) {
      const response = new ResData(500, 'Failed to fetch car', null);
      res.status(500).json(response);
    }
  }

  async create(req, res) {
    try {
      const newCar = await carService.create(req.body);
      const response = new ResData(201, 'Car created successfully', newCar);
      res.status(201).json(response);
    } catch (err) {
      const response = new ResData(500, 'Failed to create car', null);
      res.status(500).json(response);
    }
  }

  async update(req, res) {
    const id = parseInt(req.params.id, 10);
    try {
      const updatedCar = await carService.update(id, req.body);
      if (!updatedCar) {
        const response = new ResData(404, 'Car not found', null);
        return res.status(404).json(response);
      }
      const response = new ResData(200, 'Car updated successfully', updatedCar);
      res.json(response);
    } catch (err) {
      const response = new ResData(500, 'Failed to update car', null);
      res.status(500).json(response);
    }
  }

  async patch(req, res) {
    const id = parseInt(req.params.id, 10);
    try {
      const patchedCar = await carService.patch(id, req.body);
      if (!patchedCar) {
        const response = new ResData(404, 'Car not found', null);
        return res.status(404).json(response);
      }
      const response = new ResData(200, 'Car patched successfully', patchedCar);
      res.json(response);
    } catch (err) {
      const response = new ResData(500, 'Failed to patch car', null);
      res.status(500).json(response);
    }
  }

  async delete(req, res) {
    const id = parseInt(req.params.id, 10);
    try {
      const deletedCar = await carService.delete(id);
      if (!deletedCar) {
        const response = new ResData(404, 'Car not found', null);
        return res.status(404).json(response);
      }
      const response = new ResData(200, 'Car deleted successfully', deletedCar);
      res.json(response);
    } catch (err) {
      const response = new ResData(500, 'Failed to delete car', null);
      res.status(500).json(response);
    }
  }
}

export default new CarController();
