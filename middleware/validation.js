export function validationMiddleware(schema) {
  return async (req, res, next) => {
    const validationOptions = {
      abortEarly: false,
      allowUnknown: true,
      stripUnknown: true,
    };
    try {
      req.body = await schema.validateAsync(
        { ...req.body, ...req.params },
        validationOptions
      );
      next();
    } catch (e) {
      const errors = [];
      e.details.forEach((error) => {
        errors.push({
          message: error.message.replace(/\\"|"/g, ""),
          path: error.path[0],
        });
      });
      return res.status(400).json({
        msg: "error",
        statusCode: 400,
        data: errors,
      });
    }
  };
}
