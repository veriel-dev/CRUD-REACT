import User from "../models/user.model.js"
import mongoose from "mongoose"

const getAllUserByRoleAdmin = async (req = request, res = response) => {
  const { role, page = 1, limit = 5 } = req.query
  let query = {}
  let options = { }
  
  if (role) query = { $text: { $search: role.toString().toLowerCase() } };

  options = {
    skip: (page - 1) * limit,
    limit: limit
  }
  
  try {
      const users = await User.find(query, null, options)
      
      return res.status(200).json({
        ok: true,
        users,
        total: users.length,
        page,
        limit
      })
    } catch (error) {
      return res.status(500).json({
        ok: false,
        message: 'Something went wrong'
      })
    }

}

const getUserById = async (req = request, res = response) => {

  const { id } = req.params

  try {
    const user = await User.findById(id)
    return res.status(200).json({
      ok: true,
      user
    })
  } catch (error) {
    return res.status(500).json({
      ok: false,
      message: 'Something went wrong'
    })
  }

}
const deleteUserById = async (req = request, res = response) => {
  
    const { id } = req.params

    const isValidId = mongoose.isValidObjectId(id)
    if (!isValidId) {
      return res.status(400).json({
        message: 'The id is not valid'
      })
    }
  
    try {
      const user = await User.findByIdAndDelete(id)

      if (!user) {
        return res.status(404).json({
          ok: false,
          message: 'No user found'
        })
      }

      return res.status(200).json({
        ok: true,
        msg: `User ${user.name} deleted`,
        user
      })
    } catch (error) {
      return res.status(500).json({
        ok: false,
        message: 'Something went wrong'
      })
    }
  
}

const updateUserById = async (req = request, res = response) => {

      const { id } = req.params
      const { name, email, role = 'user' } = req.body
    
      const isValidId = mongoose.isValidObjectId(id)
      if (!isValidId) {
        return res.status(400).json({
          message: 'The id is not valid'
        })
      }
    
      try {
        const user = await User.findByIdAndUpdate(id, {
          name,
          email,
          role
        }, {
          new: true
        })
    
        if (!user) {
          return res.status(404).json({
            ok: false,
            message: 'No user found'
          })
        }
    
        return res.status(200).json({
          ok: true,
          msg: `User ${user.name} updated`,
          user
        })
      } catch (error) {
        return res.status(500).json({
          ok: false,
          message: 'Something went wrong'
        })
      }
}
const createUserByAdmin = async (req = request, res = response) => {
  
    const { username, email, password, role = 'user' } = req.body

    const isExistUser = await User.findOne({ email })
    if (isExistUser) {
      return res.status(400).json({
        message: 'The email is already registered'
      })
    }

    const newUser = new User({
      username,
      email,
      password,
      role
    })
  
    try {
      const user = await newUser.save()
      return res.status(200).json({
        ok: true,
        user
      })
    } catch (error) {
      return res.status(500).json({
        message: 'Something went wrong'
      })
    }
  
  
}
export {
    getAllUserByRoleAdmin,
    getUserById,
    deleteUserById,
    updateUserById,
    createUserByAdmin
}