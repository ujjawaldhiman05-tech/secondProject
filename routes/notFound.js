const express = require("express");
const route = express.Router();
const { notFound } = require("../controllers/error");

route.use("/", notFound);

exports.notFound = route;
