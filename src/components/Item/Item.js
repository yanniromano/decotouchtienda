import './Item.css'


const Item = ({ name, img, description }) => {
    return (
        <div className="contenedor">
            <ul>
                <li className="card">
                    <a ><img src={img} alt={name} className="card-image" />
                    </a>
                    <a className="card-description">  <h2 >{name}</h2>
                        <p className="card-description">{description}</p></a>
                    <button className="bubbly-button">Ver Detalle</button>
                </li>
            </ul>

        </div >
    )
}

export default Item