const express = require("express");
const path = require("path");
const app = express();
const { mainPath } = require("./utils/mainFolderPath");
const { storeRouter } = require("./routes/store-router");
const { hostRouter } = require("./routes/host-router");
const { notFound } = require("./routes/notFound");

app.use(express.static(path.join(mainPath, "public")));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", "views");

app.use(storeRouter);
app.use(hostRouter);
app.use(notFound);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(mainPath);
  console.log(`server has started on ${PORT}`);
});
