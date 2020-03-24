var mongoose = require("mongoose");
var bucketListModel = mongoose.Schema({
  b_title: {
    type: String,
    unique: true
  }
});
module.exports = mongoose.model("tbl_bucketList", bucketListModel);
