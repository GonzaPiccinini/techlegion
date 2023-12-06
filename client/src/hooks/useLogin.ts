import { useRef, useState } from "react"
import { loginService } from "../services"
import { useDispatch } from "react-redux"
import { login } from "../redux/features"
import { ROUTES } from "../constants"
import { useNavigate } from "react-router-dom"

type DataMessage = string

export const useLogin = () => {
    const email = useRef<HTMLInputElement>(null)
    const password = useRef<HTMLInputElement>(null)

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<Error | DataMessage | null>(null)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogin = async () => {
        setLoading(true)
        if (!email.current?.value || !password.current?.value) {
            return
        }

        try {
            const data = await loginService({ email: email.current.value, password: password.current.value })
            if (data.message) {
                setError(data.message)
                return
            }

            dispatch(login({token: data.token, user: data.user}))
            navigate(ROUTES.PRIVATE_ROUTES.DASHBOARD)
        } catch (error) {
            setError(error as Error)
        } finally {
            setLoading(false)
        }
    } 

    return { email, password, handleLogin, loading, error }
}