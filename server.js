require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://brain:brain@cluster0.tythurp.mongodb.net/sample_supplies', { useNewUrlParser: true });
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json())
//sample API that takes some body from request and send it in the response 
app.post('/addNewEntry', async (req, resp) => {
    try{
    let body = req.body
    resp.status(200).send(body)
    }catch(error){
        throw error
    }
    
})

app.listen(3000, () => console.log('Server Started'))
