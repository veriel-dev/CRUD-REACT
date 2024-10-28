import express from 'express'
import { authRequired } from '../middlewares/validateToken.js'
import { getApiStats } from '../libs/apiMonitor.js'

const router = express.Router()


// @route   GET api/stats
router.get('/', authRequired, getApiStats)


export default router