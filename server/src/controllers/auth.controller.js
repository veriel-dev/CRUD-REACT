
import { request, response } from "express"
import brcrypt from "bcryptjs"


import User from "../models/user.model.js"
import { hashPassword } from "../libs/hashPassword.js"
import { createAccessToken } from "../libs/jwt.js"


const authLogin = async (req = request, res = response) => {

  /* 1. Validaciones de Middlweware */
  const { email, password } = req.body

  /* 2. Comprobar si el usuario existe con ese email */
  const user = await User.findOne({ email })

  if (!user) {
    return res.status(400).json({
      ok: false,
      msg: 'El usuario no existe'
    })
  }
  /* 3. Comprobar si el password es correcto */
  const isMatchPassword = await brcrypt.compare(password, user.password)

  if (!isMatchPassword) {
    return res.status(400).json({
      ok: false,
      msg: 'El password es incorrecto'
    })
  }

  /* 4. Generar el token */
  const token = await createAccessToken(user._id)
  res.cookie('token', token)

  res.status(200).json({
    ok: true,
    msg: 'Login realizado correctamente',
    user,
  })
}


const authRegister = async (req = request, res = response) => {


  const { email, password } = req.body

  const isExistUser = await User.findOne({ email })
  if (isExistUser) {
    return res.status(400).json({
      ok: false,
      msg: 'Ese correo ya está registrado en nuestra base de detos'
    })
  }

  const user = new User(req.body)

  user.password = hashPassword(password)

  const token = await createAccessToken(user._id)
  res.cookie('token', token)

  try {

    await user.save()
    res.status(201).json({
      ok: true,
      msg: 'Usuario creado correctamente',
      user
    })
  } catch (error) {
    console.log(error.message)
    res.status(500).json({
      ok: false,
      msg: 'Error interno del sistema'
    })
  }
}

const logout = (req = request, res = response) => {
  res.clearCookie('token', '', {
    expires: new Date(0)
  })
  return res.sendStatus(200)
}

const profile = async (req = request, res = response) => {

  const user = await User.findById(req.user.id)
  if (!user) {
    return res.status(400).json({
      ok: false,
      msg: 'User not found'
    })
  }

  res.status(200).json({
    ok: true,
    msg: 'Profile',
    user

  })
}

export {
  authLogin,
  authRegister,
  logout,
  profile
}