const mongoose = require('mongoose')
const { schema } = require('./userModel')

 const cartSchema  = mongoose.Schema({
  name: String

 })
 module.exports= mongoose.model('carts',cartSchema)