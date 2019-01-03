exports.up = function(knex, Promise) {
  return knex.schema.createTable("users", function(tbl) {
    tbl.increments();
    tbl
      .string("usernameInput", 100)
      .notNullable()
      .unique();
    tbl.string("passwordInput", 100).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("users");
};
