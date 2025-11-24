import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./src/config/db.js";
import authRoutes from "./src/routes/authRoutes.js";
import productRoutes from "./src/routes/productRoutes.js";

dotenv.config();
connectDB();

const app = express();

// middlewares
app.use(cors());
app.use(express.json());


app.use("/images", express.static("public/images"));
app.use("/uploads", express.static("uploads"));


// test route
app.get("/", (req, res) => {
  res.send("Backend Running Successfully");
});

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);

// port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
