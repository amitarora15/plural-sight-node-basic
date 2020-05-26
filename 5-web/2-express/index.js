const express = require('express');

const server = express();

server.get("/", (req, res) => {
  console.log("Root request");
  let obj = {};
  obj.message = "Root Message";
  res.send(obj);
});

server.get("/test", (req, res) => {
  console.log("Root request");
  let obj = {};
  obj.message = "Test Message";
  res.send(obj);
});

server.listen(4242, () => {
  console.log('Express Server is running...');
});
