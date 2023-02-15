import React, { useContext, useEffect, useState } from 'react'
import LoadingBar from '../components/LoadingBar/LoadingBar'
import Subtotal from '../components/Checkout/Subtotal'
import Quantity from '../components/Checkout/Quantity'
import { ArrowRightIcon, FaceFrownIcon } from '@heroicons/react/24/outline'
import CartContext from '../context/CartContext'


function Cart() {
    let { cartItems, removeItem } = useContext(CartContext)

    return (
        <div>
            <LoadingBar />

            {/* banner or ad here */}
            <div>
                {/* ad goes here */}
            </div>

            <div className='md:flex'>
                <div className='flex-1 m-2 overflow-hidden bg-white rounded-md shadow-md'>
                    <div className='flex items-center justify-between px-4 '>
                        <h1 className='py-2 text-lg font-semibold'>Shopping Cart</h1>
                        <a href='#checkout' className='flex items-center px-2 bg-gray-300 rounded-md hover:bg-gray-400 md:hidden'>Checkout <span><ArrowRightIcon className='w-4 ml-1' /></span></a>
                    </div>
                    {/* cart products */}
                    <div>
                        {/* single product */}
                        {cartItems.length !== 0 ? cartItems.map((product) => (
                            <div key={product.id} className='flex w-full px-2 py-4 space-x-2 overflow-hidden border-b border-b-gray-300 '>
                                <div className='flex items-center justify-center bg-gray-400 rounded-md'>
                                    <img src={product.imgUrl} className="max-h-[200px] min-w-[150px] cursor-pointer hover:scale-105 duration-500" />
                                </div>
                                <div>
                                    <h1>{product.name}</h1>
                                    <p className='text-xs font-semibold text-green-700'>In Stock</p>

                                    {/* product specs */}
                                    <div className='py-2'>
                                        <p className='text-sm font-semibold'>Color: <span className='font-normal'>White</span></p>
                                        <p className='text-sm font-semibold'>Assistant: <span className='font-normal'>Alexa</span></p>
                                    </div>

                                    <Quantity id={product.id} quantity={product.quantity} />
                                    <button onClick={() => removeItem(product)} className='px-2 bg-yellow-400 rounded-md'>Remove from Cart</button>
                                </div>
                            </div>
                        )) :
                            <p className='flex items-center px-4 pb-2'><span><FaceFrownIcon className='w-6 mr-1' /></span> No Items in Cart</p>}

                    </div>
                </div>

                <Subtotal />
            </div>


        </div>
    )
}

export default Cart