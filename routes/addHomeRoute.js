const express = require("express");
const rout = express.Router();
const { getAddHome } = require("../controllers/home");
const { postAddHome } = require("../controllers/home");

rout.get("/addHome", getAddHome);

const data = [];

rout.post("/addHome", postAddHome);

exports.addHome = rout;
exports.homedDetails = data;
