import { createContext, useState } from "react";

const CartContext = createContext()
export default CartContext

export const CartProvider = ({ children }) => {

    const [cartItems, setCartItems] = useState()

    // add item in basket
    const addItem = (id, name) => {
        setCartItems({ ...cartItems, [id]: [id, name] })
        console.log("item added: ", cartItems[id])
    }

    const contextData = {
        addItem: addItem
    }

    return (
        <CartContext.Provider value={contextData} >
            {children}
        </CartContext.Provider>
    )
}