import { createContext, useEffect, useState } from "react";

const CartContext = createContext()
export default CartContext

export const CartProvider = ({ children }) => {

    const [cartItems, setCartItems] = useState([])
    const [cartTotal, setCartTotal] = useState(0)

    // add product in cart, can also increase quantity if item added multiple time 
    const addItem = (productData) => {

        // checking index of product if present in list of products
        let index = cartItems.findIndex((item) => item.id === productData.id)

        // increasing quantity if product is already present in cart
        if (index != -1) {
            let updatedItem = { ...cartItems[index], quantity: cartItems[index].quantity + 1 }
            let updatedCartItems = [...cartItems]
            updatedCartItems[index] = updatedItem

            setCartItems(updatedCartItems)

            return
        }

        // adding product if not present in cart
        setCartItems(cartItems => cartItems.concat(productData))
    }

    // remove product from cart
    const removeItem = (product) => {
        // finding index of product
        let index = cartItems.findIndex((item) => (item.id, console.log("itemid", item.id)) === product.Id)

        if (index === -1) return

        // filtering and storing values in new variable
        let updatedCartItems = cartItems.filter((item) => item.id != product.id)

        // updating state of cart items
        setCartItems(updatedCartItems)

    }

    // increase quantity of product
    const increaseQuantity = (productId) => {
        // checking index of product if present in list of products
        let index = cartItems.findIndex((item) => item.id === productId)

        // increasing quantity if product is already present in cart
        if (index != -1) {
            let updatedItem = { ...cartItems[index], quantity: cartItems[index].quantity + 1 }
            let updatedCartItems = [...cartItems]
            updatedCartItems[index] = updatedItem

            setCartItems(updatedCartItems)
        }
    }

    // decrese quantity of product
    const decreaseQuantity = (productId) => {

        // checking index of product if present in list of products
        let index = cartItems.findIndex((item) => item.id === productId)

        // increasing quantity if product is already present in cart
        if (index != -1) {
            // to avoid unexpected behaviour
            if (cartItems[index].quantity === 1) return

            let updatedItem = { ...cartItems[index], quantity: cartItems[index].quantity - 1 }
            let updatedCartItems = [...cartItems]
            updatedCartItems[index] = updatedItem

            setCartItems(updatedCartItems)
        }
    }

    // calculating total of cart everytime cart items changes
    useEffect(() => {
        calculateCartTotal()
    }, [cartItems])

    // calculate cost of all cart
    const calculateCartTotal = () => {
        let total = 0
        cartItems.map((product) => {
            total = total + (product.price * product.quantity)
        })

        setCartTotal(total)
    }


    const contextData = {
        cartItems: cartItems,
        itemsCount: cartItems.length,
        addItem: addItem,
        removeItem: removeItem,
        cartTotal: cartTotal,
        increaseQuantity: increaseQuantity,
        decreaseQuantity: decreaseQuantity,
    }

    return (
        <CartContext.Provider value={contextData} >
            {children}
        </CartContext.Provider>
    )
}