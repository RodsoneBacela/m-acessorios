"use client";

import React, { ChangeEvent, useState } from 'react'
import { addAction } from '../../utils/addAction'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import Image from 'next/image';

const AddForm  = () => {
    const router = useRouter()
    const [imageUrl, setImageUrl] = useState("");
    async function clientAddAction(FormData: FormData) {
        const {error, success} = await addAction(FormData)

        if(error){
            //toast notification
            toast.error(error)
        }
        if(success){
            toast.success(success)

            

            setImageUrl("");
        }
  }
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) =>{
    const file = e.target.files?.[0];
    if(file){
        const fileSize = file.size;

        if(Math.round(fileSize /1024) > 3072){
            toast.error("Image com mais de 1mb não é permitida");
        } else {
            setImageUrl(URL.createObjectURL(file));
        }
    }
  }
  return (
    <form action={clientAddAction} className='w-full max-w-xl mx-auto flex flex-col justify-center items-center space-y-4 mt-3 md:mt-5'>
        {imageUrl && (
            <Image 
                src={imageUrl}
                alt="img"
                width={1000}
                height={1000}
                className='max-w-full nax-h-72 object-cover object-center rounded-lg'
            />
            )}
        <div className='flex flex-col w-full'>
            <label htmlFor=""> Imagem do produto:</label>
            <input 
                type="file" 
                accept='image/*' 
                name='image' 
                onChange={handleImageChange}
                className='w-full px-3 py-1.5 md:py-2 text-neutral-800 rounded-lg bg-white border-1 border-gray-500'/>
        </div>
        <div className='flex flex-col w-full'>
            <label htmlFor=""> Nome:</label>
            <input 
                type="text"  
                name='name' 
                placeholder='nome do produto'
                className='w-full px-3 py-1.5 md:py-2 text-neutral-800 rounded-lg bg-white border-gray-500 border-1'
                />
        </div>
        <div className='flex flex-col w-full'>
            <label htmlFor=""> Preco:</label>
            <input 
                type="number"  
                name='price' 
                placeholder='preco'
                className='w-full px-3 py-1.5 md:py-2 text-neutral-800 rounded-lg bg-white border-gray-500 border-1'
                />
        </div>
        <div className='flex flex-col w-full'>
            <label htmlFor=""> Link do vendedor:</label>
            <input 
                type="text"  
                name='link' 
                placeholder='link para cliente te encontrar'
                className='w-full px-3 py-1.5 md:py-2 text-neutral-800 rounded-lg bg-white border-gray-500 border-1'
                />
        </div>
        <div className='flex flex-col w-full'>
            <label htmlFor=""> Decricao:</label>
            <textarea 
                name="description"  
                placeholder='descricao do produto' 
                rows={4}
                className='w-full px-3 py-1.5 md:py-2 text-neutral-800 rounded-lg bg-white border-gray-500 border-1'
                ></textarea>
        </div>
        <button type='submit' className='w-full bg-neutral-700 text-white px-3 py-2 rounded-md cursor-pointer'>
            Adicionar produto
        </button>
    </form>
  )
}

export default  AddForm