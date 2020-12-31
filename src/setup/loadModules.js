// Imports
import cors from 'cors'
import bodyParser from 'body-parser'
import express from 'express'
import cookieParser from 'cookie-parser'
import config from '../config/config.json'


//import morgan from 'morgan'

// Load express modules
export default function (server) {
  //console.info('SETUP - Loading modules...')
  //import Key 

  server.set('llave', config.key);

  // Enable CORS
  server.use(cors())
  // Request body parser
  server.use(express.json())
  server.use(bodyParser.json())
  server.use(bodyParser.urlencoded({extended: false}))

  // Request body cookie parser
  server.use(cookieParser())

  // HTTP logger
  //server.use(morgan('dev'))
}