import Product from "../models/productModel.js";
import expressAsyncHandler from "express-async-handler";

// @desc Fetch all products
// @route Get/api/product
// @access public

const getProducts = expressAsyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

// @desc Fetch single product
// @route Get/api/product/:id
// @access Public

const getProductById = expressAsyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Product no found");
  }
});

export { getProducts, getProductById};
