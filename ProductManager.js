const fs = require('fs');

class ProductManager {
  constructor(filePath) {
    this.path = filePath;
    this.products = [];
    this.loadFromFile();
  }

  loadFromFile() {
    try {
      const data = fs.readFileSync(this.path, 'utf-8');
      this.products = JSON.parse(data);
    } catch (error) {
      this.products = [];
    }
  }

  saveToFile() {
    fs.writeFileSync(this.path, JSON.stringify(this.products, null, 2), 'utf-8');
  }

  addProduct(product) {
    const id = this.products.length > 0 ? this.products[this.products.length - 1].id + 1 : 1;
    product.id = id;
    this.products.push(product);
    this.saveToFile();
  }

  getProducts() {
    return this.products;
  }

  getProductById(id) {
    const product = this.products.find(p => p.id === id);
    return product;
  }

  updateProduct(id, newData) {
    const index = this.products.findIndex(p => p.id === id);
    if (index !== -1) {
      this.products[index] = { ...this.products[index], ...newData };
      this.saveToFile();
    }
  }

  deleteProduct(id) {
    const index = this.products.findIndex(p => p.id === id);
    if (index !== -1) {
      this.products.splice(index, 1);
      this.saveToFile();
    }
  }
}

module.exports = ProductManager;
