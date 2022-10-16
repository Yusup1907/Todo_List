const express = require("express");
const { createTodo, getAllTodo, getSingleTodo, deleteTodo, updateTodo } = require("../controller/TodoController");

const router = express.Router();

router.post('/todo-items', createTodo);
router.get('/todo-items', getAllTodo);
router.get('/todo-items/:id', getSingleTodo);
router.delete('/todo-items/:id', deleteTodo);
router.put('/todo-items/:id', updateTodo);



  module.exports = router;
