import { Schema, model } from "mongoose";

const productSchema = new Schema({
  code: { type: String, required: true, unique: true },
  brand: { type: String, required: true },
  model: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  buy: { type: Number, required: true },
  sale: { type: Number, required: true },
  picture: { type: String },
  stock: { type: Number, default: 0 },
});

export default model("product", productSchema);
