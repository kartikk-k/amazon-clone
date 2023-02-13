import React, { useContext } from 'react'
// import CartContext from '..'
import { PlusCircleIcon, StarIcon } from '@heroicons/react/24/solid'

function Product({ title, price, imgUrl }) {
    // let { addItem } = useContext(CartContext)

    const addToCart = () => {

    }

    return (
        <div className='w-full p-4 space-y-2 overflow-hidden bg-white rounded-md shadow-lg backdrop-blur-md bg-opacity-60 bottom-5'>
            {/* add to cart button */}
            <PlusCircleIcon className='absolute w-10 cursor-pointer top-2 fill-amazon hover:brightness-110 right-2' />

            <p className='text-black'>{title}</p>
            <p className='font-medium text-black'>{price}</p>
            <div className='flex space-x-1'>
                <StarIcon className='w-5 fill-amazon' />
                <StarIcon className='w-5 fill-amazon' />
                <StarIcon className='w-5 fill-amazon' />
                <StarIcon className='w-5 fill-amazon' />
                <StarIcon className='w-5 fill-gray-400' />
            </div>
            <div className='flex items-center justify-center duration-500 bg-gray-400 rounded-md shadow-inner cursor-pointer hover:rounded-none hover:scale-105'>
                <img src={imgUrl} alt={title} className="max-w-[200px]" />
            </div>
        </div>
    )
}

export default Product