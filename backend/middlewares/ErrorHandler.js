const HandleError = (res, error, statusCode = 500) => {
  console.error(error.stack); // Log the error stack (optional for debugging)

  res.status(statusCode).json({
    success: false,
    message: error.message || 'Internal Server Error',
  });
};

module.exports = HandleError;
