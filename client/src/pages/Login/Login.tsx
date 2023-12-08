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
            <Title
                color='blue'
                weight='regular'
                element='h1'>
                Iniciar sesion
            </Title>
            <div className={styles.LoginSectionContainer}>
                <section className={styles.LoginSection}>
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
                                placeholder="Correo"
                                type="email"
                                color='blue'
                                size="small"
                                ref={email}
                                error />
                            <Input
                                name="password"
                                placeholder="Contraseña"
                                type="password"
                                color='blue'
                                ref={password}
                                size="small"
                                error />
                            <Button
                                icon={<TbLogin2 size={18} />}
                                type="submit"
                                size='large'
                                textColor='white'
                                backgroundColor='blue'
                                borderColor='blue'
                            >
                                Iniciar sesion
                            </Button>
                        </Form>
                    </Formik>
                </section>
                <section className={styles.LoginSection}>
                    <Title
                        color='blue'
                        weight='regular'
                        element='h2'>
                        ¿No tienes cuenta? Unete a nosotros!
                    </Title>
                    <Button
                        size='large'
                        textColor='blue'
                        backgroundColor='black'
                        borderColor='blue'
                        onClick={() => navigate(ROUTES.PUBLIC_ROUTES.REGISTER)}
                    >
                        Crear o registrar una cuenta
                    </Button>
                </section>
            </div>
        </main>
}

export default Login