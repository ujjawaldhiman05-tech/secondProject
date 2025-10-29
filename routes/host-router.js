const express = require("express");
const rout = express.Router();
const { getAddHome } = require("../controllers/host-controller.js");
const { postAddHome } = require("../controllers/host-controller.js");
const { getHostHomeList } = require("../controllers/host-controller.js");
const { getEditHome } = require("../controllers/host-controller.js");
const { postEditHome } = require("../controllers/host-controller.js");
const { postDeleteHome } = require("../controllers/host-controller.js");

rout.get("/host-addHome", getAddHome);
rout.post("/host-addHome", postAddHome);
rout.get("/host-home-list", getHostHomeList);
rout.get("/host-edit-home/:homeId", getEditHome);
rout.post("/host-edit-home", postEditHome);
rout.post("/host-deleteHome/:homeId", postDeleteHome);

exports.hostRouter = rout;
