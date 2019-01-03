exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        { id: 1, usernameInput: "daniel", passwordInput: "123" },
        { id: 2, usernameInput: "josue", passwordInput: "123" },
        { id: 3, usernameInput: "kevin", passwordInput: "123" },
        { id: 4, usernameInput: "jeff", passwordInput: "123" }
      ]);
    });
};
