const imagesDb = require("../dbConfig");

module.exports = {
  get: function() {
    return imagesDb("images");
  },
  insert: function(image) {
    return imagesDb("images").insert(image);
  },
  update: function(id, image) {
    return imagesDb("images")
      .where("id", id)
      .update(image);
  },
  remove: function(id) {
    return imagesDb("images")
      .where("id", id)
      .del();
  }
};
