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

module.exports = router;
