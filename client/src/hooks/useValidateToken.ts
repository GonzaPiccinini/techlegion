import { useEffect, useState } from "react"
import { getLocalStorage } from "../utils"
import { TOKEN_KEY } from "../constants"
import { validateTokenService } from "../services"
import { AuthUserAndToken } from "../models"

type DataMessage = string

export const useValidateToken = () => {
    const [loading, setLoading] = useState(true) 
    const [userAndToken, setUserAndToken] = useState<AuthUserAndToken | null>(null) 
    const [error, setError] = useState<Error | DataMessage | null>(null)

    useEffect(() => {
        const token = getLocalStorage(TOKEN_KEY)

        if (!token) {
            setLoading(false)
            return
        }

        const fetchData = async (): Promise<void> => {
            try {
                const data = await validateTokenService(token)
                if (data.message) {
                    setError(data.message)
                    return
                }
                if (data.user) {
                    setUserAndToken({user: data.user, token})
                }
            } catch (error) {
                setError(error as Error)
            } finally {
                setLoading(false)
            }
        }   

        fetchData()
    }, [])

    return { loading, userAndToken, error }
}