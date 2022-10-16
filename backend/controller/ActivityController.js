const { Activity, Todo } = require("../db/models");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ErrorHandler = require("../utils/ErrorHandler");

// Crearte Activity

exports.createActivity = catchAsyncErrors(async (req, res, next) => {
  const { title, email } = req.body;
  const activities = await Activity.create({ title, email });

  res.status(201).json({
    status: "Success",
    message: "Success",
    data: activities,
  });
});

// get All Activity
exports.getAllActivity = catchAsyncErrors(async (req, res, next) => {
  const activities = await Activity.findAll({
    attibutes: ["id", "title", "email"],
  });

  res.status(200).json({
    status: "Success",
    message: "Success",
    data: activities,
  });
});

// get Single Activity

exports.getSingleActivity = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  const activities = await Activity.findOne({
    where: { id: id },
  });

  if (!activities) {
    return next(new ErrorHandler("Activity is not found with this id", 404));
  }

  res.status(200).json({
    status: "Success",
    message: "Success",
    data: activities,
  });
});

// Delete Activity

exports.deleteActivity = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  const activities = await Activity.findOne({
    where: { id: id },
  });

  if (!activities) {
    return next(new ErrorHandler("Activity is not found with this id", 404));
  }

  await Activity.destroy({
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

exports.updateActivity = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  const { title, email } = req.body;
  const activities = await Activity.findOne({
    where: { id: id },
  });

  if (!activities) {
    return next(new ErrorHandler("Activity is not found with this id", 404));
  }

  await activities.update({title: title, email: email});

  res.status(200).json({
    status: "Success",
    message: "Success",
    data: activities,
  });
});
