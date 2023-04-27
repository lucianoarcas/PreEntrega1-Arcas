import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"


const NavBar = () => {
  return (
    <header>
        <h1>Titulo Tienda</h1>

        <nav>
            <ul>
                <li>Celulares</li>
                <li>Notebooks</li>
                <li>Accesorios</li>
            </ul>
        </nav>

        <CartWidget/>

    </header>
  )
}

export default NavBar
