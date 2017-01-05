const express = require('express')
const app = express()
const pgp = require('pg-promise')()
const {Todos} = require('./db')
const bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req, res) {
  Todos.getAll()
    .then((results) =>
      res.json({results})
    )
})

app.delete('/:id', function (req, res) {
  const id = req.params.id
  Todos.deleteOne(id)
    .then(() => res.json({1: 'success'}))
})

app.post('/', function( req, res ) {
  const {task} = req.body
  Todos.createTodo(value)
    .then(() => res.json({1: 'posted'}))
})

app.put('/:id', function( req, res ) {
  const id = req.params.id
  const {task} = req.body
  Todos.updateTodo(id, task)
    .then(() => res.json({1: 'updated'}))
})

app.listen(5000, function () {
  console.log('Example app listening on port 3000!')
})
