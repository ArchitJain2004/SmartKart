import Product from '../models/product.js';

// GET /api/products
export const getProducts = async (req, res, next) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    next(error);
  }
};

// POST /api/products
export const createProduct = async (req, res, next) => {
  try {
    const { name, description, price, category, image, countInStock } = req.body;

    const product = new Product({
      name,
      description,
      price,
      category,
      image,
      countInStock
    });

    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
  } catch (error) {
    next(error);
  }
};
