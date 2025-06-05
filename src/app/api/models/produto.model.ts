import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    image: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    link: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

const Produto =
  mongoose.models.Produto || mongoose.model("Produto", productSchema);

export default Produto;
