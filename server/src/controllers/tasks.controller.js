import Task from "../models/task.model.js"
import mongoose from "mongoose"



const getTasksByUser = async (req = request, res = response) => {

  const { id } = req.user

  try {
    const tasks = await Task.find({ user: id })
    if (!tasks) {
      return res.status(404).json({
        ok: false,
        message: 'No tasks found'
      })
    }
    return res.json({
      ok: true,
      tasks
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

  const newTask = new Task({
    title,
    description,
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
  return res.json({
    message: 'updateTask'
  })
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

export {
  getTasksByUser,
  getTask,
  createTask,
  updateTask,
  deleteTask
}