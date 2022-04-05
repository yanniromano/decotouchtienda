import { useState, useEffect } from 'react'
import { getProducts } from '../../asyncmock'
import ItemList from '../ItemList/ItemList'
import '../Item/Item.css';

function ItemListContainer(props) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then(prods => {
            setProducts(prods);
        }).catch(error => {
            console.log(error);
        });
    }, []);



    return (
        <div>
            <h1>{props.greeting}</h1>
            <ItemList products={products} />
        </div>
    );
}

export default ItemListContainer