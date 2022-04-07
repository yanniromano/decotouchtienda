import './ItemDetail.css'

const ItemDetail = ({ id, name, img, price, category, description, stock }) => {

    return (
        <div className="contenedor">
            <ul>
                <li className="card">
                    <a ><img src={img} alt={name} className="card-image" />
                    </a>
                    <a className="card-description">  <h2 >{id} {name}</h2>
                        <p className="card-description">{description}</p>
                        <p className="card-description">{price}</p>
                        <p className="card-description">{category}</p>
                        <p className="card-description">{stock}</p>

                    </a>
                    <button className="bubbly-button">Ver Detalle</button>
                </li>
            </ul>

        </div >


    )
}

export default ItemDetail