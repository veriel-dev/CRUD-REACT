import { request, response } from "express";
import jwt from "jsonwebtoken";

const authRequired = (req = request, res = response, next) => {

  const authHeader = req.header('Authorization');


  if (!authHeader) {
    return res.status(401).json({
      ok: false,
      msg: 'Authorization header is required'
    });
  }

  const [bearer, token] = authHeader.split(' ');
  if (bearer !== 'Bearer' || !token) {
    return res.status(401).json({
      ok: false,
      msg: 'Authorization header must be Bearer token'
    });
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