import bcrypt from "bcryptjs"

const hashPassword = password => {
  const saltRounds = 10
  const salt = bcrypt.genSaltSync(saltRounds)
  const hashedPassword = bcrypt.hashSync(password, salt)
  return hashedPassword
}

export {
  hashPassword
}