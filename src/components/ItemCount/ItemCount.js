import './ItemCount.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'


const ButtonCount = ({ onConfirm, stock, initial = 0 }) => {
    const [count, setCount] = useState(initial)
    const decrement = () => {
        if (count > 0) {
            setCount(count => count - 1);
        }
    }
    const increment = () => {
        if (count < 20) {
            setCount(count => count + 1);
        }
    }
    console.log('Esto esta en el cuerpo del componente')

    return (
        <div className="contenedorCount">
            <div className="flexconteiner">
                <button className="buttonDecrement" onClick={decrement}>-</button>
                <p>{count}</p>
                <button className="buttonIncrement" onClick={increment}>+</button>
            </div>
            <button className="addtocart" onClick={() => onConfirm(count)}>Agregar al carrito</button>
        </div>
    )
}
const ItemCount = ({ id, name, img, category, description, price, stock }) => {
    const [quantity, setQuantity] = useState(0)
    const handleAdd = (count) => {
        console.log('Agregar al carrito')
        setQuantity(count)
    }
    const Count = ButtonCount
    return (
        <div className="flexconteiner">
            {quantity > 0 ? <Link to='/cart' className="addtocart">Ir al carrito</Link> : <Count onConfirm={handleAdd} stock={stock} />}
        </div>
    );
}
export default ItemCount