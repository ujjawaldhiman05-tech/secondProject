exports.notFound = (req, res, next) => {
  res.status(404);
  res.render("notFound", { title: "404" });
};
