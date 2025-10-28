exports.notFound = (req, res, next) => {
  res.render("notFound", { title: "404" });
};
