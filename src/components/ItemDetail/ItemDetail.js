import './ItemDetail.css'
import { useState, useContext } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import CartContext from '../../context/CartContext'
import { useNotification } from '../../notification/Notification'




const ItemDetail = ({ id, name, img, category, description, price, stock }) => {

    const { addItem, isInCart } = useContext(CartContext)

    const { setNotification } = useNotification()

    const handleAdd = (Count) => {
        const productObj = {
            id, name, price, quantity: Count
        }

        addItem(productObj)
        setNotification('error', `Se agregaron ${Count} ${name} correctamente`)
    }

    return (
        <div className="flexboxContainer">
            <div className="columnFotos">
                <div className="imageList">
                    <div className="imageItem"><img src={img} /></div>
                    <div className="imageItem"><img src={img} /></div>
                    <div className="imageItem"><img src={img} /></div>
                </div>
                <div className="productGallery">
                    <div className="productImage">
                        <img src={img} alt={name} className="imgPrincipal" />
                    </div>
                </div>
            </div>
            <div>
                <div className="columnDatos">
                    <h1>{name}</h1>
                    <h2>{price}</h2>
                    <div className="description">
                        <p>{description}</p>
                        <p className="bold">Stock disponible: {stock} Unidades</p>
                    </div>
                    {isInCart(id) ? <Link to='/Cart' className="addtocart">Ir al carrito</Link> : <ItemCount onAdd={handleAdd} stock={stock} />}
                    {/* <ItemCount /> */}
                </div>
            </div>

        </div >
    );
}

export default ItemDetail


