exports.up = function(knex, Promise) {
  return knex.schema.createTable("images", tbl => {
    tbl.increments();
    tbl.string("imageURL").notNullable();
    tbl.integer("true");
    tbl.integer("false");
    tbl
      .integer("collectionID")
      .unsigned()
      .notNullable()
      .refereneces("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDELETE("CASCADE");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("images");
};
