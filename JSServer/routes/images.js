const express = require("express");
const router = express.Router();
const imagesDb = require("../helpers/imagesDb");

//gets all images in the db, should use helpers or the routes to select only matching collections id??
//get route
router.get("/", async (req, res) => {
  try {
    const images = await imagesDb.get();
    res.status(200).json(images);
  } catch (error) {
    res.status(500).json({ error: "error getting images" });
  }
});
//post route
router.post("/", async (req, res) => {
  const {
    imageURL,
    questionParam,
    trueOption,
    falseOption,
    collectionsID
  } = req.body;
  if (!imageURL) {
    res.status(400).json({ error: "please provide image file" });
  } else if (!questionParam) {
    res.status(400).json({ error: "must provide annotation params" });
  } else if (!collectionsID) {
    res.status(400).json({
      error:
        "need to be able to reference collection, please provide collectionsID"
    });
  }
  try {
    const images = await imagesDb.insert(req.body);
  } catch (error) {
    res
      .status(500)
      .json({ error: "there was an error adding the image to the db" });
  }
});
//edit route
router.put("/:id", async (req, res) => {
  const id = req.params.id;
});
