import Product from "../models/Product.js";

// CREATE PRODUCT (One-time use from Postman)
export const createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();

    res.json({
      message: "Product created successfully",
      product,
    });
  } catch (err) {
    res.status(500).json({ message: "Error creating product", error: err.message });
  }
};

// GET ALL PRODUCTS
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch {
    res.status(500).json({ message: "Unable to fetch products" });
  }
};

// GET SINGLE PRODUCT
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) return res.status(404).json({ message: "Product not found" });

    res.json(product);
  } catch {
    res.status(500).json({ message: "Unable to fetch product" });
  }
};
