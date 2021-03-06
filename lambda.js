const awsServerlessExpress = require("aws-serverless-express");
const server = require("./dist/server");

const binaryMimeTypes = [
  "application/javascript",
  "application/json",
  "application/octet-stream",
  "application/xml",
  "image/jpeg",
  "image/png",
  "image/gif",
  "text/comma-separated-values",
  "text/css",
  "text/html",
  "text/javascript",
  "text/plain",
  "text/text",
  "text/xml",
  "image/x-icon",
  "image/svg+xml",
  "application/x-font-ttf",
];

const serverProxy = awsServerlessExpress.createServer(
  server.app,
  null,
  binaryMimeTypes
);
module.exports.server = (event, context) =>
  awsServerlessExpress.proxy(serverProxy, event, context);
