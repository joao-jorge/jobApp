const express = require('express')
const router = express.Router()
const Company = require('../models/company.model')

router.route('/').get( async (req, res) => {
  await Company
    .find()
    .then( (accounts ) => {
      if(accounts.length === 0){
        res.status(400).json({error: 'Sem contas a mostrar'})
      } else { res.status(200).json(accounts) }
    })
    .catch( (err) => res.status(200).json({error: 'Erro: ' + err})) 
})

router.route('/add').post( async (req, res) => {
  const { username, account_description, email, password } = req.body
  const create = new Company({ companyName, address, email, phone })
  await create
    .save()
    .then( () => res.status(200).json('Conta Adicionada'))
    .catch( (err) => res.status(400).json({error: 'Erro: ' + err }))
})

router.route('/update/:id').put( async (req, res) => {
  const { id } = req.params
  const { username, account_description, email, password } = req.body
  await Company
    .updateOne({_id: id}, {
      $set: {
        companyName,
        address,
        email, 
        phone
      }
    })
    .then( (accounts) => {
      if(accounts.nModified === 0){
        res.status(400).json({aviso: 'Nada foi modificado'})
      } else { res.status(200).json({res: 'Dados modificados'}) }
    })
    .catch( (err) => res.status(400).json({error: 'Erro: ' + err }))
})

router.route('/delete/:id').delete( async (req, res) => {
  const { id } = req.params
  await Company
    .deleteOne({ _id: id })
    .then( (accounts) => {
      if(accounts.n === 0){
        res.status(400).json({ warning: 'Conta inexistente'})
      } else {
        res.status(200).json({ warning: 'Conta apagada'})
      }})
    .catch( (err) => res.status(400).json({ error: 'Erro: ' + err }))
})

router.route('/show/:id').get(async (req, res) => {
  const { id } = req.params
  await Company
    .findById({_id: id})
    .then( (accounts) => {
      if(accounts === null){
        res.status(400).json({ warning: 'Conta inexistente'})
      } else { res.status(200).json(accounts) }})
    .catch( (err) => res.status(400).json({ error: 'Erro: ' + err }))
})


/* JOB POSTINGS */



module.exports = router