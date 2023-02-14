import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { useContext } from 'react'
import CartContext from '../../context/CartContext'

function Subtotal() {
    let { itemsCount, cartTotal } = useContext(CartContext)

    return (
        <div>
            <div id='checkout' className='m-2 bg-white rounded-md shadow-md md:w-[270px] overflow-hidden'>
                <div>
                    <h1 className='p-2 text-center text-white bg-gray-500'>Checkout</h1>
                </div>
                <div className='p-2 space-y-2'>
                    <div className=''>
                        {cartTotal > 4999 ? (
                            <div className='flex items-center mb-2 space-x-2'>
                                <CheckCircleIcon className='h-5 fill-green-500' />
                                <p className='text-xs text-green-700'>Your order is eligible for free delivery</p>
                            </div>
                        ) : (
                            <div className='flex items-center mb-2 space-x-2'>
                                <XCircleIcon className='h-5 fill-red-500' />
                                <p className='text-xs text-red-700'>Orders above ₹4999 are eligible for free delivery</p>
                            </div>
                        )}

                    </div>
                    <div className='flex justify-between'>
                        <h1 className='font-semibold'>Items:</h1>
                        <p>{itemsCount}</p>
                    </div>
                    <div className='flex justify-between'>
                        <h1 className='font-semibold'>Subtotal:</h1>
                        <p>₹{cartTotal}</p>
                    </div>

                    <button disabled={itemsCount === 0} className='w-full p-1 text-center bg-yellow-400 rounded-md disabled:bg-yellow-300 hover:bg-yellow-500'>Proceed to Buy</button>
                </div>
            </div>
        </div>
    )
}

export default Subtotal