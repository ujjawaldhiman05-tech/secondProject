const Home = require("../modules/homes");

exports.getAddHome = (req, res, next) => {
  res.render("host/addHome", { title: "addHome" });
};

exports.postAddHome = (req, res, next) => {
  const { houseName, price, location, rating, photoUrl } = req.body;
  const home = new Home(houseName, price, location, rating, photoUrl);
  home.save();
  res.render("host/home-added", { title: "submit" });
};

exports.getHostHomeList = (req, res, next) => {
  Home.allHomes((details) =>
    res.render("host/home-list", { title: "Home", homeDetails: details })
  );
};
