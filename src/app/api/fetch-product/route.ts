import { connectDB } from "../db/connectDB";
import Produto from "./../models/produto.model";

export async function GET(request: Request) {
  await connectDB();

  try {
    const produtos = await Produto.find({}).sort({ createdAt: -1 });

    return Response.json({ produtos }, { status: 200 });
  } catch (error: any) {
    console.log("Erro ao buscar produtos");

    return Response.json({ message: error.message }, { status: 400 });
  }
}
