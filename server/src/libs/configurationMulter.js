import path from 'path'
import { fileURLToPath } from "url"

import multer from 'multer'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const limits = { fileSize: 3* 1024 * 1024  }

const configMulter = {
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, path.join(__dirname, '../uploads/imgs'))
        },
        filename: function (req, file, cb) {
            cb(null, Date.now() + '-' + file.originalname)
        }
    }),
    fileFilter: (req, file, cb) => {
        const filetypes = /png|jpg|jpeg/
        const mimetype = filetypes.test(file.mimetype)
        const extname = filetypes.test(path.extname(file.originalname))
        if (mimetype && extname) {
            return cb(null, true)
        }
        cb('Error: El archivo debe ser una imagen válida - png, jpg o jpeg')
    },
    limits
}

const upload = multer(configMulter).single('img')

const uploadFile = (req, res, next) => {
    upload(req, res, function (error) {
        if (error) {
            return res.status(400).json({
                ok: false,
                message: error
            })
        }
        next()
    })
}

export default uploadFile