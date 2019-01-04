exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("images")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("images").insert([
        {
          id: 1,
          imageURL: "rowValue1",
          questionParam: "question",
          trueOption: 0,
          falseOption: 0,
          collectionsID: 1
        },
        {
          id: 2,
          imageURL: "rowValue2",
          questionParam: "question",
          trueOption: 0,
          falseOption: 0,
          collectionsID: 2
        },
        {
          id: 3,
          imageURL: "rowValue3",
          questionParam: "question",
          trueOption: 0,
          falseOption: 0,
          collectionsID: 3
        },
        {
          id: 4,
          imageURL: "rowValue3",
          questionParam: "question",
          trueOption: 0,
          falseOption: 0,
          collectionsID: 1
        },
        {
          id: 5,
          imageURL: "rowValue3",
          questionParam: "question",
          trueOption: 0,
          false: 0,
          collectionsID: 5
        },
        {
          id: 6,
          imageURL: "rowValue3",
          questionParam: "question",
          trueOption: 0,
          falseOption: 0,
          collectionsID: 5
        },
        {
          id: 7,
          imageURL: "rowValue3",
          questionParam: "question",
          trueOption: 0,
          falseOption: 0,
          collectionsID: 6
        },
        {
          id: 8,
          imageURL: "rowValue3",
          questionParam: "question",
          trueOption: 0,
          falseOption: 0,
          collectionsID: 4
        },
        {
          id: 9,
          imageURL: "rowValue3",
          questionParam: "question",
          trueOption: 0,
          falseOption: 0,
          collectionsID: 1
        },
        {
          id: 10,
          imageURL: "rowValue3",
          questionParam: "question",
          trueOption: 0,
          falseOption: 0,
          collectionsID: 3
        }
      ]);
    });
};
