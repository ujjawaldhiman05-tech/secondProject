const favourite = require("../modules/favourite");
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
  favourite.getFavourites((favourites) => {
    Home.allHomes((details) => {
      const dataHome = details.filter((element) => {
        return favourites.includes(element.id.toString());
      });
      res.render("store/favourite-list", {
        title: "Home",
        homeDetails: dataHome,
      });
    });
  });
};

exports.postFavouriteList = (req, res, next) => {
  favourite.addToFavourite(req.body.id, (err) => {
    if (err) {
      console.log(err);
    }
    res.redirect("/favourite");
  });
};

exports.postFavouriteDelete = (req, res, next) => {
  const id = req.params.homeId;

  favourite.deleteFavourite(id, () => {
    res.redirect("/favourite");
  });
};

exports.gethomeList = (req, res, next) => {
  Home.allHomes((details) =>
    res.render("store/home-list", { title: "Home", homeDetails: details })
  );
};

exports.getHomeDetails = (req, res, next) => {
  const homeID = req.params.homeID;

  Home.findById(homeID, (homeData) => {
    if (!homeData) {
      res.redirect("/home-list");
    } else {
      res.render("store/home-details", { title: "Home", home: homeData });
    }
  });
};
