class CarService {
  constructor() {
    this.cars = [];
  }

  getAll() {
    return this.cars;
  }

  getOneById(id) {
    return this.cars.find(car => car.id === id);
  }

  create(data) {
    const newCar = { id: this.cars.length + 1, ...data };
    this.cars.push(newCar);
    return newCar;
  }

  update(id, data) {
    const index = this.cars.findIndex(car => car.id === id);
    if (index === -1) return null;
    this.cars[index] = { ...this.cars[index], ...data };
    return this.cars[index];
  }

  patch(id, data) {
    const car = this.getOneById(id);
    if (!car) return null;
    return { ...car, ...data };
  }

  delete(id) {
    const index = this.cars.findIndex(car => car.id === id);
    if (index === -1) return null;
    const deletedCar = this.cars.splice(index, 1);
    return deletedCar[0];
  }
}

export default new CarService();
