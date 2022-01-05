const express = require('express');
const router = express.Router();

const User = require('../models/user');

router.get('/', (req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => console.log(err))
});

router.post('/', (req, res) => {
    const { name, email } = req.body;
    const newUser = new User({
        name: name, email: email
    })

    console.log('post user data : ');
    console.log(newUser);

    newUser.save()
        .then(() => {
            console.log("Created account successfully");
            return res.json({
                message: "Created account successfully"
            });
        })
        .catch(err => {
            console.log("Error creating account");
            console.log(err);
            return res.status(400).json({
                "error": err,
                "message": "Error creating account"
            })
        });
});

module.exports = router;
