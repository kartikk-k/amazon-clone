import { StarIcon } from '@heroicons/react/24/solid'
import React from 'react'

function Product({ title, price, imgUrl }) {


    return (
        <div className='bg-white space-y-2 w-full overflow-hidden rounded-md backdrop-blur-md bg-opacity-60 p-4 shadow-lg bottom-5'>
            <p className='text-black'>{title}</p>
            <p className='font-medium  text-black'>{price}</p>
            <div className='flex space-x-1'>
                <StarIcon className='w-5 fill-amazon' />
                <StarIcon className='w-5 fill-amazon' />
                <StarIcon className='w-5 fill-amazon' />
                <StarIcon className='w-5 fill-amazon' />
                <StarIcon className='w-5 fill-gray-400' />
            </div>
            <div className='rounded-md bg-gray-400 shadow-inner hover:rounded-none hover:scale-105 duration-500 cursor-pointer flex justify-center items-center'>
                <img src={imgUrl} alt={title} className="max-w-[200px]" />
            </div>
        </div>
    )
}

export default Product