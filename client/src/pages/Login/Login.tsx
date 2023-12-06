import styles from './Login.module.css'
import { Form, Formik } from "formik"
import { Button, Input, Loader, Title } from "../../components"
import { useLogin } from "../../hooks"
import { LOGIN_SCHEMA } from "../../utils"
import { EMPTY_LOGIN, ROUTES } from "../../constants"
import { TbLogin2 } from "react-icons/tb"
import { useNavigate } from 'react-router-dom'


const Login = () => {
    const { email, password, handleLogin, loading, /* error */ } = useLogin()
    const navigate = useNavigate()

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault()
        handleLogin()
    }

    return loading ? <Loader />
        : <main className={styles.LoginContainer}>
            <section className={styles.LoginSection}>
                <Title
                    color='white'
                    weight='regular'
                    element='h1'>
                    ¿No tienes cuenta? Unete a nosotros!
                </Title>
                <Button
                    size='large'
                    textColor='white'
                    backgroundColor='black'
                    borderColor='white'
                    onClick={() => navigate(ROUTES.PUBLIC_ROUTES.REGISTER)}
                >
                    Crear o registrar una cuenta
                </Button>
            </section>
            <section className={styles.LoginSection}>
                <Title
                    color='white'
                    weight='regular'
                    element='h1'>
                    Iniciar sesion
                </Title>
                <Formik
                    initialValues={EMPTY_LOGIN}
                    onSubmit={() => { }}
                    validationSchema={LOGIN_SCHEMA}
                >
                    <Form
                        className={styles.LoginForm}
                        onSubmit={handleSubmit}>
                        <Input
                            name="email"
                            label="Correo"
                            type="email"
                            color='white'
                            size="small"
                            ref={email}
                            error />
                        <Input
                            name="password"
                            label="Contraseña"
                            type="password"
                            color='white'
                            ref={password}
                            size="small"
                            error />
                        <Button
                            icon={<TbLogin2 size={18} />}
                            type="submit"
                            size='large'
                            textColor='black'
                            backgroundColor='white'
                            borderColor='white'
                        >
                            Iniciar sesion
                        </Button>
                    </Form>
                </Formik>
            </section>
        </main>
}

export default Login