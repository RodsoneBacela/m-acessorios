import Link from 'next/link'
import React from 'react'
import Image  from 'next/image';

const ListaProdutos = () => {

    const produtos =[
        "","","", ""
    ]
  return (
    <div id='produtos' className='px-4 md:px-12 py-5 md:py-10 flex justify-center items-center'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
            {produtos.map((produto, index) =>(
                <Link href={"/produto/123"} key={index}>
                    <Image
                        src={"/images/n-leather.jpg"}
                        alt=''
                        width={1000}
                        height={1000}
                        className='max-w-[17rem] h-72 object-cover object-center rounded-e-lg'
                    />
                    <div className='mt-4 text-black'>
                        <h2 className='font-semibold text-lg '>Jaqueta de Couro</h2>
                        <p className='font-medium text-sm mt-1'>3500 Mzn</p>
                    </div>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default ListaProdutos