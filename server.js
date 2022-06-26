const express = require('express')
const app = express()
const cors = require('cors')
const MongoClient = require('mongodb').MongoClient
require('dotenv').config()
const PORT = process.env.PORT

let db,
    dbConnectionString = process.env.DB_STRING,
    dbName = 'test',
    collection

MongoClient.connect(dbConnectionString)
    .then(client => {
        console.log('connected to database')
        db = client.db(dbName)
        collection = db.collection('test1')
    })

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())



app.listen(process.env.PORT || PORT, () => {
    console.log(`server is running on port ${PORT}`)
})