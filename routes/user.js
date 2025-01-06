// userRoutes.js
const express = require('express');
let router = express.Router();

// Route for "/user"
router.get("/", (req, res) => {
    res.send("user information");
});

// Route for "/user/newuser"
router.get("/newuser", (req, res) => {
    res.send("new user information");
});

// Route for "/user/createuser"
router.get("/createuser", (req, res) => {
    res.send("new user added");
});

// Route for "/user/:id"
router.get("/:id", (req, res) => {
    res.send("retrieve id value: " + req.params.id);
});

// Route for updating user with PUT
router.put("/:id", (req, res) => {
    res.send("update this id value: " + req.params.id);
});

// Route for deleting user with DELETE
router.delete("/:id", (req, res) => {
    res.send("delete this id value: " + req.params.id);
});

module.exports = router;
