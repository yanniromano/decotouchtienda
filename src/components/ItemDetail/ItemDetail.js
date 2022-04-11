import './ItemDetail.css'

const ItemDetail = ({ id, name, img, price, category, description, stock }) => {

    return (

        < div className="container" >
            <div class="gridProduct">
                <div className="columnFotos">
                    <div className="productGallery">
                        <div className="productImage">
                            <img src={img} alt={name} className="imgPrincipal" />
                        </div>
                        <div className="imageList">
                            <div className="imageItem"><img src={img} /></div>
                            <div className="imageItem"><img src={img} /></div>
                            <div className="imageItem"><img src={img} /></div>
                        </div>
                    </div>
                </div>
                <div className="columnDatos">
                    <h1>{name}</h1>
                    <h3>{category}</h3>
                    <h2>{price}</h2>
                    <div className="description"><p>Stock disponible: {stock} Unidades</p>
                        <p>{description}</p>
                    </div>
                    <button className="addtocart">Agregar al Carrito</button>
                </div>
            </div>
        </div >
    )
}

export default ItemDetail


