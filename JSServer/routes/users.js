const express = require("express");
const router = express.Router();
const usersDb = require("../helpers/usersDb");
const collectionsDb = require("../helpers/collectionsDb");

router.get('/', async (req, res) => {
    try {
        const users = usersDb.get();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ error: "There was an error in retrieving the users." });
    }
});

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const user = usersDb.get()
                            .where("id", id);
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ error: "There was an error in retrieving that user."});
    }
});

router.get('/:id/collections' , async (req, res) => {
    const id = req.params.id;
    try {
        const userCollections = collectionsDb.get()
                                  .where("usersID", id);
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({error: "There was an error in retrieving that user's collections"});
    }
});

router.post('/', async (req, res) => {
    const usernameInput  = req.body.username;
    const passwordInput = req.body.password;
    try {
        const user = await usersDb.insert({usernameInput, passwordInput});
        res.status(200).json(user)
    } catch (err) {
        res.status(500).json({error: "There was an error in creating a user"});
    }
});


router.put('/:id', async (req, res) => {
    const id = req.params.id
    const usernameInput = req.body.username;
    const passwordInput = req.body.password;
    const user = {usernameInput, passwordInput};
    try {
        const updatedUser = await usersDb.update({id, user})
        res.status(200).json(updatedUser);
    } catch (err) {
        res.status(500).json({error: "There was an error in updating the user"});
    }
});



router.delete('/:id' , async (req, res) => {
    const id = req.params.id
    try {
        const user = await usersDb.remove(id);
        res.status(200).json(user);
    } catch (err) {

    }
});

module.exports = router;