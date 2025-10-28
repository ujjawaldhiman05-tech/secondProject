const Home = require("../modules/homes");

exports.getIndex = (req, res, next) => {
  Home.allHomes((details) =>
    res.render("store/index", { title: "Home", homeDetails: details })
  );
};

exports.getBookings = (req, res, next) => {
  res.render("store/booking", { title: "Booking" });
};
exports.getFavouriteList = (req, res, next) => {
  Home.allHomes((details) =>
    res.render("store/favourite-list", { title: "Home", homeDetails: details })
  );
};

exports.gethomeList = (req, res, next) => {
  Home.allHomes((details) =>
    res.render("store/home-list", { title: "Home", homeDetails: details })
  );
};
