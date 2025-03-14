class ErrorHandler extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

export const errorMiddleware = (err, req, res, next) => {
  err.message = err.message || "Internal Server Error";
  err.statusCode = err.statusCode || 500;

  // Mongoose Cast Error (Invalid MongoDB ObjectId)
  if (err.name === "CastError") {
    err = new ErrorHandler(`Resource not found. Invalid: ${err.path}`, 400);
  }

  // Mongoose Validation Error (Schema validation)
  if (err.name === "ValidationError") {
    const validationErrors = Object.values(err.errors).map((e) => e.message);
    err = new ErrorHandler(validationErrors.join(", "), 400);
  }

  return res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};

export default ErrorHandler;
