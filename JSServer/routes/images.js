const express = require("express");
const router = express.Router();
const imagesDb = require("../helpers/imagesDb");

//gets all images in the db, should use helpers or the routes to select only matching collections id??
router.get("/", async (req, res) => {});
const {
  imageURL,
  questionParam,
  trueOption,
  falseOption,
  collectionsID
} = req.body;
