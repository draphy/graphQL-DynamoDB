const Joi = require("joi");
const { v4: uuidv4 } = require("uuid");

const BooksSchema = Joi.object({
  Id: Joi.string().default(uuidv4().toString()).required(),
  name: Joi.string().required(),
  genre: Joi.string().required(),
  authorId: Joi.string().required(),
  CreatedDate: Joi.string().default(new Date().toISOString()).required(),
});

const validateBooks = async (data) => {
  try {
    const item = data;
    item.Id = uuidv4().toString();
    item.CreatedDate = new Date().toISOString();
    const validatedData = await BooksSchema.validateAsync(item, {
      abortEarly: false,
    });
    console.log("hi validatedData", validatedData);
    return validatedData;
  } catch (err) {
    throw new Error(`Validation failed: ${err.message}`);
  }
};

module.exports = validateBooks;
