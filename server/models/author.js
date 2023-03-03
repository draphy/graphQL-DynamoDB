const Joi = require("joi");
const { v4: uuidv4 } = require("uuid");

const authorSchema = Joi.object({
  Id: Joi.string().default(uuidv4().toString()).required(),
  name: Joi.string().required(),
  age: Joi.number().required(),
  CreationDate: Joi.string().default(new Date().toISOString()).required(),
});

const validateAuthor = async (data) => {
  try {
    const item = data;
    item.Id = uuidv4().toString();
    item.CreationDate = new Date().toISOString();
    const validatedData = await authorSchema.validateAsync(item, {
      abortEarly: false,
    });
    return validatedData;
  } catch (err) {
    throw new Error(`Validation failed: ${err.message}`);
  }
};

module.exports = validateAuthor;
