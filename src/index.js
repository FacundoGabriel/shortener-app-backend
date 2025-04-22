require('./db/config.db')
const express = require('express')
const app = express()
const port = 3005

const cors = require('cors');

app.use(cors({
    origin: 'https://shortener-2025.netlify.app'
}));
  
app.use(express.json())

app.use('/link', require('./routes/link.routes'))


app.listen(port, () => {
    console.log('servidor andando en el port', port)
 })