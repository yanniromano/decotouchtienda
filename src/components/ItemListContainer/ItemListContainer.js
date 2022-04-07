import { useState, useEffect } from 'react'
import { getProducts } from '../../asyncmock'
import ItemList from '../ItemList/ItemList.js'
import '../Item/Item.css';

const ItemListContainer = (props) => {
    const [products, setProduct] = useState([])


    useEffect(() => {
        getProducts().then(prods => {
            setProduct(prods)
        }).catch(error => {
            console.log(error)
        })
    }, [])

    return (
        <div>
            <h1>{props.greeting} </h1>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer