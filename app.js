const express = require("express");
const mongoose = require("mongoose");
const PostDao = require("./models/PostModel");

const app = express();
mongoose.connect("mongodb://localhost/cleanblog-db");
const port = 5000;

//Setting template engine
app.set("view engine", "ejs");

//Using middlewares
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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
app.get("/", async (req, res, next) => {
  const posts = await PostDao.find();
  res.render("index.ejs", { posts: posts });
});
app.get("/add_post", (req, res) => {
  res.render("add_post.ejs");
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/post/:id", async (req, res) => {
  const post = await PostDao.findById(req.params.id);
  res.render("post", { post: post });
});
app.post("/post", async (req, res) => {
  await PostDao.create(req.body);
  res.status(200).redirect("/");
});
app.get("*", (req, res) => {
  res.status(404).send("404 No Pages Found");
});

app.listen(port, () => {
  console.log(`Uygulama ${port} portunda başlatıldı.`);
});
