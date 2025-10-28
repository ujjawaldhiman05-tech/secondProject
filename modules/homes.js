const { mainPath } = require("../utils/mainFolderPath");
const path = require("path");
const fs = require("fs");

module.exports = class Home {
  constructor(houseName, price, location, rating, photoUrl) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoUrl = photoUrl;
  }

  save() {
    Home.allHomes((addDetails) => {
      addDetails.push(this);
      const filePath = path.join(mainPath, "data", "homesDetails.json");
      fs.writeFile(filePath, JSON.stringify(addDetails), (err) => {
        console.log(err);
      });
    });
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
};
