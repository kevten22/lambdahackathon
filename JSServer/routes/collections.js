const express = require("express");
const router = express.Router();
const collectionsDb = require("../helpers/collectionsDb");

router.get("/", async (req, res) => {
  try {
    const collections = await collectionsDb.get();
    res.status(200).json(collections);
  } catch (error) {
    res.status(500).json({ error: "error getting collections" });
  }
});

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
    res
      .status(500)
      .json({
        error: "there was an error adding the collection to the database"
      });
  }
});

module.exports = router;
