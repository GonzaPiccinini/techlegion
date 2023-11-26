import { Router } from 'express'
import { loginController, loginWithTokenController, registerController } from '../controllers'
import { validateToken } from '../middlewares'

const router = Router()

router.post('/login', loginController)

router.post('/loginWithToken', validateToken, loginWithTokenController)

router.post('/register', registerController)

export { router }