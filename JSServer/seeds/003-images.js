exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("images")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("images").insert([
        {
          id: 1,
          imageURL:
            "https://github.com/kevten22/lambdahackathon/blob/master/JSServer/ImageData/birds/3950_ext_01_0.jpg?raw=true",
          questionParam: "is this a cat?",
          trueOption: 0,
          falseOption: 0,
          collectionsID: 1
        },
        {
          id: 2,
          imageURL:
            "https://github.com/kevten22/lambdahackathon/blob/master/JSServer/ImageData/birds/51DDQ3AGbnL.jpg?raw=true",
          questionParam: "is this a cat?",
          trueOption: 0,
          falseOption: 0,
          collectionsID: 1
        },
        {
          id: 3,
          imageURL:
            "https://github.com/kevten22/lambdahackathon/blob/master/JSServer/ImageData/birds/51j1HFdKEJL._SS500.jpg?raw=true",
          questionParam: "is this a cat?",
          trueOption: 0,
          falseOption: 0,
          collectionsID: 1
        },
        {
          id: 4,
          imageURL:
            "https://github.com/kevten22/lambdahackathon/blob/master/JSServer/ImageData/birds/Ruby-website-min-500x500.jpg?raw=true",
          questionParam: "is this a cat?",
          trueOption: 0,
          falseOption: 0,
          collectionsID: 1
        },
        {
          id: 5,
          imageURL:
            "https://github.com/kevten22/lambdahackathon/blob/master/JSServer/ImageData/birds/images.jpeg?raw=true",
          questionParam: "is this a cat?",
          trueOption: 0,
          falseOption: 0,
          collectionsID: 1
        },
        {
          id: 6,
          imageURL:
            "https://github.com/kevten22/lambdahackathon/blob/master/JSServer/ImageData/birds/portabella1.jpg?raw=true",
          questionParam: "is this a cat?",
          trueOption: 0,
          falseOption: 0,
          collectionsID: 1
        },
        {
          id: 7,
          imageURL:
            "https://github.com/kevten22/lambdahackathon/blob/master/JSServer/ImageData/birds/test.jpg?raw=true",
          questionParam: "is this a cat?",
          trueOption: 0,
          falseOption: 0,
          collectionsID: 1
        },
        {
          id: 8,
          imageURL:
            "https://github.com/kevten22/lambdahackathon/blob/master/JSServer/ImageData/dogs/3876_ext_01_0.jpg?raw=true",
          questionParam: "is this a dog?",
          trueOption: 0,
          falseOption: 0,
          collectionsID: 2
        },
        {
          id: 9,
          imageURL:
            "https://github.com/kevten22/lambdahackathon/blob/master/JSServer/ImageData/dogs/Instant-Pot-Spaghetti-4-of-5.jpg?raw=true",
          questionParam: "is this a dog?",
          trueOption: 0,
          falseOption: 0,
          collectionsID: 2
        },
        {
          id: 10,
          imageURL:
            "https://github.com/kevten22/lambdahackathon/blob/master/JSServer/ImageData/dogs/Lentil-Carrot-Hot-Dogs-4B-500x500.jpg?raw=true",
          questionParam: "is this a dog?",
          trueOption: 0,
          falseOption: 0,
          collectionsID: 2
        },
        {
          id: 11,
          imageURL:
            "https://github.com/kevten22/lambdahackathon/blob/master/JSServer/ImageData/dogs/hot-dog.jpeg?raw=true",
          questionParam: "is this a dog?",
          trueOption: 0,
          falseOption: 0,
          collectionsID: 2
        },
        {
          id: 12,
          imageURL:
            "https://github.com/kevten22/lambdahackathon/blob/master/JSServer/ImageData/dogs/people_page_blaine-still.jpg?raw=true",
          questionParam: "is this a dog?",
          trueOption: 0,
          falseOption: 0,
          collectionsID: 2
        },
        {
          id: 13,
          imageURL:
            "https://github.com/kevten22/lambdahackathon/blob/master/JSServer/ImageData/dogs/safety-serve-articles-driving-at-night.jpg?raw=true",
          questionParam: "is this a dog?",
          trueOption: 0,
          falseOption: 0,
          collectionsID: 2
        },
        {
          id: 14,
          imageURL:
            "https://github.com/kevten22/lambdahackathon/blob/master/JSServer/ImageData/dogs/safety-serve-articles-driving-at-night.jpg?raw=true",
          questionParam: "is this a dog?",
          trueOption: 0,
          falseOption: 0,
          collectionsID: 2
        }
      ]);
    });
};
