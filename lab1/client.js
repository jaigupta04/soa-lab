// client.js
const axios = require('axios');

const baseURL = 'http://localhost:3000';

async function testAPI() {
  try {
    // GET products
    const getRes = await axios.get(`${baseURL}/products`);
    console.log('GET /products:', getRes.data);

    // POST a product
    const postRes = await axios.post(`${baseURL}/products`, {
      name: 'New Product from Client'
    });
    console.log('POST /products:', postRes.data);

    // PUT update product
    const putRes = await axios.put(`${baseURL}/products/1`, {
      name: 'Updated Product Name'
    });
    console.log('PUT /products/1:', putRes.data);

    // DELETE a product
    const delRes = await axios.delete(`${baseURL}/products/2`);
    console.log('DELETE /products/2: Status', delRes.status);
  } catch (err) {
    console.error(err.message);
  }
}

testAPI();
