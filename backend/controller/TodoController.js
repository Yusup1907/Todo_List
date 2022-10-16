const { Activity, Todo } = require("../db/models");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ErrorHandler = require("../utils/ErrorHandler");

// Crearte Activity

exports.createTodo = catchAsyncErrors(async (req, res, next) => {
  const { title, priority, activity_group_id, isactive } = req.body;
  const todos = await Todo.create({ title, priority, activity_group_id, isactive });

  res.status(201).json({
    status: "Success",
    message: "Success",
    data: todos,
  });
});

// get All Activity
exports.getAllTodo = catchAsyncErrors(async (req, res, next) => {
  const todos = await Todo.findAll({
    attibutes: ["id", "title", "priority", "activity_group_id", "isactive"],
  });

  res.status(200).json({
    status: "Success",
    message: "Success",
    data: todos,
  });
});

// get Single Activity

exports.getSingleTodo = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  const todos = await Todo.findOne({
    where: { id: id },
  });

  if (!todos) {
    return next(new ErrorHandler("Todo is not found with this id", 404));
  }

  res.status(200).json({
    status: "Success",
    message: "Success",
    data: todos,
  });
});

// Delete Activity

exports.deleteTodo = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  const todos = await Todo.findOne({
    where: { id: id },
  });

  if (!todos) {
    return next(new ErrorHandler("Activity is not found with this id", 404));
  }

  await Todo.destroy({
    where: {
      id: req.params.id,
    },
  });

  res.status(200).json({
    status: "Not Found",
    message: "Activity deleted successfully",
    data: {},
  });
});

// Update Activity

exports.updateTodo = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  const { title, priority, activity_group_id, isactive } = req.body;
  const todos = await Todo.findOne({
    where: { id: id },
  });

  if (!todos) {
    return next(new ErrorHandler("Todo is not found with this id", 404));
  }

  await todos.update({title: title, priority: priority, isactive: isactive});

  res.status(200).json({
    status: "Success",
    message: "Success",
    data: todos,
  });
});
