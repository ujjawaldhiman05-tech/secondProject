const express = require("express");
const route = express.Router();
const { getHome } = require("../controllers/home");

route.get("/", getHome);

exports.homeRoute = route;
