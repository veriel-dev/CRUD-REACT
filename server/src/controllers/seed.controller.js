
import { seedDataTasks, seedDataUsers } from "../config.js"
import { hashPassword } from "../libs/hashPassword.js"
import Task from "../models/task.model.js"
import User from "../models/user.model.js"

const createUserSeed = async (req = request, res = response) => {
  
    const users = seedDataUsers

    users.forEach(user => {
      user.password = hashPassword(user.password)
    })

    const tasks = seedDataTasks.map(task => {
      const ramdomNumber = Math.floor(Math.random() * users.length)
      task.user = users[ramdomNumber]._id
      return task
    })
    
    try {
      await User.deleteMany()
      await Task.deleteMany()
      await User.insertMany(users)
      await Task.insertMany(tasks)

      res.status(200).json({
        ok: true,
        msg: 'Usuarios y Tasks seed creados correctamente!!!',
        users
      })
      
    } catch (error) {
      console.log(error.message)
      throw new Error('Error interno del sistema')
    }
  }

export {createUserSeed}