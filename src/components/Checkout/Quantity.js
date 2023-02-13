import { MinusCircleIcon, PlusCircleIcon } from '@heroicons/react/24/solid'
import React, { useState } from 'react'

function Quantity(props) {
    const [count, setCount] = useState(1)

    const increaseCount = () => {
        setCount(count + 1)
        props.onChange(count)
    }

    const decreaseCount = () => {
        if (count === 1) return
        setCount(count - 1)
        props.onChange(count)
    }

    return (
        <div className='flex pb-2 space-x-2'>
            <MinusCircleIcon onClick={decreaseCount} className='w-6 fill-gray-600 hover:fill-gray-700' />
            <p className='select-none'>{count}</p>
            <PlusCircleIcon onClick={increaseCount} className='w-6 fill-gray-600 hover:fill-gray-700' />
        </div>
    )
}

export default Quantity