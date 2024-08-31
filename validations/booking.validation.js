import Joi from "joi";

export const createBookingValidation = Joi.object({
  artisan: Joi.string().required(),
  date: Joi.date().required(),
});
