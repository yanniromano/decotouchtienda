import './Item.css'
import { Link } from 'react-router-dom'



const Item = ({ id, name, img, price }) => {

    const handleClick = (e) => {
        e.stopPropagation()
        console.log('Hice click en item')
    }


    return (
        <div className="contenedor">
            <ul>
                <li className="card">
                    <a ><img src={img} alt={name} className="card-image" />
                    </a>
                    <a className="card-description">  <h2 >{name}</h2>
                        <h2 className="card-description">{price}</h2></a>
                    <Link to={`/detail/${id}`} className='bubbly-button'>Ver detalle</Link>

                </li>
            </ul>
        </div>


    )
}

export default Item
