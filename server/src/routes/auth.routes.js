import express from 'express'
import { authLogin, authRegister, logout, profile } from '../controllers/auth.controller.js'
import { validateEmail, validatePassword, validateUsername, validationError } from '../middlewares/validatFIeld.js'
import { authRequired } from '../middlewares/validateToken.js'

const router = express.Router()


// @route   POST api/auth/login
// @route   POST api/auth/register
// @route   POST api/auth/logout
// @route   GET api/auth/profile

router.post('/login', [validateEmail, validatePassword, validationError], authLogin)
router.post('/register', [validateEmail, validateUsername, validatePassword, validationError], authRegister)
router.post('/logout', logout)
router.get('/profile', authRequired, profile)


export default router