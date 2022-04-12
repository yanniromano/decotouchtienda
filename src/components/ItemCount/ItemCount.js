import './ItemCount.css'
import { useState, useEffect } from 'react'

const ItemCount = ({ initial, stock, onAdd }) => {
    const [count, setCount] = useState(0)


    useEffect(() => {
        console.log('cambio el count')
    }, [count])


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
                <button onClick={decrement} className="buttonDecrement">-</button>
                <p>{count}</p>
                <button onClick={increment} className="buttonIncrement">+</button>
            </div>
            <button onClick={() => onAdd(count)} className="addtocart"> Agregar al carrito</button>
        </div>
    )
}

export default ItemCount 