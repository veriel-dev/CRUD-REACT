import express from 'express'
import { authRequired } from '../middlewares/validateToken.js'
import { createTask, deleteTask, getTask, getTasksByUser, updateTask } from '../controllers/tasks.controller.js'
import { validateDescription, validateTitle, validationError } from '../middlewares/validatFIeld.js'

const router = express.Router()

router.get('/', authRequired, getTasksByUser)
router.get('/:id', authRequired, getTask)
router.post('/', [authRequired, validateDescription, validateTitle, validationError], createTask)
router.delete('/:id', authRequired, deleteTask)
router.put('/:id', authRequired, updateTask)

export default router