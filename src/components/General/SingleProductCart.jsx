import Image from 'next/image'
import React from 'react'

const SingleProductCart = ({product}) => {
  return (
    <div className='product-wrapper'>
        <div className='image-wrapper'>
            <Image src={product.image} width={400} height={400} alt={product.title} className='w-full h-auto'/>
        </div>
        <div className='content-wrapper text-center'>
            <h3 className='text-black font-medium text-xl md:text-3xl'>{product.title}</h3>
        </div>
    </div>
  )
}

export default SingleProductCart