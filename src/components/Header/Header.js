import React from 'react'
import AmazonLogo from 'C:/Users/user/Desktop/Big Projects/amazon-clone/amazon/src/assets/logo.svg'
import { ChevronDownIcon, MagnifyingGlassIcon, MapPinIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'
import { ReactComponent as CartIcon } from './Cart.svg'

function Header() {
    return (
        <div className='bg-dark-1 sticky top-0 px-2 py-4 flex space-x-4 items-center'>

            {/* amazon logo */}
            <div>
                <img src={AmazonLogo} className='h-6' alt="amazon" />
            </div>

            {/* header options */}
            <div className='flex space-x-4 items-center w-full'>
                {/* location */}
                <div className='flex items-end'>
                    <MapPinIcon className='h-5 w-5' />
                    <div>
                        <p className='text-xs text-gray-300'>Deliver to</p>
                        <p className='text-xs font-semibold'>Select your address</p>
                    </div>
                </div>

                {/* searchbar */}
                <div className='flex flex-1 group-hover:border-amazon group-hover:border rounded-sm overflow-hidden'>
                    {/* categories */}
                    <div className='px-2 bg-gray-700 flex space-x-1 items-center'>
                        <p className='text-sm'>All</p>
                        <ChevronDownIcon className='h-4' />
                    </div>

                    {/* search input */}
                    <div className='flex-1'>
                        <input type="text" className='group w-full text-black outline-none p-1' />
                    </div>

                    {/* search logo */}
                    <div className='bg-amazon px-2 flex justify-center items-center'>
                        <MagnifyingGlassIcon className='w-5' />
                    </div>
                </div>

                {/* sign in */}
                <div>
                    <p className='text-xs text-gray-300'>Hello, sign in</p>
                    <p className='text-xs font-semibold flex items-center'>Accounts & Lists <span><ChevronDownIcon className='h-4 pl-2' /></span></p>
                </div>

                {/* orders */}
                <div>
                    <p className='text-xs text-gray-300'>Returns</p>
                    <p className='text-xs font-semibold'>& Orders</p>
                </div>

                {/* cart */}
                <div className='flex items-end space-x-1'>
                    <div className='relative'>
                        <CartIcon />
                        <p className='absolute bottom-4 text-xs font-semibold left-[40%] text-amazon'>12</p>
                    </div>
                    <p className='text-xs font-semibold'>Cart</p>
                </div>
            </div>

        </div>
    )
}

export default Header