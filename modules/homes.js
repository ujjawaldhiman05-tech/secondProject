const { mainPath } = require("../utils/mainFolderPath");
const path = require("path");
const fs = require("fs");
const favourite = require("./favourite");

module.exports = class Home {
  constructor(houseName, price, location, rating, photoUrl) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoUrl = photoUrl;
  }

  static allHomes(callback) {
    const fileContent = path.join(mainPath, "data", "homesDetails.json");
    fs.readFile(fileContent, (err, data) => {
      if (err) {
        // File missing or read error -> return empty list
        return callback([]);
      }

      try {
        const parsed = JSON.parse(data);
        if (Array.isArray(parsed)) {
          return callback(parsed);
        }
        // If file contains something else, return empty array
        return callback([]);
      } catch (parseErr) {
        // Invalid JSON -> return empty array
        return callback([]);
      }
    });
  }

  static findById(homeID, callback) {
    Home.allHomes((homes) => {
      const homeFound = homes.find((element) => element.id == homeID);

      callback(homeFound);
    });
  }

  static deleteHome(homeId, callback) {
    Home.allHomes((homes) => {
      homes = homes.filter((element) => {
        return homeId != element.id;
      });
      const filePath = path.join(mainPath, "data", "homesDetails.json");
      fs.writeFile(filePath, JSON.stringify(homes), (err) => {
        favourite.deleteFavourite(homeId, callback);
      });
    });
  }

  save() {
    Home.allHomes((addDetails) => {
      if (this.id) {
        addDetails = addDetails.map((element) => {
          const check = element.id == this.id ? this : element;

          return check;
        });
      } else {
        this.id = Math.random().toString();
        addDetails.push(this);
      }
      const filePath = path.join(mainPath, "data", "homesDetails.json");
      fs.writeFile(filePath, JSON.stringify(addDetails), (err) => {
        console.log(err);
      });
    });
  }
};
