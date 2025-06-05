import React from 'react'
import AddForm from './../../components/product/AddForm';

function AddProductPage() {
  return (
    <div className='px-4 md:px-12 bg-gray-100 pb-8 text-black'>
        <h2 className='text-center font-semibold pt-8 text-xl md:text-2xl w-full max-w-xl mx-auto'>Adicionar novo produto</h2>

        {/** add form */}
        <AddForm/>
    </div>
  )
}

export default AddProductPage