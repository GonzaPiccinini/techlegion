import { useDispatch } from "react-redux"
import { login, logout } from "../../redux/features"
import { useValidateToken } from "../../hooks"
import { useEffect } from "react"

interface IAppContainerProps {
    children: React.ReactNode | JSX.Element
}

const AppContainer = ({ children }: IAppContainerProps) => {
    const { loading, userAndToken, error } = useValidateToken()
    const dispatch = useDispatch()

    useEffect(() => {
        if (!loading) {
            userAndToken === null ? dispatch(logout()) : dispatch(login({ token: userAndToken.token, user: userAndToken.user }));
            error && console.error(error)
        }
    }, [loading, userAndToken, error, dispatch])

    return (
        <>
            {loading ? <p>loading</p> : children}
        </>
    )
}

export default AppContainer