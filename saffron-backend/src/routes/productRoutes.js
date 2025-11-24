import express from "express";
import {
  createProduct,
  getAllProducts,
  getProductById,
} from "../controllers/ProductController.js";

const router = express.Router();

router.post("/create", createProduct);
router.get("/all-products", getAllProducts);
router.get("/:id", getProductById);

export default router;
