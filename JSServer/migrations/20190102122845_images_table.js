exports.up = function(knex, Promise) {
  return knex.schema.createTable("images", tbl => {
    tbl.increments();
    tbl.string("imageURL").notNullable();
    tbl.string("questionParam").notNullable();
    tbl.integer("trueOption");
    tbl.integer("falseOption");
    tbl
      .integer("collectionsID")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("collections")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("images");
};
