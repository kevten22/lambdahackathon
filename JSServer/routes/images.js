const express = require("express");
const router = express.Router();
const imagesDb = require("../helpers/imagesDb");
// const imageFolder = "./ImageData/dogs";
// const fs = require('fs');
//gets all images in the db, should use helpers or the routes to select only matching collections id??
//get route
// router.use('/dogs', express.static('ImageData/dogs'));

router.get("/", async (req, res) => {
  try {
    const images = await imagesDb.get();
    res.status(200).json(images);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "error getting images" });
  }
});

router.get("/dogs", async (req, res) => {
  const imagesArray = [];

  fs.readdirAsync = dirname => {
    return new Promise((resolve, reject) => {
      fs.readdir(dirname, (err, filenames) => {
        if (err) reject(err);
        else
          filenames.forEach(file => {
            imagesArray.push(`dogs/${file}`);
          });
        resolve(imagesArray);
      });
    });
  };

  fs.readdirAsync(imageFolder)
    .then(files => {
      res.status(200).json(files);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ error: "error getting images of dogs" });
    });
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
    const images = await imagesDb.update(id, req.body);
    if (!images) {
      res.status(404).json({
        error: "the image with the specified id does not exist"
      });
    }
    res.status(200).json(req.body);
  } catch (error) {
    res
      .status(500)
      .json({ error: "the image information could not be modified" });
  }
});
//delete route
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const image = await imagesDb.remove(id);
    if (!image) {
      res.status(404).json({
        message: "the image with the specified ID does not exist"
      });
    }
    res.status(200).json({ message: "image deleted" });
  } catch (error) {
    res.status(500).json({ error: "the image could not be deleted" });
  }
});

module.exports = router;
