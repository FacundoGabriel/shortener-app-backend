const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.MONGO_SECRET).then(()=>console.log('desde la base de datos')).catch((error)=> console.log(error))