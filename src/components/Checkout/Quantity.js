import { MinusCircleIcon, PlusCircleIcon } from '@heroicons/react/24/solid'
import React, { useContext, useState } from 'react'
import CartContext from '../../context/CartContext'

function Quantity({ id, quantity }) {
    let { increaseQuantity, decreaseQuantity } = useContext(CartContext)


    return (
        <div className='flex pb-2 space-x-2'>
            <button disabled={quantity <= 1} className="disabled:opacity-60">
                <MinusCircleIcon onClick={() => decreaseQuantity(id)} className='w-6 fill-gray-600 hover:fill-gray-700' />
            </button>
            <p className='select-none'>{quantity}</p>
            <PlusCircleIcon onClick={() => increaseQuantity(id)} className='w-6 fill-gray-600 hover:fill-gray-700' />
        </div>
    )
}

export default Quantity