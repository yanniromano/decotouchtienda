import './CartWidget.css';
import { useContext } from 'react';
import CartContext from '../../context/CartContext';

const CartWidget = () => {

    const { getQuantity } = useContext(CartContext)

    return (
        < div className="CartImg"  >
            <img src='./images/cart.png' alt='Cart' />
            {getQuantity()}
        </div >
    )
}

export default CartWidget