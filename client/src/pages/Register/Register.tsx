import styles from './Register.module.css'
import { Form, Formik } from "formik"
import { useRegister } from "../../hooks"
import { EMPTY_REGISTER } from "../../constants"
import { REGISTER_SCHEMA } from "../../utils"
import { Button, Input, Loader, Title } from "../../components"
import { TbArrowRight } from 'react-icons/tb'

const Register = () => {
    const { firstName, lastName, email, password, loading, handleRegister, /* error */ } = useRegister()

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        handleRegister()
    }

    return loading ? <Loader />
        : <main className={styles.RegisterContainer}>
            <Title element='h1' color='blue' weight='regular'>Crear una cuenta</Title>
            <Formik
                initialValues={{ ...EMPTY_REGISTER, confirmPassword: '' }}
                onSubmit={() => { }}
                validationSchema={REGISTER_SCHEMA}>
                <Form
                    className={styles.RegisterForm}
                    onSubmit={handleSubmit}>
                    <Input
                        ref={firstName}
                        placeholder='Nombre'
                        name="firstName"
                        type="text"
                        size="large"
                        color='blue'
                        error
                    />
                    <Input
                        ref={lastName}
                        placeholder='Apellido'
                        name="lastName"
                        type="text"
                        size="large"
                        color='blue'
                        error
                    />
                    <Input
                        ref={email}
                        placeholder='Correo'
                        name="email"
                        type="email"
                        size="large"
                        color='blue'
                        error
                    />
                    <Input
                        ref={password}
                        placeholder="Contraseña"
                        name="password"
                        type="password"
                        size="large"
                        color='blue'
                        error
                    />
                    <Input
                        placeholder="Repetir contraseña"
                        name="confirmPassword"
                        type="password"
                        size="large"
                        color='blue'
                        error
                    />
                    <Button
                        icon={<TbArrowRight />}
                        display="rowReverse"
                        textColor="black"
                        backgroundColor="blue"
                        borderColor="blue"
                    >
                        Crear cuenta
                    </Button>
                </Form>
            </Formik>
        </main>
}

export default Register