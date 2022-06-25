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

app.listen(process.env.PORT || PORT, () => {
    console.log(`server is running on port ${PORT}`)
})