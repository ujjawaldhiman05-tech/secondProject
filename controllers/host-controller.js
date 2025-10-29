const Home = require("../modules/homes");

exports.getAddHome = (req, res, next) => {
  res.render("host/edit-home", { title: "Edit-Home", editing: false });
};

exports.getEditHome = (req, res, next) => {
  const homeId = req.params.homeId;
  const query = req.query.editing === "true";
  Home.findById(homeId, (home) => {
    if (!home) {
      return res.redirect("/host-home-list");
    } else {
      res.render("host/edit-home", {
        title: "Edit your Home",
        editing: query,
        homeData: home,
      });
    }
  });
};

exports.postEditHome = (req, res, next) => {
  const { houseName, price, location, rating, photoUrl, id } = req.body;
  const home = new Home(houseName, price, location, rating, photoUrl);
  home.id = id;

  home.save();
  // after editing, redirect to the host home list which will load `homeDetails`
  res.redirect("/host-home-list");
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

exports.postDeleteHome = (req, res, next) => {
  const id = req.params.homeId;

  Home.deleteHome(id, (err) => {
    console.log(err);
    res.redirect("/host-home-list");
  });
};
