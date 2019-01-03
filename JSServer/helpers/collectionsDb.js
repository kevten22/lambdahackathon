const collectionsDb = require("../dbConfig");

module.exports = {
  get: function() {
    return collectionsDb("collections");
  },
  insert: function(collection) {
    return collectionsDb("collections").insert(collection);
  },
  update: function(id, collection) {
    return collectionsDb("collections")
      .where("id", id)
      .update(collection);
  },
  remove: function(id) {
    return collectionsDb("collections")
      .where("id", id)
      .del();
  }
};
