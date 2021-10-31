const products = require("../../products");
const Product = require("../../db/models/Product");

exports.fetchProduct = async (productId, next) => {
  try {
    const product = await Product.findById(productId);
    return product;
  } catch (error) {
    next(error);
  }
};

exports.productListFetch = async (request, response, next) => {
  try {
    const products = await Product.find();
    return response.json(products);
  } catch (error) {
    next(error);
    // return response.status(500).json({ message: error.message });
  }
};

exports.productCreate = async (request, response) => {
  try {
    const newProduct = await Product.create(request.body);
    return response.status(201).json(newProduct);
  } catch (error) {
    return response.status(500).json({ message: error.message });
  }
};

exports.productUpdate = async (request, response, next) => {
  try {
    const product = await Product.findByIdAndUpdate(
      { _id: productId },
      request.body,
      // Returns the updated product
      { new: true, runValidators: true }
    );
    response.status(204).end();
  } catch (error) {
    next(error);
  }
};

exports.productDelete = async (request, response, next) => {
  try {
    await request.product.remove();
    response.status(204).end();
  } catch (error) {
    next(error);
  }
};
