import express from 'express'
import { getAllUserByRoleAdmin, deleteUserById, getUserById, updateUserById, createUserByAdmin } from '../controllers/user.controller.js'
import { authRequired } from '../middlewares/validateToken.js'
import { validateRole } from '../middlewares/validateRole.js'
import { validationError } from '../middlewares/validatFIeld.js'



const router = express.Router()

// @route  GET api/users
// @route  GET api/users
// @route  GET api/users/:id
// @route DELTE api/users/:id
// @route PUT api/users/:id

router.get('/', [authRequired, validateRole, validationError], getAllUserByRoleAdmin)
router.get('/', [authRequired, validateRole, validationError], createUserByAdmin)
router.get('/:id', [authRequired, validateRole, validationError], getUserById)
router.delete('/:id', [authRequired, validateRole, validationError], deleteUserById)
router.put('/:id', [authRequired, validateRole, validationError], updateUserById)

export default router