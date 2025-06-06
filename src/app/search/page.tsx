"use client";

import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

interface Produto{
    _id: string;
    image: string;
    name: string;
    price: number;
}

const SearchPage = () => {
    const [produtos, setProdutos] = useState([]);
    const searchParams = useSearchParams();

    useEffect(() => {
        const searchTermFromUrl = searchParams.get("searchTerm");
        if(searchTermFromUrl) {
            axios.get(`/api/search?searchTerm=${searchTermFromUrl}`)
            .then((response) => setProdutos(response.data.produtos))
            .catch((error) => console.log("Erro ao buscar resultado da pesquisa: ", error))
        }
    }, [searchParams])

  return (
    <div id='produtos' className='px-4 md:px-12 py-5 md:py-10 flex justify-center items-center'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
            {produtos.map((produto: Produto, index) =>(
                <Link href={`/produto/${produto._id}`} key={index}>
                    <Image
                        src={produto.image}
                        alt=''
                        width={1000}
                        height={1000}
                        className='max-w-[17rem] h-72 object-cover object-center rounded-e-lg'
                    />
                    <div className='mt-4 text-black'>
                        <h2 className='font-semibold text-lg '>{produto.name}</h2>
                        <p className='font-medium text-sm mt-1'>{produto.price} Mzn</p>
                    </div>
                </Link>
            ))}
            {/* Optional: Display a message if no products are found */}
                {produtos.length === 0 && searchParams.get("searchTerm") && (
                    <p className="text-center text-gray-500 col-span-full">Nenhum produto encontrado para "{searchParams.get("searchTerm")}".</p>
                )}
                 {produtos.length === 0 && !searchParams.get("searchTerm") && (
                    <p className="text-center text-gray-500 col-span-full">Digite algo na barra de pesquisa para começar.</p>
                )}
        </div>
    </div>
  )
}

export default SearchPage
