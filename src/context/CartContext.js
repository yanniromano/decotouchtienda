import { createContext, useState } from "react";

const CartContext = createContext()

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    console.log(cart)

    const addItem = (productToAdd) => {
        setCart([...cart, productToAdd])
    }

    const getQuantity = () => {
        let ItemCount = 0
        cart.forEach(prod => {
            ItemCount += prod.quantity
        })

        return ItemCount
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const clearCart = () => {
        setCart([])
    }

    const removeItem = (id) => {
        const products = cart.filter(prod => prod.id !== id)
        setCart(products)
    }



    return (
        <CartContext.Provider value={{
            cart,
            addItem,
            getQuantity,
            isInCart,
            clearCart,
            removeItem,
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext