class FruitService {
  constructor() {
    this.fruits = [];
  }

  getAll() {
    return this.fruits;
  }

  getOneById(id) {
    return this.fruits.find(fruit => fruit.id === id);
  }

  create(data) {
    const newFruit = { id: this.fruits.length + 1, ...data };
    this.fruits.push(newFruit);
    return newFruit;
  }

  update(id, data) {
    const index = this.fruits.findIndex(fruit => fruit.id === id);
    if (index === -1) return null;
    this.fruits[index] = { ...this.fruits[index], ...data };
    return this.fruits[index];
  }

  patch(id, data) {
    const fruit = this.getOneById(id);
    if (!fruit) return null;
    return { ...fruit, ...data };
  }

  delete(id) {
    const index = this.fruits.findIndex(fruit => fruit.id === id);
    if (index === -1) return null;
    const deletedFruit = this.fruits.splice(index, 1);
    return deletedFruit[0];
  }
}

export default new FruitService();
