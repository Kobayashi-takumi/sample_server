const mongooes = require("mongoose");
let Schema = mongooes.Schema;
const moment = require("moment");

let Projectsschema = new Schema({
  title: String,
  memos: [
    {
      memoTitle: String,
      memoBody: String,
      tags: [],
      date: { type: Date, default: Date.now }
    }
  ],
  date: { type: Date, default: Date.now }
});

module.exports = mongooes.model("ProjectsModel", Projectsschema);
