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

    // validar Input
    if (!image || !name || !price || !link || !description) {
      return {
        error: "Preencha todos os campos",
      };
    }

    // Connect to database
    await connectDB();

    // processar imagem Cloudinary upload
    const arrayBuffer = await image.arrayBuffer();
    const buffer = new Uint8Array(arrayBuffer);

    let imageResponse: any;
    try {
      imageResponse = await new Promise((resolve, reject) => {
        cloudinary.uploader
          .upload_stream(
            {
              resource_type: "auto",
              folder: "m-acessorios",
            },
            async (error, result) => {
              if (error) {
                console.error("Cloudinary upload error:", error);
                return reject(new Error("Erro ao carregar imagem"));
              }
              return resolve(result);
            }
          )
          .end(buffer);
      });
    } catch (uploadError: any) {
      console.error("Error during image upload:", uploadError);
      return {
        error: "Erro ao carregar a imagem do produto. Tente novamente.",
      };
    }

    // Verificar se a imagem no cloud gerou url valido
    if (!imageResponse || !imageResponse.secure_url) {
      console.error(
        "Cloudinary did not return a valid secure_url for the image."
      );
      return {
        error: "Não foi possível obter o URL da imagem. Tente novamente.",
      };
    }

    // Verificar se o preco é valido
    const parsedPrice = parseFloat(price as string);
    if (isNaN(parsedPrice)) {
      return {
        error: "Preço inválido. Por favor, insira um número.",
      };
    }

    // Salvar produto no banco de dados
    await Produto.create({
      image: imageResponse.secure_url,
      name: name,
      price: parsedPrice,
      link: link,
      description: description,
    });

    return {
      success: "Produto adicionado com sucesso",
    };
  } catch (error: any) {
    // Catch any unexpected errors during the process
    console.error("An unexpected error occurred in addAction:", error); // Log the actual error for internal debugging
    return {
      error: "Alguma coisa deu errado ao adicionar o produto. Tente novamente.",
    };
  }
}
