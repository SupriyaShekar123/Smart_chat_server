const express = require("express");

const http = require("http");
const socketIo = require("socket.io");

const app = express();
const PORT = process.env.PORT || 4000;

function Listening() {
  console.log(`I am listening to ${PORT}`);
}

(app.listen = PORT), Listening();
