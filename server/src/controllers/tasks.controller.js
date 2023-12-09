import Task from "../models/task.model.js"
import mongoose from "mongoose"

const getTasksByUser = async (req = request, res = response) => {
  let tasks = null
  
  const { id } = req.user
  
  const { page = 1, limit = 5, populate = false  } = req.query

  const options = {
    skip: (page - 1) * limit,
    limit: limit
  }
  
  try {
    if (populate) { 
       tasks = await Task.find({ user: id }, null, options).populate('user')
    } else {
       tasks = await Task.find({ user: id }, null, options)
    }

    return res.json({
      ok: true,
      tasks,
      total: tasks.length,
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

const getTask = async (req = request, res = response) => {

  const { id: userId } = req.user

  const { id } = req.params

  const isValidId = mongoose.isValidObjectId(id)

  if (!isValidId) {
    return res.status(400).json({
      ok: false,
      message: 'The id is not valid'
    })
  }
  try {
    const task = await Task.findOne({
      _id: id,
      user: userId
    })
    if (!task) {
      return res.status(404).json({
        ok: false,
        message: 'No task found'
      })
    }
    return res.status(200).json({
      ok: true,
      task
    })
  } catch (error) {
    return res.status(500).json({
      message: 'Something went wrong'
    })
  }
}

const createTask = async (req = request, res = response) => {

  const { id } = req.user
  const { title, description } = req.body
  const imgPath = req.file ? req.file.path : null

  const newTask = new Task({
    title,
    description,
    img: imgPath,
    user: id
  })

  try {
    const task = await newTask.save()
    return res.status(200).json({
      ok: true,
      task
    })
  } catch (error) {
    return res.status(500).json({
      message: 'Something went wrong'
    })
  }

}
const updateTask = async (req = request, res = response) => {
  
  const { id: userId } = req.user
  const { id } = req.params
  const { title, description, status } = req.body
  const imgPath = req.file ? req.file.path : null



  const isValidId = mongoose.isValidObjectId(id)
  if (!isValidId) {
    return res.status(400).json({
      message: 'The id is not valid'
    })
  }
  
  try {
    const task = await Task.findOneAndUpdate({
      _id: id,
      user: userId
    }, {
      title,
      description,
      status,
      img: imgPath
    }, {
      new: true
    })

    if (!task) {
      return res.status(404).json({
        message: 'No task found'
      })
    }
    return res.status(200).json({
      ok: true,
      msg: 'Task updated',
      task
    })
  } catch (error) {
    return res.status(500).json({
      message: 'Something went wrong'
    })
  }
}

const deleteTask = async (req = request, res = response) => {
  const { id: userId } = req.user
  const { id } = req.params

  const isValidId = mongoose.isValidObjectId(id)
  if (!isValidId) {
    return res.status(400).json({
      message: 'The id is not valid'
    })
  }
  try {
    const task = await Task.findOneAndDelete({
      _id: id,
      user: userId
    })

    if (!task) {
      return res.status(404).json({
        message: 'No task found'
      })
    }
    return res.status(200).json({
      ok: true,
      msg: 'Task deleted'
    })
  } catch (error) {
    return res.status(500).json({
      message: 'Something went wrong'
    })
  }
}

const updateStatusTask = async (req = request, res = response) => {
  const { id: userId } = req.user
  const { id } = req.params
  const { status } = req.body

  /* 1. Validar que el status solamente puede ser: pending, completed, in-progress */

  const isValidId = mongoose.isValidObjectId(id)
  if (!isValidId) {
    return res.status(400).json({
      message: 'The id is not valid'
    })
  }
  try {
    const task = await Task.findOneAndUpdate({
      _id: id,
      user: userId
    }, {
      status
    }, {
      new: true
    })

    if (!task) {
      return res.status(404).json({
        message: 'No task found'
      })
    }
    return res.status(200).json({
      ok: true,
      msg: 'Status Task updated',
      task
    })
  } catch (error) {
    return res.status(500).json({
      message: 'Something went wrong'
    })
  }

}

export {
  getTasksByUser,
  getTask,
  createTask,
  updateTask,
  deleteTask,
  updateStatusTask
}