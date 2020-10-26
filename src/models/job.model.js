const mongoose = require('mongoose')
const Schema = mongoose.Schema

const jobSchema = new Schema({
  function: { type: String, required: true },
  functionDescription: { type: Text },
  vacancies: { type: Number },
  open: { type: Boolean },
  degree: { type: String },
  aptitudes: { type: Array },
  contractType: { type: String },
  closeDate: { type: Date },
  companyId: { type: String }
}, { timestamps:true })

module.exports = mongoose.model('Company', companySchema)