const Home = require("../modules/homes");

exports.getHome = (req, res, next) => {
  Home.allHomes((details) =>
    res.render("home", { title: "Home", homeDetails: details })
  );
};

exports.getAddHome = (req, res, next) => {
  res.render("addHome", { title: "addHome" });
};

exports.postAddHome = (req, res, next) => {
  const { houseName, price, location, rating, photoUrl } = req.body;
  const home = new Home(houseName, price, location, rating, photoUrl);
  home.save();
  res.render("submit", { title: "submit" });
};
