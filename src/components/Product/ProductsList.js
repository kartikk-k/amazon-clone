import React from 'react'

function ProductsList(props) {
    return (
        // #1A98FF
        <div className='mb-4'>
            <h1 className='px-4 text-2xl font-medium'>Top Sellers🔥</h1>
            <div className='flex-row space-y-4 md:flex-nowrap md:space-y-0 md:flex md:p-4 p-2 md:space-x-4 md:justify-center items-center'>
                {props.children}
            </div>
        </div>
    )
}

export default ProductsList