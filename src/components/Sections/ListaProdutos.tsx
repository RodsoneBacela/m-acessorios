"use client";

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Image  from 'next/image';
import axios from 'axios';

interface Produto{
    _id: string;
    image: string;
    name: string;
    price: number;
}

const ListaProdutos = () => {

    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        axios.get("/api/fetch-product").then((response) => setProdutos(response.data.produtos))
    }, [])
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
        </div>
    </div>
  )
}

export default ListaProdutos