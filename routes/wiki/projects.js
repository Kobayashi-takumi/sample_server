const express = require("express");
const router = express.Router();
const ProjectsModel = require("../../models/projectsModel");

router.get("/test", (req, res) => {
  res.json({
    message: "This is Projects Api"
  });
});

router.post("/createProject", (req, res) => {
  let Project = new ProjectsModel();
  Project.title = req.body.title;
  Project.memos = [];
  Project.date = req.body.date;

  Project.save(err => {
    if (err) {
      res.send(err);
    } else {
      res.json({ message: "Success" });
    }
  });
});

router.get("/", (req, res) => {
  ProjectsModel.find().then(result => {
    res.json(result);
  });
});

router.delete("/delete", (req, res) => {
  const _id = req.body._id;
  ProjectsModel.remove({ _id: _id }).then(() => {
    res.json({ message: "Success" });
  });
});

router.put("/memoUpdate", (req, res) => {
  const _id = req.body._id;
  const memos = req.body.memos;

  ProjectsModel.update(
    { _id: _id },
    { $set: { memos: memos } },
    { upsert: true, multi: true },
    err => {
      if (err) {
        res.send(err);
      } else {
        res.json({ message: "Success" });
      }
    }
  );
});

router.put("/titleUpdate", (req, res) => {
  const _id = req.body._id;
  const title = req.body.title;

  ProjectsModel.update(
    { _id: _id },
    { $set: { title: title } },
    { upsert: true, multi: true },
    err => {
      if (err) {
        res.send(err);
      } else {
        res.json({ message: "Success" });
      }
    }
  );
});

module.exports = router;
