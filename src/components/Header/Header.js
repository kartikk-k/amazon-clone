import React, { useState } from 'react'
import '../../App.css'
import AmazonLogo from '../../assets/logo.svg'
import { Bars3BottomRightIcon, ChevronDownIcon, MagnifyingGlassIcon, MapPinIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { ReactComponent as CartIcon } from '../../assets/icons/Cart.svg'
import { Link } from 'react-router-dom'

function Header() {
    const [isOpen, setIsOpen] = useState()

    return (
        <div className='sticky top-0 z-10 flex items-center justify-between px-2 py-4 space-x-4 bg-dark-1 header-main'>

            {/* amazon logo */}
            <div>
                <Link to="/">
                    <img src={AmazonLogo} className='h-6' alt="amazon" />
                </Link>
            </div>

            {/* for mobile view */}
            <Bars3BottomRightIcon onClick={() => setIsOpen(!isOpen)} className={`h-6 ${isOpen ? 'hidden' : 'visible'} md:hidden stroke-white z-10`} />

            {/* header options */}
            <XMarkIcon onClick={() => setIsOpen(!isOpen)} className={`h-6 ${!isOpen ? 'hidden' : 'visible'} md:hidden stroke-white z-10`} />
            <div className={`${isOpen ? "flex-row" : "hidden"} absolute top-0 right-0 bg-dark-1 p-2 h-screen md:h-auto md:static md:mt-0 md:p-0 w-[70%] space-y-4 md:space-y-0 mt-4 md:flex space-x-4 items-center md:w-full`}>
                {/* location */}
                <div className='flex items-end'>
                    <MapPinIcon className='w-5 h-5' />
                    <div>
                        <p className='text-xs text-gray-300'>Deliver to</p>
                        <p className='text-xs font-semibold'>Select your address</p>
                    </div>
                </div>

                {/* searchbar */}
                <div className='flex flex-1 overflow-hidden rounded-sm group-hover:border-amazon group-hover:border'>
                    {/* categories */}
                    <div className='flex items-center px-2 space-x-1 bg-gray-700'>
                        <p className='text-sm'>All</p>
                        <ChevronDownIcon className='h-4' />
                    </div>

                    {/* search input */}
                    <div className='flex-1'>
                        <input type="text" className='w-full p-1 text-black outline-none group' />
                    </div>

                    {/* search logo */}
                    <div className='flex items-center justify-center px-2 bg-amazon'>
                        <MagnifyingGlassIcon className='w-5' />
                    </div>
                </div>

                {/* sign in */}
                <div>
                    <p className='text-xs text-gray-300'>Hello, sign in</p>
                    <p className='flex items-center text-xs font-semibold'>Accounts & Lists <span><ChevronDownIcon className='h-4 pl-2' /></span></p>
                </div>

                {/* orders */}
                <div>
                    <p className='text-xs text-gray-300'>Returns</p>
                    <p className='text-xs font-semibold'>& Orders</p>
                </div>

                {/* cart */}
                <Link to="/checkout">
                    <div className='flex items-end space-x-1'>
                        <div className='relative'>
                            <CartIcon />
                            <p className='absolute bottom-4 text-xs font-semibold left-[40%] text-amazon'>12</p>
                        </div>
                        <p className='text-xs font-semibold'>Cart</p>
                    </div>
                </Link>
            </div>

        </div>
    )
}

export default Header