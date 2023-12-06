import styles from './Navbar.module.css'
import { useNavigate } from "react-router-dom"
import { ROUTES } from "../../constants"
import { useSelector } from "react-redux"
import { IStore } from "../../redux/store"
import { TbShoppingBag, TbLogin2, TbLogout2 } from "react-icons/tb"
import { HiOutlineHome } from 'react-icons/hi2'
import { BsGear } from "react-icons/bs";
import { Button } from '../Button'
import logo from '../../assets/techlegionLogo.svg'
import { useLogout } from '../../hooks'

const Navbar = () => {
    const { handleLogout } = useLogout()
    const navigate = useNavigate()
    const isLogged = useSelector((store: IStore) => store.auth.logged)

    const NavButtonConfig: React.CSSProperties = {
        fontSize: '.8rem',
    }

    return (
        <nav className={`${styles.Nav}`}>
            <ul className={`${styles.NavUl}`}>
                <li onClick={() => navigate(ROUTES.PUBLIC_ROUTES.HOME)} className={`${styles.NavLi} ${styles.NavLiImg}`}>
                    <img src={logo} alt='logo-image' height={50} />
                </li>
            </ul>
            <ul className={`${styles.NavUl}`}>
                <li className={`${styles.NavLi}`}>
                    <Button
                        icon={<HiOutlineHome size={20} />}
                        onClick={() => navigate(ROUTES.PUBLIC_ROUTES.HOME)}
                        display='column'
                        textColor='white'
                        backgroundColor='black'
                        borderColor='black'
                        style={NavButtonConfig}>
                        INICIO
                    </Button>
                </li>
                <li className={`${styles.NavLi}`}>
                    <Button
                        icon={<TbShoppingBag size={20} />}
                        onClick={() => navigate(ROUTES.PUBLIC_ROUTES.SHOP)}
                        display='column'
                        textColor='white'
                        backgroundColor='black'
                        borderColor='black'
                        style={NavButtonConfig}>
                        TIENDA
                    </Button>
                </li>
                {isLogged
                    ? <>
                        <li className={`${styles.NavLi}`}>
                            <Button
                                icon={<TbLogout2 size={20} />}
                                onClick={handleLogout}
                                display='column'
                                textColor='white'
                                backgroundColor='black'
                                borderColor='black'
                                style={NavButtonConfig}>
                                CERRAR SESION
                            </Button>
                        </li>
                        <li className={`${styles.NavLi}`}>
                            <Button
                                icon={<BsGear size={20} />}
                                onClick={() => navigate(ROUTES.PRIVATE_ROUTES.DASHBOARD)}
                                display='column'
                                textColor='white'
                                backgroundColor='black'
                                borderColor='black'
                                style={NavButtonConfig}>
                                PANEL
                            </Button>
                        </li>
                    </>
                    : <li className={`${styles.NavLi}`}>
                        <Button
                            icon={<TbLogin2 size={20} />}
                            onClick={() => navigate(ROUTES.PUBLIC_ROUTES.LOGIN)}
                            display='column'
                            textColor='white'
                            backgroundColor='black'
                            borderColor='black'
                            style={NavButtonConfig}>
                            CUENTA
                        </Button>
                    </li>}
            </ul>
        </nav>
    )
}

export default Navbar