import { request, response } from "express"
import { statusTask } from "../config.js"
import multer from 'multer'

const validationError = (req = request, res = response, next) => {
  const err = res.err
  if (err.length > 0) {
    return res.status(400).json({
      ok: false,
      msg: err
    })
  }
  next()
}
const validateUsername = (req = request, res = response, next) => {
  const { username } = req.body

  !res.err && (res.err = [])

  if (username.length < 3 || username.length > 20) {
    const errUsername = new Error('El nombre de usuario debe tener entre 3 y 20 caracteres')
    res.err = [...res.err, {
      errorValidation: "Username",
      msg: errUsername.message
    }]
  }
  next()
}

const validateEmail = (req = request, res = response, next) => {
  const { email } = req.body

  !res.err && (res.err = [])

  if (!email.includes('@') || !email) {
    const errEmail = new Error('El correo electrónico no es válido o no lo ha informado')
    res.err = [...res.err, {
      errorValidation: "Email",
      msg: errEmail.message
    }]
  }
  next()
}

const validatePassword = (req = request, res = response, next) => {
  const { password } = req.body

  !res.err && (res.err = [])

  if (password.length < 6 || !password) {
    const errPassword = new Error('La contraseña debe tener al menos 6 caracteres y no puede estar vacía')
    res.err = [...res.err, {
      errorValidation: "Password",
      masg: errPassword.message
    }]
  }
  next()
}

const validateTitle = (req = request, res = response, next) => {
  const { title } = req.body

  !res.err && (res.err = [])

  if (title.length < 3 || title.length > 20) {
    const errTitle = new Error('El título debe tener entre 3 y 20 caracteres')
    res.err = [...res.err, {
      errorValidation: "Title",
      msg: errTitle.message
    }]
  }
  next()
}
const validateDescription = (req = request, res = response, next) => {
  const { description } = req.body

  !res.err && (res.err = [])

  if (description.length < 3 || description.length > 120) {
    const errDescription = new Error('La descripción debe tener entre 3 y 120 caracteres')
    res.err = [...res.err, {
      errorValidation: "Description",
      msg: errDescription.message
    }]
  }
  next()
}

const validationStatus = (req = request, res = response, next) => {
  const { status } = req.body

  !res.err && (res.err = [])

  if( !status || status === '' || !statusTask.includes(status) ){
    const errStatus = new Error('El estado de la tarea no es válido')
    res.err = [...res.err, {
      errorValidation: "Status",
      msg: errStatus.message
    }]
  }
  next()
}


const validateTitleFormData = (req = request, res = response, next) => {
  const { title } = req.body

  !res.err && (res.err = [])

  if (!title || title.trim() === '') {
    const errTitle = new Error('El título no puede estar vacío')
    res.err = [...res.err, {
      errorValidation: "Title",
      msg: errTitle.message
    }]
  }
  next()
}
const validateDescriptionFormData = (req = request, res = response, next) => {
  const { description } = req.body

  !res.err && (res.err = [])

  if (!description || description.trim() === '') {
    const errTitle = new Error('La Descripción no puede estar vacía')
    res.err = [...res.err, {
      errorValidation: "Description",
      msg: errTitle.message
    }]
  }
  next()
}

export {
  validationError,
  validateUsername,
  validateEmail,
  validatePassword,
  validateTitle,
  validateDescription,
  validationStatus,
  validateDescriptionFormData,
  validateTitleFormData 
}