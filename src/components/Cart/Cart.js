import { useContext, useState } from "react"
import './Cart.css'
import CartItem from '../CartItem/CartItem'
import CartContext from "../../context/CartContext"
import { getDocs, writeBatch, query, where, collection, documentId, addDoc } from 'firebase/firestore'
import { firestoreDb } from '../../services/index'
import Form from '../Form/Form'

const Cart = () => {
    const [loading, setLoading] = useState(false)

    const { cart, clearCart, getTotal, getQuantity, removeItem } = useContext(CartContext)



    const createOrder = () => {
        setLoading(true)

        const objOrder = {
            items: cart,
            buyer: {
                name: 'Decotouch',
                phone: '123456789',
                email: 'info@decotouch.com'
            },
            total: getTotal(),
            date: new Date()
        }

        const ids = cart.map(prod => prod.id)
        const batch = writeBatch(firestoreDb)
        const collectionRef = collection(firestoreDb, 'products')
        const outOfStock = []

        getDocs(query(collectionRef, where(documentId(), 'in', ids)))
            .then(response => {
                response.docs.forEach(doc => {
                    const dataDoc = doc.data()
                    const prodQuantity = cart.find(prod => prod.id === doc.id)?.quantity

                    if (dataDoc.stock >= prodQuantity) {
                        batch.update(doc.ref, { stock: dataDoc.stock - prodQuantity })
                    } else {
                        outOfStock.push({ id: doc.id, ...dataDoc })
                    }
                })
            }).then(() => {
                if (outOfStock.length === 0) {
                    const collectionRef = collection(firestoreDb, 'orders')
                    return addDoc(collectionRef, objOrder)
                } else {
                    return Promise.reject({ name: 'outOfStockError', products: outOfStock })
                }
            }).then(({ id }) => {
                batch.commit()
                console.log(`El id de la orden es ${id}`)
            }).catch(error => {
                console.log(error)
            }).finally(() => {
                setLoading(false)
            })
    }

    if (loading) {
        return <h1>Se esta generando su orden</h1>
    }

    if (getQuantity() === 0) {
        return (
            <h1>No hay items en el carrito</h1>
        )
    }

    return (
        <div>
            <div className="flex-container">
                <div className="flex-items">
                    <h1>Cart</h1>
                    <ul className="listado">
                        {
                            cart.map(prod => <li key={prod.id} >
                                <span className="nombreProd">{prod.name}</span>
                                <span className="color borderTable "> Cantidad: </span>  {prod.quantity}
                                <span className="color borderTable "> Precio uni: </span> $ {prod.price}
                                <span className="color borderTable "> Subtotal: </span> $ {prod.quantity * prod.price}
                                <button className="remove" onClick={() => removeItem(prod.id)}>X</button></li>)
                        }
                        <h3 className="textTotal">Total: ${getTotal()}</h3>
                        <span>
                            <button onClick={() => clearCart()} className="ButtonFn">Limpiar carrito</button>
                            <button onClick={() => createOrder()} className="ButtonFn">Generar Orden</button>
                        </span>
                        <Form />
                    </ul>

                </div>
            </div >
        </div >
    )
}

export default Cart