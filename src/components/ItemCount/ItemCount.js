import { useState } from 'react'
import './ItemCount.css'

const ItemCount = ({ stock = 0, initial = 1, onAdd }) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    const decrement = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1)
        }
    }

    if (stock === 0) {
        return <button className='Option' disabled>No hay stock</button>
    }

    return (
        <div className="contenedorCount">
            <div className="flexconteiner">
                <button onClick={decrement} className="buttonDecrement">-</button>
                <p>{quantity}</p>
                <button onClick={increment} className="buttonIncrement">+</button>
            </div>

            <button onClick={() => onAdd((quantity))} className="addtocart">Agregar al carrito</button>
        </div>
    )
}
export default ItemCount
