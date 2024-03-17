const express = require("express");

const app = express();
const port = 5000;

app.set("view engine", "ejs");
app.use(express.static("public"));
/*
app.get("/", (req, res) => {
  const firstObject = {
    id: 1,
    title: "Blog title",
    description: "Blog description",
  };
  res.status(200).send(firstObject);
});
*/
app.get("/", (req, res, next) => {
  res.render("index.ejs");
});
app.get("/add_post", (req, res) => {
  res.render("add_post.ejs");
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/post", (req, res) => {
  res.render("/post");
});
app.get("*", (req, res) => {
  res.status(404).send("404 No Pages Found");
});

app.listen(port, () => {
  console.log(`Uygulama ${port} portunda başlatıldı.`);
});
