import React from 'react'
import { useState, useEffect } from 'react'

function LoadingBar() {
    const [active, setActive] = useState()
    useEffect(() => {
        setActive(true)

        setTimeout(() => {
            setActive(false)
        }, 200)
    }, [])
    return (
        <div className={`absolute top-0 left-0 z-20 ${active ? "w-full" : "w-0"} duration-200 h-1 bg-amazon`}></div>
    )
}

export default LoadingBar