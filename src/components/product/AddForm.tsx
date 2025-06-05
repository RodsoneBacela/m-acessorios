import React from 'react'

const AddForm  = () => {

    async function create() {
    'use server'
    // Mutate data
  }

  return (
    <form action={create} className='w-full max-w-xl mx-auto flex flex-col justify-center items-center space-y-4 mt-3 md:mt-5'>
        <div className='flex flex-col w-full'>
            <label htmlFor=""> Imagem do produto:</label>
            <input 
                type="file" 
                accept='image/*' 
                name='image' 
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
        <button className='w-full bg-neutral-700 text-white px-3 py-2 rounded-md cursor-pointer'>
            Adicionar produto
        </button>
    </form>
  )
}

export default  AddForm