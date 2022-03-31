import './ItemCount.css';
import { useState, useEffect } from 'react'


const ItemCount = ({ initial, stock, onAdd }) => {
    const [count, setCount] = useState(0)


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



    return (
        <div className="contenedorCount">
            <button onClick={decrement} className="buttonDecrement">-</button>
            <p>{count}</p>
            <button onClick={increment} className="buttonIncrement">+</button>
        </div>
    )
}

export default ItemCount