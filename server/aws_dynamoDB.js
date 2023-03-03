require("dotenv").config();
const AWS = require("aws-sdk");

const my_AWSAccessKeyId = process.env.AWSAccessKeyId;
const my_AWSSecretKey = process.env.AWSSecretKey;
const aws_region = process.env.region;

const dynamoDB = new AWS.DynamoDB.DocumentClient({
  region: aws_region,
  accessKeyId: my_AWSAccessKeyId,
  secretAccessKey: my_AWSSecretKey,
});

module.exports = dynamoDB;
