const express = require("express");
const route = express.Router();

const { getIndex } = require("../controllers/store-controller");
const { getBookings } = require("../controllers/store-controller");
const { getFavouriteList } = require("../controllers/store-controller");
const { postFavouriteList } = require("../controllers/store-controller");
const { gethomeList } = require("../controllers/store-controller");
const { getHomeDetails } = require("../controllers/store-controller");

route.get("/", getIndex);
route.get("/booking", getBookings);
route.get("/favourite", getFavouriteList);
route.post("/favourite", postFavouriteList);
route.get("/home-list", gethomeList);
route.get("/home-list/:homeID", getHomeDetails);

// route.get("/home-list/:homeID", gethomeDetails);

exports.storeRouter = route;
