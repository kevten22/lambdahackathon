exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("collections")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("collections").insert([
        { id: 1, collectionName: "dogs", created_at: "", userID: 1 },
        { id: 2, collectionName: "cats", created_at: "", userID: 2 },
        { id: 3, collectionName: "birds", created_at: "", userID: 1 },
        { id: 4, collectionName: "fish", created_at: "", userID: 3 },
        { id: 5, collectionName: "cars", created_at: "", userID: 4 },
        { id: 6, collectionName: "planes", created_at: "", userID: 4 }
      ]);
    });
};
