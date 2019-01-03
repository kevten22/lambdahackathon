exports.up = function(knex, Promise) {
  return knex.schema.createTable("collections", tbl => {
    tbl.increments();
    tbl.string("collectionName").notNullable();
    tbl.timestamp("created_at", 6).defaultTo(Date.now());
    tbl
      .integer("userID")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("collections");
};
