const products = require("../../products");
const Product = require("../../db/models/Product");

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

exports.productUpdate = async (request, response) => {
  const { productId } = request.params;
  try {
    const product = await Product.findByIdAndUpdate(
      { _id: productId },
      request.body,
      // Returns the updated product
      { new: true, runValidators: true }
    );
    response.json(product);
  } catch (error) {
    return response.status(500).json({ message: error.message });
  }
};

exports.productDelete = async (request, response) => {
  const { productId } = request.params;

  try {
    const product = await Product.findById(productId);
    if (product) {
      await product.remove();
      return response.status(204).end();
    } else {
      return response.status(404).json({ message: "Product not found." });
    }
  } catch (error) {
    return response.status(500).json({ message: error.message });
  }
};
