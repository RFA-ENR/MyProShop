import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productRoute from "./routes/productRoute.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";
import cors from "cors";

dotenv.config();

connectDB().then();

const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  })
);

app.get("/", (req, res) => {
  res.send("API running...");
});

app.use("/api/products", productRoute);

app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(`Server runing in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
