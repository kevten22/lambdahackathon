exports.up = function(knex, Promise) {
  return knex.schema.createTable("images", tbl => {
    tbl.increments();
    tbl.string("imageURL").notNullable();
    tbl.integer("true");
    tbl.integer("false");
    tbl
      .integer("usersID")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("images");
};
