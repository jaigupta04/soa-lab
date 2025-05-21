const express = require('express');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const app = express();
const PORT = 3000;

app.use(express.json());

let products = [
  { id: 1, name: 'Pen' },
  { id: 2, name: 'Notebook' }
];

// GET all products
app.get('/products', (req, res) => {
  res.json(products);
});

// POST a product
app.post('/products', (req, res) => {
  const newProduct = req.body;
  newProduct.id = products.length + 1;
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// PUT (update) a product
app.put('/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const updatedProduct = req.body;
  let product = products.find(p => p.id === id);
  if (product) {
    product.name = updatedProduct.name;
    res.json(product);
  } else {
    res.status(404).json({ error: 'Product not found' });
  }
});

// DELETE a product
app.delete('/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  products = products.filter(p => p.id !== id);
  res.status(204).send();
});

const swaggerDocument = YAML.load('./swagger.yaml');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
