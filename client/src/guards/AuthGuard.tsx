import { useSelector } from "react-redux"
import { Outlet, Navigate } from "react-router-dom"
import { IStore } from "../redux/store"
import { ROUTES } from "../constants"

const AuthGuard = () => {
    const isLogged = useSelector((store: IStore) => store.auth.logged)

    return isLogged ? <Outlet /> : <Navigate replace to={ROUTES.PUBLIC_ROUTES.LOGIN} />
}

export default AuthGuard