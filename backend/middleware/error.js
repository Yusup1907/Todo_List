const ErrorHandler = require("../utils/ErrorHandler");

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Interval server error";

  // wrong MySql id error
  if (err.name === "CastError") {
    const message = `Resources not foun with this id...Invalid ${err.path}`;
    err = new ErrorHandler(message, 400);
  }

  // Duplicate key error

  if (err.code === 11000) {
    const message = `Duplicate ${Object.keys(err.keyValue)} Entered`;
    err = new ErrorHandler(message, 400);
  }

  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};
