import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import * as dotenv from "dotenv"

dotenv.config()

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const app = express()

app.use(express.static(path.join(__dirname, 'dist')))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

// eslint-disable-next-line no-undef
const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log('Server running on port', port)
})