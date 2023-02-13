import { CheckCircleIcon } from '@heroicons/react/24/solid'
import React from 'react'
import CurrencyFormat from 'react'

function Subtotal() {
    return (
        <div>
            <div id='checkout' className='m-2 bg-white rounded-md shadow-md min-w-[250px] overflow-hidden'>
                <div>
                    <h1 className='p-2 text-center text-white bg-gray-500'>Checkout</h1>
                </div>
                <div className='p-2 space-y-2'>
                    <div className='flex items-center mb-2 space-x-2'>
                        <CheckCircleIcon className='h-5 fill-green-500' />
                        <p className='text-xs'>Your order is eligible for free delivery</p>
                    </div>
                    <div className='flex justify-between'>
                        <h1 className='font-semibold'>Items:</h1>
                        <p>2</p>
                    </div>
                    <div className='flex justify-between'>
                        <h1 className='font-semibold'>Subtotal:</h1>
                        <p>₹4,499</p>
                    </div>

                    <button className='w-full p-1 text-center bg-yellow-400 rounded-md hover:bg-yellow-500'>Proceed to Buy</button>
                </div>
            </div>
        </div>
    )
}

export default Subtotal