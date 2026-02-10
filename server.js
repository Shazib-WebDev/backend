
const express = require('express')

const app = express()
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()


app.use(express.json())

app.use(cors())

app.get('/', (req,res) =>{
    res.send('hi')
})

const port = process.env.PORT
app.listen(port, ()=>{
    console.log('server running');
})
