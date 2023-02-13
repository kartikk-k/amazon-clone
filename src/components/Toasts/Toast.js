import { CheckCircleIcon, XMarkIcon } from '@heroicons/react/24/solid'
import React, { useEffect, useState } from 'react'

function Toast() {
    const [isActive, setIsActive] = useState()
    useEffect(() => {
        setIsActive(true)
        // setTimeout(() => {
        //     setIsActive(false)
        // }, 2000)
    }, [])

    const ToastItem = () => {
        if (isActive) {
            return (
                <div className='absolute overflow-hidden bg-green-600 border border-green-600 rounded-md bg-opacity-10 bottom-3 right-4'>
                    <div className='flex items-center px-2 py-4 space-x-4'>
                        <div className='relative flex space-x-2'>
                            <CheckCircleIcon className='w-5 fill-green-600' />
                            <p className='text-green-600'>Item added to cart!</p>
                        </div>
                        <XMarkIcon className='w-5 cursor-pointer' onClick={() => setIsActive(false)} />
                    </div>
                    <div className={`absolute bottom-0 left-0 ${isActive ? 'w-full' : "w-0"} duration-1000 h-1 bg-green-600`}></div>
                </div>
            )
        }
    }
    return (
        <ToastItem />
    )
}

export default Toast