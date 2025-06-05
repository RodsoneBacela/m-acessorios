"use server";

import { connectDB } from "@/app/api/db/connectDB";
import cloudinary from "./cloudinary";
import Produto from "@/app/api/models/produto.model";

export async function addAction(FormData: FormData) {
  try {
    const image = FormData.get("image") as File;
    const name = FormData.get("name");
    const price = FormData.get("price");
    const link = FormData.get("link");
    const description = FormData.get("description");

    if (!image || !name || !price || !link || !description) {
      console.log("preencha todos os campos");

      return {
        error: "preencha todos os campos",
      };
    }

    await connectDB();

    //processamento de imagem
    const arrayBuffer = await image.arrayBuffer();
    const buffer = new Uint8Array(arrayBuffer);
    const imageResponse: any = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          {
            resource_type: "auto",
            folder: "m-acessorios",
          },
          async (error, result) => {
            if (error) {
              return reject(error.message);
            }
            return resolve(result);
          }
        )
        .end(buffer);

      console.log("Image response: ", imageResponse);
    });

    await Produto.create({
      image: imageResponse.secure_url,
      name,
      price,
      link,
      description,
    });
    return {
      success: "Produto adicionado com sucesso",
    };
  } catch (error) {
    return {
      error: "Alguma coisa deu errado",
    };
  }
}
