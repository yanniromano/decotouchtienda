import { useState } from 'react';
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';



const ItemDetail = ({ id, name, img, price, category, description, stock }) => {

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

                    <ItemCount />
                </div>
            </div>

        </div >
    );
}

export default ItemDetail


