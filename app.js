const express = require("express");

const app = express();
const port = 5000;

app.get("/", (req, res) => {
  const firstObject = {
    id: 1,
    title: "Blog title",
    description: "Blog description",
  };
  res.status(200).send(firstObject);
});

app.get("*", (req, res) => {
  res.status(404).send("404 No Pages Found");
});

app.listen(port, () => {
  console.log(`Uygulama ${port} portunda başlatıldı.`);
});
