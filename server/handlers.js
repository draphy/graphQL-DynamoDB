const dynamoDB = require("./aws_dynamoDB");
const validateAuthor = require("./models/author");
const validateBooks = require("./models/book");
const { Authors, Books } = require("./table");

const authorPut = async (data) => {
  const item = await validateAuthor(data);
  var params = {
    TableName: Authors,
    Item: item,
  };

  let putItem = new Promise((res, rej) => {
    dynamoDB.put(params, function (err, data) {
      if (err) {
        console.log("Error authorPut", err);
        rej(err);
      } else {
        console.log("Success!");
        res(params.Item); // Return the inserted data
      }
    });
  });
  const result = await putItem;
  console.log(result);
  return result;
};

const bookPut = async (data) => {
  console.log(data);
  const item = await validateBooks(data);
  var params = {
    TableName: Books,
    Item: item,
  };

  let putItem = new Promise((res, rej) => {
    dynamoDB.put(params, function (err, data) {
      if (err) {
        console.log("Error bookPut", err);
        rej(err);
      } else {
        console.log("Success!");
        res(params.Item); // Return the inserted data
      }
    });
  });
  const result = await putItem;
  console.log(result);
  return result;
};

const authorsGet = async () => {
  // Scan method fetch data from dynamodb
  const params = {
    TableName: Authors,
  };

  try {
    const data = await dynamoDB.scan(params).promise();
    console.log(data.Items); // Prints all items in the "Authors" table
    return data.Items;
  } catch (err) {
    console.log("Error authorsGet", err);
  }
};
const bookGetbyId = async (id) => {
  const params = {
    TableName: Books,
    Key: {
      Id: id,
    },
  };
  try {
    const data = await dynamoDB
      .get(params, function (err, data) {
        if (err) {
          console.error(
            "Unable to read item. Error JSON:",
            JSON.stringify(err, null, 2)
          );
        } else {
          console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
        }
      })
      .promise();
    console.log(data.Item); // Prints all items in the "Authors" table
    return data.Item;
  } catch (err) {
    console.log("Error bookGetbyId", err);
  }
};

const booksGet = async () => {
  // Scan method fetch data from dynamodb
  const params = {
    TableName: Books,
  };

  try {
    const data = await dynamoDB.scan(params).promise();
    console.log(data.Items); // Prints all items in the "Authors" table
    return data.Items;
  } catch (err) {
    console.log("Error booksGet", err);
  }
};
const authorGet = async (Id) => {
  try {
    const params = {
      TableName: Authors,
      Key: {
        Id: Id,
      },
    };
    const author = await dynamoDB.get(params).promise();
    console.log(author.Item);
    return author.Item;
  } catch (err) {
    console.error("Error authorGet ", err);
    throw new Error("Failed to get author by ID");
  }
};

const authorGetbyId = async (Id) => {
  const params = {
    TableName: Authors,
    Key: {
      Id: Id,
    },
  };
  try {
    const data = await dynamoDB.get(params).promise();
    console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
    return data.Item; // Return the retrieved item
  } catch (err) {
    console.error(
      "Unable to read item. Error JSON authorGetbyId:",
      JSON.stringify(err, null, 2)
    );
    throw err; // Rethrow the error
  }
};

const getAllBooksByAuthorId = async (authorId) => {
  const params = {
    TableName: "Books",
    FilterExpression: "#authorId = :authorId",
    ExpressionAttributeNames: {
      "#authorId": "authorId",
    },
    ExpressionAttributeValues: {
      ":authorId": authorId,
    },
  };

  try {
    const data = await dynamoDB.scan(params).promise();
    console.log(
      "Success! Query method fetched data from dynamodb:",
      JSON.stringify(data, null, 2)
    );
    return data.Items;
  } catch (err) {
    console.log("Error getAllBooksByAuthorId :", err);
    throw err;
  }
};

module.exports = {
  authorPut,
  bookPut,
  authorsGet,
  authorGet,
  getAllBooksByAuthorId,
  booksGet,
  bookGetbyId,
  authorGetbyId,
};
