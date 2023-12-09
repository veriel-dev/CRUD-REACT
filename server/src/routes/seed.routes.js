import express from 'express'
import { createUserSeed } from '../controllers/seed.controller.js'


const router = express.Router()

// @route   GET api/seed

router.get('/', createUserSeed)

export default router