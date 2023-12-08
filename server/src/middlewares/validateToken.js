import { request, response } from "express";
import jwt from "jsonwebtoken";

const authRequired = (req = request, res = response, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({
      ok: false,
      msg: 'No token, authorization denied'
    })
  }
  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(403).json({
        ok: false,
        msg: 'Invalid token'
      })
    }
    req.user = decoded
  })
  next()
}
export {
  authRequired
}