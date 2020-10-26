const db = require('mongoose')

require("dotenv").config();
const host = process.env.HOST
const dbName = process.env.DATABASE

// Connect mongodb
db
  .connect(`mongodb:${host}/${dbName}`, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then( () => console.log('Conectada a BD com sucesso'))
  .catch( (error) => {
    console.log('Impossível conectar a BD: ' + error)
    process.exit(1)
  })

module.exports = db