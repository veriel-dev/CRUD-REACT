import jwt from 'jsonwebtoken'
import * as dotenv from "dotenv"
dotenv.config()

const createAccessToken = (id = '', role = 'user') => {
  return new Promise((resolve, reject) => {
    const payload = { id, role }
    jwt.sign(payload, process.env.SECRET_KEY, {
      expiresIn: '12h'
    }, (err, token) => {
      if (err) {
        console.log(err)
        reject('No se pudo generar el token')
      } else {
        resolve(token)
      }
    })
  })
}
export {
  createAccessToken
}