const ProductManager = require('./ProductManager');

const productManager = new ProductManager('products.json');

// Agregar un producto
productManager.addProduct({
  title: 'Producto 1',
  description: 'Descripción del producto 1',
  price: 19.99,
  thumbnail: 'imagen1.jpg',
  code: 'ABC123',
  stock: 10
});

// Obtener todos los productos
const allProducts = productManager.getProducts();
console.log('Todos los productos:', allProducts);

// Obtener un producto por su ID
const productById = productManager.getProductById(1);
console.log('Producto con ID 1:', productById);

// Actualizar un producto
productManager.updateProduct(1, { price: 24.99, stock: 5 });
console.log('Producto actualizado:', productManager.getProductById(1));

// Eliminar un producto
productManager.deleteProduct(1);
console.log('Productos después de eliminar:', productManager.getProducts());
