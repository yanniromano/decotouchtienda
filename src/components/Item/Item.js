import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({ id, name, img, price, description }) => {

    return (
        <div className="contenedor">
            <ul>
                <li className="card">
                    <a ><img src={img} alt={name} className="card-image" />
                    </a>
                    <a className="card-description">  <h2 >{name}</h2>
                        <p className="card-description">{description}</p>
                        <p className="card-description">{price}</p></a>
                    <Link to={`/detail/${id}`} className='bubbly-button'>Ver detalle</Link>

                </li>
            </ul>
        </div>


    )
}

export default Item
