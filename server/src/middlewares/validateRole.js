const validateRole = (req = request, res = response, next) => {
  
    const { role } = req.user
  
    !res.err && (res.err = [])
  
    if (role != 'admin' || !role) {
      const errTitle = new Error('No tienes permisos para realizar está operación')
      res.err = [...res.err, {
        errorValidation: "Role",
        msg: errTitle.message
      }]
    }
    next()
}

export {validateRole}