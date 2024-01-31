import express from 'express'
import { GoogleLogin, Login, Register } from '../Controllers/AuthController.js';

const router = express.Router()

router.post('/login', Login)
router.post('/register', Register)
router.post('/googlelogin', GoogleLogin)

export default router;