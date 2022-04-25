import { useContext } from "react"
import './Cart.css'
import CartContext from "../../context/CartContext"

const Cart = () => {

    const { cart, removeItem } = useContext(CartContext)

    if (cart.length === 0) {
        return (
            <h1>No hay productos</h1>
        )
    }

    return (
        <div className="flex-container">
            <div className="flex-items">
                <h1>Cart</h1>
                <ul className="listado">
                    {
                        cart.map(prod => <li key={prod.id} >
                            <span className="nombreProd">{prod.name}</span>
                            <span className="color borderTable "> Cantidad: </span>  {prod.quantity}
                            <span className="color borderTable "> Precio uni:</span>  {prod.price}
                            <span className="color borderTable "> Subtotal: </span> {prod.quantity * prod.price}
                            <button className="remove" onClick={() => removeItem(prod.id)}>X</button></li>)
                    }
                </ul>
            </div>
        </div >
    )
}

export default Cart