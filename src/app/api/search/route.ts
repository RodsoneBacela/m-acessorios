import { NextRequest } from "next/server";
import { connectDB } from "../db/connectDB";
import Produto from "../models/produto.model";

export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const searchParams = request.nextUrl.searchParams;

    const searchTerm = searchParams.get("searchTerm");

    const produtos = await Produto.find({
      name: { $regex: searchTerm, $options: "i" }, //option i remove o case sensitive tanto em letra maisculo como minuscula
    }).sort({ createdAt: -1 });

    return Response.json({ produtos }, { status: 200 });
  } catch (error: any) {
    return Response.json({ message: error.message }, { status: 400 });
  }
}
