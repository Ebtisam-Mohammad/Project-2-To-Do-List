const {Schema, model} = require("mongoose");

const todoSchema=new Schema({
  title: String,
  isCompleted: Boolean
})

// Model
const Todos=model('Todo',todoSchema)

module.exports = Todos