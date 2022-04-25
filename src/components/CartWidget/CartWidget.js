import './CartWidget.css';
import { useContext } from 'react';
import CartContext from '../../context/CartContext';
import { Link } from 'react-router-dom';


const CartWidget = () => {

    const { getQuantity } = useContext(CartContext)

    return (
        < div className="CartImg"  >

            <Link to='/Cart' >
                <img src="/images/cart.png" alt='cart' />
                {getQuantity()}
            </Link>

        </div >
    )
}

export default CartWidget