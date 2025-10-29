const { mainPath } = require("../utils/mainFolderPath");
const path = require("path");
const fs = require("fs");

const favouriteDataPath = path.join(mainPath, "data", "favourite.json");
module.exports = class favourite {
  static addToFavourite(homeID, callback) {
    favourite.getFavourites((data) => {
      if (data.includes(homeID)) {
        console.log("already did");
        callback(null); // Call callback even if already in favorites
      } else {
        data.push(homeID);
        fs.writeFile(favouriteDataPath, JSON.stringify(data), callback);
      }
    });
  }

  static getFavourites(callback) {
    fs.readFile(favouriteDataPath, (err, data) => {
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
