import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav className="navbar is-success">
            <h2 className="title is-2 has-text-warning px-3">Agroindustria EL DESTINO</h2>
            <div className="buttons are-normal">
                <button className="button is-light">EXPELLER SOJA</button>
                <button className="button is-ligth">EXPELLER MAIZ</button>
                <button className="button is-ligth">ACEITE BIODIESEL</button>
                <button className="button is-ligth">CABAÑA BRAFORD</button>
                <button className="button is-ligth">CONTACTO</button>
            </div>
            <div className="navbar-end">
            <CartWidget/>
            </div>
        </nav>
    )
}

export default NavBar