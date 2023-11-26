import { useEffect, useState } from "react"


// CHANGE THIS
type ApiServiceFunc = () => Promise<any> 

export const useFetch = (apiService: ApiServiceFunc) => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState<any>()
    const [error, setError] = useState<Error | null>(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await apiService()
                setData(result)
            } catch (error) {
                if (error instanceof Error) {
                    setError(error)
                } else {
                    setError(new Error('An unknown error occurred'))
                }
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [apiService])   

    return { loading, data, error }
}