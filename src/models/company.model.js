const mongoose = require('mongoose')
const Schema = mongoose.Schema

const companySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String, 
    unique: true
  },
  phone: {
    type: String
  },
  location: {
    type: String
  }
}, { timestamps:true
})

module.exports = mongoose.model('Company', companySchema)