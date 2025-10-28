const express = require("express");
const route = express.Router();

const { getIndex } = require("../controllers/store-controller");
const { getBookings } = require("../controllers/store-controller");
const { getFavouriteList } = require("../controllers/store-controller");
const { gethomeList } = require("../controllers/store-controller");

route.get("/", getIndex);
route.get("/booking", getBookings);
route.get("/favourite", getFavouriteList);
route.get("/home-list", gethomeList);

exports.storeRouter = route;
