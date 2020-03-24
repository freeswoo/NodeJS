var express = require("express");
var router = express.Router();
var bListVO = require("../models/BucketListVO");
var moment = require("moment");
var cors = require("cors");

var app = express();
app.use(cors());
var corsOption = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200
};

router.get("/", (req, res) => {
  bListVO.find({}).exec((err, data) => {
    res.json(data);
  });
});

router.post("/", (req, res) => {
  console.log(req.body);
  var bucket = new bListVO(req.body);
  console.log(bucket);
  bucket.save((err, data) => {
    console.log("결과", data);
    res.json(data);
  });
});

router.put("/", (req, res) => {
  console.log(req.body);

  bListVO
    .update({ _id: req.body._id }, { $set: req.body })
    .exec((err, result) => {
      res.json(result);
    });
});

router.delete("/", (req, res) => {
  bListVO.deleteOne({ _id: req.body._id }).exec((err, data) => {
    if (err) {
      res.json(err);
    } else {
      res.json(data);
    }
  });
});
module.exports = router;
