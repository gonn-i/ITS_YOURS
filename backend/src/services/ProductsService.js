const { Products } = require("../models");

async function productsList() {
  const productsList = await Products.find();

  return productsList;
}

async function searchProduct(name) {
  const result = await Products.find({ name });
  return result;
}

async function productInfo(id) {
  const result = await Products.find({ id });
  return result;
}

module.exports = { productsList, searchProduct, productInfo };
