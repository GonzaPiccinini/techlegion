import { useState } from "react"
import { useDispatch } from "react-redux"
import { logout } from "../redux/features"
import { ROUTES} from "../constants"
import { useNavigate } from "react-router-dom"

export const useLogout = () => {
    const [loading, setLoading] = useState(false)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogout = () => {
        setLoading(true)
        dispatch(logout())
        navigate(ROUTES.PUBLIC_ROUTES.LOGIN)
    } 

    return { handleLogout, loading }
}