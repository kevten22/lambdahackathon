const usersDb = require("../dbConfig");

module.exports = {
  get: function() {
    return usersDb("users");
  },
  insert: function(user) {
    return usersDb("users").insert(user);
  },
  update: function(id, user) {
    return usersDb("users")
      .where("id", id)
      .update(user);
  },
  remove: function(id) {
    return usersDb("users")
      .where("id", id)
      .del();
  }
};
