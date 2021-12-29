import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'
import routes from './routes/index'

const test: string = 'Hello Server'
console.log(test)
// Middleware
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(morgan('dev'))
app.use(cookieParser())


// Routes
app.use('/api', routes.authRouter)
// app.get('/', (req, res) => {
//   res.json({ msg: 'Hello Els-Channel'})
// })


// Database
import './config/database'


// server listenning
const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
  console.log('Server is running on port', PORT)
})

app.get('/', (req, res) => {
  res.send('Hello EL!')
})

//module.exports = PORT
