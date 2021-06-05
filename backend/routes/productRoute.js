import express from "express";
import { getProductById, getProducts } from "../controllers/productControllers.js";


const router = express.Router();
// @desc Fetch all products
// @route Get/api/product
// @access public
router.route("/").get(getProducts);

// @desc Fetch single product
// @route Get/api/product/:id
// @access Public
router.route("/:id").get(getProductById);

export default router;
