import './NavBar.css'
import CartWidget from './CartWidget/CartWidget.js'

const NavBar = () => {
    return (
        <div classNname="NavBar">
            <nav className="flexmenus">
                <div>
                    <a href="index.html" className="logo" > Decotouch</a>
                </div>
                <input type="checkbox" id="check" />
                <label for="check" className="bar-btn">
                    <i class="fas fa-bars" aria-hidden="true"></i>
                </label>
                <ul className="nav-menu">
                    <li> <a href="#" className="activo">Home</a></li>
                    <li> <a href="#">Lo Nuevo!</a></li>
                    <li> <a href="#">Espacios</a></li>
                    <li> <a href="#">Murales</a></li>
                    <li> <a href="#">Contacto</a></li>
                </ul>

                <div><CartWidget /></div>
            </nav>


        </div>


    )

}

export default NavBar;