import { useRef } from "react"
import { Token } from "../models"
import { loginService } from "../services"
import { useDispatch } from "react-redux"
import { login } from "../redux/features"
import { setLocalStorage } from "../utils"
import { TOKEN_KEY } from "../constants"

// type DataMessage = string

export const useLogin = () => {
    const email = useRef<HTMLInputElement>(null)
    const password = useRef<HTMLInputElement>(null)

    // const [loading, setLoading] = useState(true)
    // const [error, setError] = useState<Error | DataMessage | null>(null)
    const dispatch = useDispatch()

    const handleLogin = async () => {
        if (!email.current?.value || !password.current?.value) {
            return
        }

        try {
            const data = await loginService({ email: email.current.value, password: password.current.value })
            if (data.message) {
                // setError(data.message)
                console.error(data.message)
                return
            }

            dispatch(login({token: data.token, user: data.user}))
            setLocalStorage<Token>(TOKEN_KEY, data.token)
        } catch (error) {
            // setError(error as Error)
            console.error(error)
        } 
        // finally {
        //     setLoading(false)
        // }
    } 

    return { email, password, handleLogin }
}