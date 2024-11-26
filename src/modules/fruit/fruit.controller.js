import fruitService from '../fruit/fruit.service.js';

import { ResData } from '../../lib/resData.js';  

class FruitController {
  async getAll(req, res) {
    try {
      const fruits = await fruitService.getAll();
      const response = new ResData(200, 'Fruits fetched successfully', fruits);
      res.json(response);
    } catch (err) {
      const response = new ResData(500, 'Failed to fetch fruits', null);
      res.status(500).json(response);
    }
  }

  async getOneById(req, res) {
    const id = parseInt(req.params.id, 10);
    try {
      const fruit = await fruitService.getOneById(id);
      if (!fruit) {
        const response = new ResData(404, 'Fruit not found', null);
        return res.status(404).json(response);
      }
      const response = new ResData(200, 'Fruit fetched successfully', fruit);
      res.json(response);
    } catch (err) {
      const response = new ResData(500, 'Failed to fetch fruit', null);
      res.status(500).json(response);
    }
  }

  async create(req, res) {
    try {
      const newFruit = await fruitService.create(req.body);
      const response = new ResData(201, 'Fruit created successfully', newFruit);
      res.status(201).json(response);
    } catch (err) {
      const response = new ResData(500, 'Failed to create fruit', null);
      res.status(500).json(response);
    }
  }

  async update(req, res) {
    const id = parseInt(req.params.id, 10);
    try {
      const updatedFruit = await fruitService.update(id, req.body);
      if (!updatedFruit) {
        const response = new ResData(404, 'Fruit not found', null);
        return res.status(404).json(response);
      }
      const response = new ResData(200, 'Fruit updated successfully', updatedFruit);
      res.json(response);
    } catch (err) {
      const response = new ResData(500, 'Failed to update fruit', null);
      res.status(500).json(response);
    }
  }

  async patch(req, res) {
    const id = parseInt(req.params.id, 10);
    try {
      const patchedFruit = await fruitService.patch(id, req.body);
      if (!patchedFruit) {
        const response = new ResData(404, 'Fruit not found', null);
        return res.status(404).json(response);
      }
      const response = new ResData(200, 'Fruit patched successfully', patchedFruit);
      res.json(response);
    } catch (err) {
      const response = new ResData(500, 'Failed to patch fruit', null);
      res.status(500).json(response);
    }
  }

  async delete(req, res) {
    const id = parseInt(req.params.id, 10);
    try {
      const deletedFruit = await fruitService.delete(id);
      if (!deletedFruit) {
        const response = new ResData(404, 'Fruit not found', null);
        return res.status(404).json(response);
      }
      const response = new ResData(200, 'Fruit deleted successfully', deletedFruit);
      res.json(response);
    } catch (err) {
      const response = new ResData(500, 'Failed to delete fruit', null);
      res.status(500).json(response);
    }
  }
}

export default new FruitController();
