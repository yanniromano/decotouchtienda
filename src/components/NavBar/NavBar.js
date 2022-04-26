import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getCategories } from '../../asyncmock'
import { firestoreDb } from '../../services'
import { getDocs, collection, orderBy, query } from 'firebase/firestore'

const NavBar = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        // getCategories().then(categories => {
        //   setCategories(categories)
        // })


        getDocs(query(collection(firestoreDb, 'categories'), orderBy("order", "asc"))).then(response => {
            const categories = response.docs.map(doc => {
                return { id: doc.id, ...doc.data() }
            })
            setCategories(categories)
        })
    }, [])
    return (

        <div classNname="NavBar">
            <nav className="flexmenus">
                <div>
                    <Link to='/'>
                        <img src='./images/logoDecotouch.png' alt='Decotouch' className="logo" />
                    </Link>
                </div>
                <input type="checkbox" id="check" />
                <label for="check" className="bar-btn">
                    <i class="fas fa-bars" aria-hidden="true"></i>
                </label>

                <ul className="nav-menu">
                    <li> {categories.map(cat => <NavLink key={cat.id} to={`/category/${cat.id}`}
                        className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}
                    >{cat.description}</NavLink>)}</li>
                </ul>
                <CartWidget />
            </nav>


        </div>

    )
}

export default NavBar