import express from "express";
import { faker } from "@faker-js/faker";
import cors from "cors";

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const createRandomData = () => {
  return labels.map((label) => ({
    label,
    value: faker.datatype.number({ min: 0, max: 1000 }),
  }));
};

const categories = ["electronics", "clothing", "books"];

const products = {
  electronics: ["laptops", "phones", "tablets"],
  clothing: ["shirts", "pants", "jackets"],
  books: ["cookbooks", "novels", "textbooks"],
};

const brands = {
  electronics: {
    laptops: ["acer", "dell", "hp"],
    phones: ["iphone", "samsung", "huawei"],
    tablets: ["ipad", "lenovo", "acer"],
  },
  clothing: {
    shirts: ["nike", "adidas", "under armour"],
    pants: ["nike", "adidas", "under armour"],
    jackets: ["nike", "adidas", "under armour"],
  },
  books: {
    cookbooks: ["cooking", "cooking", "cooking"],
    novels: ["novel", "novel", "novel"],
    textbooks: ["textbook", "textbook", "textbook"],
  },
};

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/categories", (req, res) => {
  res.json(categories);
});

app.get("/products/:category", (req, res) => {
  const { category } = req.params;
  res.json(products[category]);
});

app.get("/brands/:category/:product", (req, res) => {
  const { category, product } = req.params;
  res.json(brands[category][product]);
});

app.get("/data/:category/:product/:brand", (req, res) => {
  const { category, product, brand } = req.params;
  res.json(createRandomData());
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
