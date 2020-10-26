const express = require('express')
const cors = require('cors')
const db = require('./db/index')

const companyRoute = require('./routes/company')

// Requiring 
require("dotenv").config();
const port = process.env.PORT;
// Initiating the app
const app = express()
app.use(express.json())
app.use(cors())

app.use('/company', companyRoute)


app.listen(`${port}`, () => {
  console.log(`Aplicação rodando na porta ${port}`)
})