const express = require('express');
const { resolve } = require('path');
const cors = require('cors');

const app = express();
const port = 3010;
app.use(cors());

let products = [
  {
    id: 1,
    name: 'Xiaomi iPhone 12',
    brand: 'Xiaomi',
    price: 60000,
    ram: 6,
    rom: 256,
    rating: 4.5,
    os: 'Android',
    camera: 108,
  },
  {
    id: 2,
    name: 'Oppo Mi 10',
    brand: 'Xiaomi',
    price: 30000,
    ram: 6,
    rom: 512,
    rating: 4,
    os: 'iOS',
    camera: 64,
  },
  {
    id: 3,
    name: 'Samsung Mi 10',
    brand: 'Oppo',
    price: 20000,
    ram: 4,
    rom: 256,
    rating: 4,
    os: 'Android',
    camera: 24,
  },
  {
    id: 4,
    name: 'Apple Find X2',
    brand: 'Samsung',
    price: 60000,
    ram: 8,
    rom: 512,
    rating: 4.5,
    os: 'iOS',
    camera: 48,
  },
  {
    id: 5,
    name: 'Oppo Mi 11',
    brand: 'Xiaomi',
    price: 30000,
    ram: 12,
    rom: 128,
    rating: 4,
    os: 'iOS',
    camera: 24,
  },
  {
    id: 6,
    name: 'OnePlus Find X3',
    brand: 'Apple',
    price: 30000,
    ram: 12,
    rom: 64,
    rating: 4,
    os: 'Android',
    camera: 64,
  },
  {
    id: 7,
    name: 'Apple Pixel 5',
    brand: 'Apple',
    price: 70000,
    ram: 4,
    rom: 512,
    rating: 4.5,
    os: 'iOS',
    camera: 24,
  },
  {
    id: 8,
    name: 'Google Mi 10',
    brand: 'Oppo',
    price: 30000,
    ram: 8,
    rom: 64,
    rating: 5,
    os: 'iOS',
    camera: 108,
  },
  {
    id: 9,
    name: 'Oppo Mi 11',
    brand: 'Samsung',
    price: 30000,
    ram: 4,
    rom: 64,
    rating: 4,
    os: 'Android',
    camera: 24,
  },
  {
    id: 10,
    name: 'Xiaomi Mi 10',
    brand: 'Oppo',
    price: 60000,
    ram: 16,
    rom: 512,
    rating: 4.5,
    os: 'Android',
    camera: 12,
  },
  {
    id: 11,
    name: 'OnePlus Pixel 5',
    brand: 'Apple',
    price: 60000,
    ram: 12,
    rom: 64,
    rating: 5,
    os: 'Android',
    camera: 12,
  },
  {
    id: 12,
    name: 'Xiaomi OnePlus 8',
    brand: 'Xiaomi',
    price: 70000,
    ram: 8,
    rom: 64,
    rating: 4.5,
    os: 'Android',
    camera: 48,
  },
  {
    id: 13,
    name: 'Xiaomi Pixel 6',
    brand: 'Oppo',
    price: 30000,
    ram: 4,
    rom: 64,
    rating: 5,
    os: 'Android',
    camera: 108,
  },
  {
    id: 14,
    name: 'Samsung Find X2',
    brand: 'Oppo',
    price: 40000,
    ram: 12,
    rom: 512,
    rating: 4.7,
    os: 'Android',
    camera: 48,
  },
  {
    id: 15,
    name: 'Google OnePlus 8',
    brand: 'Apple',
    price: 20000,
    ram: 16,
    rom: 64,
    rating: 5,
    os: 'iOS',
    camera: 24,
  },
  {
    id: 16,
    name: 'OnePlus iPhone 12',
    brand: 'OnePlus',
    price: 20000,
    ram: 6,
    rom: 128,
    rating: 4.5,
    os: 'iOS',
    camera: 64,
  },
  {
    id: 17,
    name: 'Google Mi 11',
    brand: 'Oppo',
    price: 70000,
    ram: 6,
    rom: 64,
    rating: 4,
    os: 'Android',
    camera: 64,
  },
  {
    id: 18,
    name: 'Google OnePlus 9',
    brand: 'Apple',
    price: 20000,
    ram: 4,
    rom: 64,
    rating: 5,
    os: 'Android',
    camera: 64,
  },
  {
    id: 19,
    name: 'Oppo Galaxy S22',
    brand: 'Samsung',
    price: 20000,
    ram: 16,
    rom: 256,
    rating: 4.7,
    os: 'Android',
    camera: 12,
  },
  {
    id: 20,
    name: 'Apple Pixel 5',
    brand: 'Oppo',
    price: 40000,
    ram: 8,
    rom: 128,
    rating: 4.7,
    os: 'Android',
    camera: 108,
  },
];

function sortedProducts(a, b) {
  return b.rating - a.rating;
}

app.get('/products/sort/popularity', (req, res) => {
  let result = products.sort(sortedProducts);
  res.json({ products: result });
});

function sortedProductsPrice(a, b) {
  return b.price - a.price;
}
app.get('/products/sort/price-high-to-low', (req, res) => {
  let result = products.sort(sortedProductsPrice);

  res.json({ products: result });
});

function sortedProductsPriceLowToHigh(a, b) {
  return a.price - b.price;
}
app.get('/products/sort/price-low-to-high', (req, res) => {
  let result = products.sort(sortedProductsPriceLowToHigh);

  res.json({ products: result });
});

function filterByRam(productsObj, ram) {
  return productsObj.ram === ram;
}

app.get('/products/filter/ram', (req, res) => {
  let ram = parseInt(req.query.ram);
  let result = products.filter((productsObj) => filterByRam(productsObj, ram));
  res.json({ products: result });
});

function filterByRom(productsObj, rom) {
  return productsObj.rom === rom;
}

app.get('/products/filter/rom', (req, res) => {
  let rom = parseInt(req.query.rom);
  let result = products.filter((productsObj) => filterByRom(productsObj, rom));
  res.json({ products: result });
});

function filterByBrand(productsObj, brand) {
  return productsObj.brand.toLowerCase() === brand;
}

app.get('/products/filter/brand', (req, res) => {
  let brand = req.query.brand;
  let result = products.filter((productsObj) =>
    filterByBrand(productsObj, brand)
  );
  res.json({ products: result });
});

function filterByOs(productsObj, os) {
  return productsObj.os.toLowerCase() === os;
}

app.get('/products/filter/os', (req, res) => {
  let os = req.query.os;
  let result = products.filter((productsObj) => filterByOs(productsObj, os));
  res.json({ products: result });
});

function filterByPrice(productsObj, price) {
  return productsObj.price <= price;
}

app.get('/products/filter/price', (req, res) => {
  let price = parseInt(req.query.price);
  let result = products.filter((productsObj) =>
    filterByPrice(productsObj, price)
  );
  res.json({ products: result });
});

app.get('/products', (req, res) => {
  res.json({ products });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
