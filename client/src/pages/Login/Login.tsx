import { useLogin } from "../../hooks/useLogin"

const Login = () => {
    const { email, password, handleLogin } = useLogin()

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault()
        handleLogin()
    }

    return (
        <main>
            <form onSubmit={handleSubmit}>
                <input name="email" type="email" ref={email} placeholder="email" />
                <input name="password" type="password" ref={password} placeholder="password" />
                <button type="submit">Iniciar sesion</button>
            </form>
        </main>
    )
}

export default Login