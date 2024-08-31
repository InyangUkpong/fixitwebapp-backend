import Joi from "joi";

export const createArtisanValidation = Joi.object({
  job_title: Joi.string().required(),
  category: Joi.string()
    .required()
    .valid("Ac Repair", "Carpentry", "Appliance Repair"),
  bio: Joi.string().required(),
  services: Joi.array().items(Joi.string()).required(),
});
