const express = require("express");
const router = express.Router();
const collectionsDb = require("../helpers/collectionsDb");

//read route
router.get("/", async (req, res) => {
  try {
    const collections = await collectionsDb.get();
    res.status(200).json(collections);
  } catch (error) {
    res.status(500).json({ error: "error getting collections" });
  }
});

router.get("/:id", async (req, res) => {
    const id = req.params.id
  try {
    const collection = await collectionsDb.get()
                                          .where('id', id);
    res.status(200).json(collection);
  }
  catch (error) {
    res.status(500).json({ error: "Error retrieving that specific collection."});
  }
})

//create router

router.post("/", async (req, res) => {
  const { collectionName, created_at, userID } = req.body;
  if (!collectionName) {
    res.status(400).json({ error: "please provide title for collection" });
  } else if (!userID) {
    res
      .status(400)
      .json({ error: "must have a user ID to reference collection to" });
  }
  try {
    const collection = await collectionsDb.insert({
      collectionName,
      created_at,
      userID
    });
    res.status(201).json({ collectionName, userID });
  } catch (error) {
    res.status(500).json({
      error: "there was an error adding the collection to the database"
    });
  }
});
//edit route
router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const { collectionName, created_at, userID } = req.body;
  if (!collectionName) {
    res.status(400).json({ error: "please provide title for collection" });
  } else if (!userID) {
    res
      .status(400)
      .json({ error: "must have a user ID to reference collection to" });
  }
  try {
    const collection = await collectionsDb.update(id, {
      collectionName,
      userId
    });
    if (!collection) {
      res.status(404).json({
        error: " the collection with the specified ID does not exsist"
      });
    }
    res.status(200).json({ collectionName, userId });
  } catch (error) {
    res
      .status(500)
      .json({ error: "the collection information could not be modified" });
  }
});
//destroy route
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const collection = await collectionsDb.remove(id);
    if (!collection) {
      res.status(404).json({
        message: "the collection with the specified ID does not exist"
      });
    }
    res.status(200).json({ message: "collection deleted" });
  } catch (error) {
    res.status(500).json({ error: "the collection could not be deleted" });
  }
});


module.exports = router;
