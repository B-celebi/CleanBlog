const mongoose = require("mongoose");
const moment = require("moment");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  name: String,
  title: String,
  detail: String,
  dateCreated: {
    type: Date,
    default: Date.now,
    get: (val) => moment(val).format("DD MM YYYY HH:mm"),
  },
});

const PostDao = mongoose.model("Post", PostSchema);

module.exports = PostDao;
