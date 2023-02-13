import React, { useContext, useEffect, useState } from 'react'
import LoadingBar from '../LoadingBar/LoadingBar'
import Subtotal from './Subtotal'
import EchodotImg from '../../assets/images/products/product2.png'
import Quantity from './Quantity'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import CartContext from '../../context/CartContext'


function Cart() {

    // update quantity of item
    const handleChange = (data) => {
        console.log(data)
    }

    return (
        <div>
            <LoadingBar />

            {/* banner or ad here */}
            <div>
                {/* ad goes here */}
            </div>

            <div className='md:flex'>
                <div className='flex-1 m-2 overflow-hidden bg-white rounded-md'>
                    <div className='flex items-center justify-between px-4 '>
                        <h1 className='py-2 text-lg font-semibold'>Shopping Cart</h1>
                        <a href='#checkout' className='flex items-center px-2 bg-gray-300 rounded-md hover:bg-gray-400 md:hidden'>Checkout <span><ArrowRightIcon className='w-4 ml-1' /></span></a>
                    </div>
                    {/* cart products */}
                    <div className='w-full px-2'>
                        {/* single product */}
                        <div className='flex w-full px-2 py-4 space-x-2 overflow-hidden border-b border-b-gray-300 '>
                            <div className='flex items-center justify-center bg-gray-400 rounded-md'>
                                <img src={EchodotImg} className="max-h-[200px] min-w-[150px] cursor-pointer hover:scale-105 duration-500" />
                            </div>
                            <div>
                                <h1>Echo Dot (4th Gen, 2020 release)| Smart speaker with Alexa (Black)</h1>
                                <p className='text-xs font-semibold text-green-700'>In Stock</p>

                                {/* product specs */}
                                <div className='py-2'>
                                    <p className='text-sm font-semibold'>Color: <span className='font-normal'>White</span></p>
                                    <p className='text-sm font-semibold'>Assistant: <span className='font-normal'>Alexa</span></p>
                                </div>

                                <Quantity onChange={handleChange} />
                                <button className='px-2 bg-yellow-400 rounded-md'>Remove from Cart</button>
                            </div>
                        </div>

                    </div>
                </div>

                <Subtotal />
            </div>


        </div>
    )
}

export default Cart