import { useNavigate } from "react-router-dom"
import { ROUTES } from "../../constants"
import { useSelector } from "react-redux"
import { IStore } from "../../redux/store"

const Navbar = () => {
    const navigate = useNavigate()
    const isLogged = useSelector((store: IStore) => store.auth.logged)

    return (
        <nav style={{ display: 'flex' }}>
            <ul>
                <li><button onClick={() => navigate(ROUTES.PUBLIC_ROUTES.HOME)}>Inicio</button></li>
                <li><button onClick={() => navigate(ROUTES.PUBLIC_ROUTES.SHOP)}>Tienda</button></li>
                <li><button onClick={() => navigate(ROUTES.PUBLIC_ROUTES.LOGIN)}>Iniciar sesion</button></li>
                {isLogged
                    ? <>
                        <li><button onClick={() => navigate(ROUTES.PRIVATE_ROUTES.DASHBOARD)}>Panel</button></li>
                    </>
                    : null}
            </ul>
        </nav>
    )
}

export default Navbar