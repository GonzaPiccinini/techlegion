import { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../redux/features'
import { ROUTES } from '../constants'
import { registerService } from '../services'

type DataMessage = string

export const useRegister = () => {
    const firstName = useRef<HTMLInputElement>(null)            
    const lastName = useRef<HTMLInputElement>(null)
    const email = useRef<HTMLInputElement>(null)
    const password = useRef<HTMLInputElement>(null)

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<Error | DataMessage | null>(null)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleRegister = async () => {
        setLoading(true)
        if (!firstName.current?.value 
            || !lastName.current?.value 
            || !email.current?.value 
            || !password.current?.value) {
            return
        }

        try {
            const data = await registerService({ 
                firstName: firstName.current.value, 
                lastName: lastName.current.value, 
                email: email.current.value, 
                password: password.current.value 
            })
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

    return { firstName, lastName, email, password, loading, error ,handleRegister }
}