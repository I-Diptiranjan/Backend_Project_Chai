const asyncHandler = (func) => async (req, res, next) => {
  Promise.resolve(func(req, res, next)).catch((err) => next(err));
};

/*
const asyncHandler = (fn) => async (req, res, next) => {
  try {
    await fn(req, res, next);
  } catch (err) {
    res.status(err.code || 500).json({
      success: true,
      message: err.message,
    });
  }
};

*/

export { asyncHandler };
