const express = require("express");
const rout = express.Router();
const { getAddHome } = require("../controllers/host-controller.js");
const { postAddHome } = require("../controllers/host-controller.js");
const { getHostHomeList } = require("../controllers/host-controller.js");

rout.get("/host-addHome", getAddHome);
rout.post("/host-addHome", postAddHome);
rout.get("/host-home-list", getHostHomeList);

exports.hostRouter = rout;
