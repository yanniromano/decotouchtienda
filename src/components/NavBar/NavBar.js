import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getCategories } from '../../asyncmock'

const NavBar = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategories().then(categories => {
            setCategories(categories)
        })
    }, [])

    return (
        <nav className="NavBar" >
            <div classNname="NavBar">
                <nav className="flexmenus">
                    <div>
                        <Link to='/'>
                            <h3>Decotouch</h3>
                        </Link>
                    </div>
                    <input type="checkbox" id="check" />
                    <label for="check" className="bar-btn">
                        <i class="fas fa-bars" aria-hidden="true"></i>
                    </label>
                    <ul className="nav-menu">
                        {categories.map(cat => <NavLink key={cat.id} to={`/category/${cat.id}`}
                            className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}
                        >{cat.description}</NavLink>)}
                    </ul>

                    <div><CartWidget /></div>
                </nav>
            </div>
        </nav>
    )
}

export default NavBar