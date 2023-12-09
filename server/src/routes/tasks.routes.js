import express from 'express'
import multer from 'multer'

import { authRequired } from '../middlewares/validateToken.js'
import { createTask, deleteTask, getTask, getTasksByUser, updateTask } from '../controllers/tasks.controller.js'
import { validateDescription, validateDescriptionFormData, validateTitle, validateTitleFormData, validationError, validationStatus } from '../middlewares/validatFIeld.js'
import uploadFile from '../libs/configurationMulter.js'

const router = express.Router()


router.get('/', authRequired, getTasksByUser)
router.get('/:id', authRequired, getTask)


router.post('/', [authRequired, uploadFile, validateDescriptionFormData, validateTitleFormData, validationError], createTask)

router.delete('/:id', authRequired, deleteTask)
router.put('/:id', [authRequired, uploadFile, validateDescriptionFormData, validateTitleFormData, validationError], updateTask)
router.put('/status/:id',  [authRequired, validationStatus, validationError], updateTask)

export default router